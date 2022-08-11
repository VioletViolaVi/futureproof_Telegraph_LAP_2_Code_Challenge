const pool = require('./pool');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/tableInsert.sql').toString();

pool.query(seeds, () => console.log('Dev database seeded'));