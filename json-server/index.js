const fs = require('fs');
const jsonServer = require('json-server');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(cors());
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// server response delay, just for the lulz
server.use(async (req, res, next) => {
  await new Promise(response => {
    setTimeout(response, 1000);
  });

  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log('username:', username, ', password:', password);
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const userFromDB = users.find(user => user.username === username && user.password === password);

  if (userFromDB) return res.json(userFromDB);

  return res.status(403).json({ message: 'AUTH ERROR' });
});

// authentication check
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
