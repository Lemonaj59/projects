const { Pool, Client } = require('pg');

const client = new Client({
  user: 'lemonaj58',
  host: 'localhost',
  database: 'todo',
  password: '$Sn293609$',
  port: 5432,
});

async function logQuery(queryText) {
await client.connect();

let data = await client.query(queryText);
console.log(data.rows[data.rows.length - 1].count);
client.end()
}


logQuery("SELECT count(id) FROM films WHERE duration < 110 GROUP BY genre")