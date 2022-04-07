db = db.getSiblingDB('common');
db.createUser(
  {
    user: 'root',
    pwd: 'root',
    roles: [{ role: 'readWrite', db: 'common' }],
  },
);