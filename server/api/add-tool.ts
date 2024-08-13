import dotenv from 'dotenv';
import { readBody } from 'h3'; 
import supabaseClient from '../supabase-client';
import sendEmail from '../send-email';

dotenv.config();

async function saveToolToDatabase(event: any) {
    try {
        const toolData = await readBody(event);
        const { error } = await supabaseClient
            .from('tools') 
            .insert({ 
                name: toolData.name,
                industry: toolData.industry,
                stage: toolData.stage,
                description: toolData.description,
                strategies: toolData.strategies,
                links: toolData.links, // Directly use the array
                type: toolData.type,
                founded: toolData.founded,
                funding: toolData.funding,
                location: toolData.location,
                contact_email: toolData.contact_email,
                is_published: false 
            });

        if (error) {
            console.log(error);
            return false;
        }

        await sendEmail(toolData.contact_email, "Thank you for adding your tool", "<p>Your tool has been submitted for review.</p>");

        return true;
    } catch (error) {
        console.log(error);
        return false;
    } 
}

export default saveToolToDatabase;