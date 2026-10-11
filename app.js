const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync(':memory:');

db.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
`);

const insert = db.prepare(
  'INSERT INTO users (name) VALUES (?)'
);

insert.run('Wildan');
insert.run('Belajar Docker');
insert.run('Node.js');

const users = db.prepare(
  'SELECT id, name FROM users ORDER BY id'
).all();

console.log('================================');
console.log('Docker Node.js Demo');
console.log('================================');
console.log('Node.js version:', process.version);
console.log('Database: SQLite in-memory');
console.log('Data users:');

console.table(users);

console.log('Status: Aplikasi berhasil dijalankan!');

db.close();
