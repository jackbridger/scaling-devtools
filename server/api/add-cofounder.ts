
import dotenv from 'dotenv';
import { readBody } from 'h3'; 
import supabaseClient from '../supabase-client'
import sendEmail from '../send-email'
dotenv.config();

async function saveCofounderToDatabase(event: any) {
    try {
        const cofounderData = await readBody(event)
        const { error } = await supabaseClient
            .from('cofounders')
            .insert({ 
                name: cofounderData.name,
                headline: cofounderData.headline,
                github: cofounderData.github,
                twitter: cofounderData.twitter,
                contact: cofounderData.contact,
                location: cofounderData.location,
                otherlink: cofounderData.otherlink,
                email_private: cofounderData.email_private,
                is_published: false
            })
        if (error) {
            console.log(error);
            return false
        }
        await sendEmail(cofounderData.email_private, "Thank you for adding yourself to Scaling DevTools", "<p>Once we have reviewed it, it will appear on the site.</p>")
        return true
    } catch (error) {
        console.log(error);
        return false
    } 
}

export default saveCofounderToDatabase