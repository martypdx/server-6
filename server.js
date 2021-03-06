require('dotenv').config();

// express for serving, morgan for logging, cors for cors, request for client AJAX lib for calling 3rd party APIs
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const request = require('superagent');

// initialize all three, plus express.json for reading json body
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// server files in public directory
app.use(express.static('public'));

// connect to database
const client = require('./db-client');

// auth
app.post('/api/auth/signup', (req, res) => {
  const body = req.body;
  const first = body.first;
  const last = body.last;
  const email = body.email;
  const password = body.password;

  if(!email || !password) {
    res.status(400).send({
      error: 'email and password are required'
    });
    return;
  }

  client.query(`
    SELECT count(*)
    FROM users
    WHERE email = $1
  `,
  [email])
    .then(results => {
      if(results.rows[0].count > 0) {
        res.status(400).send({ error: 'email already in use' });
        return;
      }

      client.query(`
        INSERT INTO users (first, last, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING first, last, id, email
      `,
      [first, last, email, password])
        .then(results => {
          res.send(results.rows[0]);
        });
    });
});

app.post('/api/auth/signin', (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  if(!email || !password) {
    res.status(400).send({
      error: 'email and password are required'
    });
    return;
  }

  client.query(`
    SELECT id, email, password
    FROM users
    WHERE email = $1
  `,
  [email]
  )
    .then(results => {
      const row = results.rows[0];
      if(!row || row.password !== password) {
        res.status(401).send({ error: 'invalid email or password' });
        return;
      }
      res.send({ 
        id: row.id,
        email: row.email
      });
    });
});

app.use((req, res, next) => {
  // is there a Authorization header?
  const id = req.get('Authorization');
  if(!id) {
    // no - send an error
    res.status(403).send({
      error: 'No token found'
    });
    return;
  }
  // 1. set req.userId to the header
  req.userId = id;
  // 2. call next()
  next();
});

