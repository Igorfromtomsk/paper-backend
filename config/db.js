const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'qlImR#4ZawOWVrwd3R', 
  port: '5432',
});

module.exports = pool;