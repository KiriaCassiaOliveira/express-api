const { Client } = require("pg");

const client = new Client({
  host: "bd-my-contacts.ct6ewga82bwn.sa-east-1.rds.amazonaws.com",
  port: 5432,
  user: "postgres",
  password: "bdmycontacts",
  database: "bd_my_contacts",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
