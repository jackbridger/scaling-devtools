import dotenv from 'dotenv';
import supabaseClient from '../supabase-client';
dotenv.config();

async function getEvents() {
    const { data, error } = await supabaseClient
            .from('events') 
            .select('*')
            .order('datetime', { ascending: true })
    if (error) {
        console.log(error);
        return []
    }
    return data
}

export default getEvents