// muscles
app.get('/api/muscles', (req, res, next) => {

  client.query(`
    SELECT id, name
    FROM muscles
    ORDER BY name;
  `
  )
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

// movements
app.get('/api/movements', (req, res, next) => {

  client.query(`
    SELECT
      mo.id, 
      mo.name,
      mu.name as "muscle"
    FROM movements mo
    LEFT JOIN muscles mu
    ON mo.muscle_id = mu.id
    ORDER BY mo.name;
  `
  )
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.post('/api/movements', (req, res, next) => {
  const body = req.body;
  // Why would your app be sending a request it knows is erroneous?
  // Why would your server believe the client?
  if(body.description === 'error') return next('bad name');

  client.query(`
    INSERT INTO movements (user_id, name, muscle_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  [req.userId, body.name, body.muscle_id]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

// programs
app.get('/api/programs', (req, res, next) => {

  client.query(`
    SELECT 
      pm.program_id,
      m.name as "movement",
      pm.reps, 
      pm.weight_percentage
    FROM programs_to_movements pm
    LEFT JOIN movements m
    ON pm.movement_id = m.id
    ORDER BY pm.movement_id;
  
    SELECT
      p.id,
      p.name,
      p.description
    FROM programs p;
  `
  )
    .then(result => {
      const programMovements = result[0].rows;
      const programs = result[1].rows;

      programs.forEach(program => {
        program.exercises = programMovements.filter(pm => pm.program_id === program.id);
      });
    
      res.send(programs);
    })
    .catch(next);
});

app.post('/api/programs', (req, res, next) => {
  const body = req.body;

  let programId;

  client.query(`
    INSERT INTO programs (user_id, name, description)
    VALUES ($1, $2, $3)
    RETURNING *, user_id as "userId";
  `,
  [req.userId, body.name, body.description]
  )
    .then(result => result.rows[0])
    .then(program => {
      return Promise.all(body.exercises.map(exercise => {
        return client.query(`
          INSERT INTO programs_to_movements (program_id, movement_id, reps, weight_percentage)
          VALUES ($1, $2, $3, $4)
          RETURNING *, program_id as "programId";
        `,
        [programId, exercise.movement_id, exercise.reps, exercise.weight_percentage]);
      }))
        .then(exercises => {
          program.exercises = exercises;
          res.send(program);
        });

    })
    .catch(next);
});

// workouts
app.get('/api/me/workouts', (req, res, next) => {

  const workoutsPromise = client.query(`
    SELECT 
      id, 
      date
    FROM workouts w
    WHERE w.user_id = $1
    ORDER BY w.id;
  `,
  [req.userId]
  );

  const logsPromise = client.query(`
    SELECT 
      w.id,
      l.id as "logId",
      m.name as "movement",
      l.attempted,
      l.completed,
      l.weight
    FROM workouts w
    INNER JOIN logs l ON w.id = l.workout_id
    LEFT JOIN movements m ON l.movement_id = m.id
    WHERE w.user_id = $1
    ORDER BY l.id;

  `,
  [req.userId]);

  Promise.all([workoutsPromise, logsPromise])
    .then(promiseValues => {
      const workouts = promiseValues[0].rows;
      const logs = promiseValues[1].rows;

      // single pass through logs without 
      // repetitive looping of accumlator
      workouts.forEach(workout => {
        const byMovement = logs
          // only the logs for this workout
          .filter(log => log.id === workout.id)
          // use a dictionary to sort logs by key (with array value of logs)
          .reduce((acc, log) => {
            // add the array for this movement if it doesn't exist yet
            if(!acc[log.movement]) {
              acc[log.movement] = [];
            }

            // push in the log to this dictionary key (movement)
            acc[log.movement].push({
              logId: log.logId,
              attempted: log.attempted,
              completed: log.completed,
              weight: log.weight
            });

            return acc;
          }, {});

        // Change the object to an array of objects
        workout.exercises = Object.keys(byMovement)
          .map(key => {
            return {
              movement: key,
              sets: byMovement[key]
            };
          });
      });

      res.send(workouts);
    })
    .catch(next);
});

app.post('/api/me/workouts', (req, res, next) => {
  console.log('adding workout');
  const body = req.body;

  client.query(`
    INSERT INTO workouts (user_id)
    VALUES ($1)
    RETURNING *;  
  `,
  [req.userId])
    .then(results => {
      const workout = results.rows[0];

      return client.query(`
        INSERT INTO
          logs (workout_id, movement_id, attempted)
        SELECT
          $1,
          pm.movement_id,
          pm.reps
        FROM
          programs_to_movements pm
        WHERE
          program_id = $2
        RETURNING *;
      `,
      [workout.id, body.id]
      )
        .then(() => {
          res.send(workout);
        });
    })
    .catch(next);
});

app.delete('/api/me/workouts', (req, res, next) => {
  console.log('deleting workouts');
  const body = req.body;

  Promise.all([
    client.query(`
      DELETE FROM logs WHERE workout_id = $1;
    `, [body.id]), 
    client.query(`
      DELETE FROM workouts WHERE id=$1;
    `, [body.id])
  ])
    .then(() => {
      res.send({ removed: true });
    })
    .catch(next);
});

// How does this differ from GET /api/me/workouts?
// (Other then the fact that these are not sorted into movements)
// logs
app.get('/api/me/logs', (req, res, next) => {

  const workoutsPromise = client.query(`
    SELECT 
      id, 
      date
    FROM workouts w
    WHERE w.user_id = $1;
  `,
  [req.userId]);

  const logsPromise = client.query(`
    SELECT 
      w.id,
      m.name as "movement",
      l.attempted,
      l.completed,
      l.weight
    FROM workouts w
    INNER JOIN logs l ON w.id = l.workout_id
    LEFT JOIN movements m ON l.movement_id = m.id
    WHERE w.user_id = $1;
  `,
  [req.userId]);

  Promise.all([workoutsPromise, logsPromise])
    .then(promiseValues => {
      const workouts = promiseValues[0].rows;
      const logs = promiseValues[1].rows;

      workouts.forEach(workout => {
        workout.exercises = logs.filter(l => l.id === workout.id);
      });

      res.send(workouts);
    })
    .catch(next);
});

app.post('/api/me/logs', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO logs (workout_id, movement_id, attempted, completed, weight)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.workout_id, body.movement_id, body.attempted, body.completed, body.weight]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  })
    .catch(next);
});

// PUT path should include id of resource being "put"
app.put('/api/me/logs/:id', (req, res, next) => {
  const body = req.body;

  client.query(`
    UPDATE logs
    SET
      attempted = $2,
      completed = $3,
      weight = $4
    WHERE id = $1
    RETURNING *;
  `,
  [req.params.id, body.attempted, body.completed, body.weight]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(next);
  
});

// Ditto DELETE
app.delete('/api/me/logs/:id', (req, res, next) => {
  const body = req.body;

  client.query(`
    DELETE FROM logs WHERE id=$1;
  `,
  [body.id]
  ).then(() => {
    res.send({ removed: true });
  })
    .catch(next);
});

// maxes
app.get('/api/maxes', (req, res, next) => {
  client.query(`
    SELECT id, user_id, movement_id, weight
    FROM maxes
    WHERE user_id=$1
    ORDER BY weight;
  `,
  [req.userId]
  )
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.post('/api/maxes', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO maxes (user_id, movement_id, weight)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  [req.userId, body.movement_id, body.weight]
  )
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

// app.use((req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// start "listening" (run) the app (server)
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('app running on', PORT));