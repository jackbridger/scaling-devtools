
import dotenv from 'dotenv';
import pg from 'pg'
const { Client } = pg
dotenv.config();

async function getCofounders() {
   
    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
      })
    await client.connect()
    const text = 'SELECT name, headline, github, twitter, contact, location, otherlink FROM cofounders WHERE is_published = TRUE'
    const res = await client.query(text)
    console.log(res);
    console.log(res.rows);
    await client.end()
    return res.rows
}

export default getCofounders