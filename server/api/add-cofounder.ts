
import dotenv from 'dotenv';
import { defineEventHandler, readBody } from 'h3'; 
import pg from 'pg'
const { Client } = pg
dotenv.config();

async function saveCofounderToDatabase(event: any) {
    try {
        const cofounderData = await readBody(event)
        const client = new Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE,
        })
        await client.connect()
        const text = 'INSERT INTO cofounders(name, headline, github, twitter, contact, location, otherlink, email_private, is_published) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *'
        const values = [cofounderData.name, cofounderData.headline, cofounderData.github, cofounderData.twitter, cofounderData.contact, cofounderData.location, cofounderData.otherlink, cofounderData.email_private, false]
        const res = await client.query(text, values)
        await client.end()
        return true
    } catch (error) {
        console.log(error);
        return false
    } 
}

export default saveCofounderToDatabase