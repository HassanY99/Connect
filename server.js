const express = require('express');
const req = require('express/lib/request');
const connectDB = require('./config/db');
// import routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Init Middle
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/auth', auth);

// Serve frontend from server - vercel
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})