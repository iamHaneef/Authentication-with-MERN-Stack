// immport all important dependencies:
const express = require('express');
const cors = require('cors');
const collections = require('./mongo');

const app = express();

app.use(express.json());
app.use(cors());

// GET METHOD
app.get('/', (req, res) => {
  res.send('READ ALL DATAS');
});

// POST METHOD -- REGISTER
app.post('/register', async (req, res) => {
  const { email, password } = req.body; // from frontend
  const newUser = { email, password };

  try {
    const check = await collections.findOne({ email: email });
    if (check) {
      res.json('Exists');
    } else {
      await collections.insertMany([newUser]);
      res.json('Not Exists');
    }
  } catch (error) {
    res.status(500).json('not exists');
  }
});

// POST METHOD -- LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collections.findOne({ email: email });

    if (check) {
      res.json('EXISTS');
    } else {
      res.json('NOT EXISTS');
    }
  } catch (err) {
    res.status(500).json('NOT EXISTS IN SERVER');
  }
});

// crud opration - get , post , put , delete:

// create a user

app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  try {
    const user = await collections.create([newUser]);
    res.json(user);
  } catch (err) {
    res.status(400).json("IT DIDN'T CREATE USER");
  }
});

// read the user

app.get('/users', async (req, res) => {
  try {
    const user = await collections.find();
    res.json(user);
  } catch (err) {
    res.status(400).json("IT DIDN'T READ USER");
  }
});

// read one user by id

app.get('/users/:id', async (req, res) => {
  try {
    const user = await collections.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).json("IT DIDN'T READ that ONE USER");
  }
});

// update the user by id :

app.get('/users/:id', async (req, res) => {
  try {
    const updated = await collections.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: 'true' },
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json("IT DIDN'T UPDATE that ONE USER");
  }
});

// DELETE the user by id :

app.get('/users/:id', async (req, res) => {
  try {
    const deleted = await collections.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(400).json("IT DIDN'T DELETE that ONE USER");
  }
});

// server start

app.listen(8000, () => {
  console.log('SERVER START');
});
