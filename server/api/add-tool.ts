import dotenv from 'dotenv';
import { readBody, eventHandler, H3Event } from 'h3';
import supabaseClient from '../supabase-client';
import sendEmail from '../send-email';

dotenv.config();

export default eventHandler(async (event: H3Event) => {
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
				links: toolData.links,
				type: toolData.type,
				founded: toolData.founded,
				funding: toolData.funding,
				location: toolData.location,
				contact_email: toolData.contact_email,
				is_published: false,
			});

		if (error) {
			console.error('Supabase Insert Error:', error);
			return { success: false, message: 'Failed to save tool.' };
		}

		const emailResult = await sendEmail(
			toolData.contact_email,
			'Thank you for adding your tool',
			'<p>Your tool has been submitted for review.</p>'
		);

		if (!emailResult) {
			console.error('Email Sending Failed');
			return { success: false, message: 'Tool saved, but failed to send email.' };
		}

		return { success: true };
	} catch (error) {
		console.error('API Handler Error:', error);
		return { success: false, message: 'An unexpected error occurred.' };
	}
});