const fs = require('fs');
const jsonServer = require('json-server');
var cors = require('cors')
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(cors());
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// server response delay, just for the lulz
server.use(async (req, res, next) => {
  console.log(req.body);
  
  await new Promise(res => {
    setTimeout(res, 1000);
  });

  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const userFromDB = users.find(user => user.username === username && user.password === password);

  if (userFromDB) return res.json(userFromDB);

  return res.status(403).json({ message: 'AUTH ERROR' });
});

// authentication check
server.use((req, res, next) => {
  console.log(123)
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
