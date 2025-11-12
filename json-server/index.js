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

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(`username:\x1b[32m ${username}\x1b[0m, password:\x1b[32m ${password}\x1b[0m`);
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const userFromDB = users.find(user => user.username === username && user.password === password);

  if (userFromDB) {
    const { password, ...userWithoutPassword } = userFromDB;
    return res.json(userWithoutPassword);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

// authentication check
server.use((req, res, next) => {
  const openRoutes = ['/articles', '/profile', '/comments'];

  const isOpenRoute = openRoutes.some(route => req.path.startsWith(route));
  const isReadMethod = req.method === 'GET';

  if (isOpenRoute && isReadMethod) {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.get('/users', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const safeUsers = users.map(({ password, ...user }) => user);
  res.json(safeUsers);
});

server.get('/users/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  // возвращаем без пароля
  const { password, ...safeUser } = user;
  res.json(safeUser);
});

// server.get('/profile', (req, res) => {
//   const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
//   const { profile } = db;

//   if (profile) return res.json(profile);

//   return res.status(404).json({ message: 'NOT FOUND' });
// });

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
