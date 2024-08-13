import dotenv from 'dotenv';
import supabaseClient from '../supabase-client';
dotenv.config();

async function getCofounders() {
    const { data, error } = await supabaseClient
            .from('cofounders')
            .select('name, headline, github, twitter, contact, location, otherlink')
            .eq('is_published', true)
    if (error) {
        console.log(error);
        return []
    }
    return data
}

export default getCofounders