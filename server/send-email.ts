import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to: string, subject: string, html: string) => {
    try {
        const data = await resend.emails.send({
            from: 'Scaling DevTools <updates@scalingdevtools.com>',
            to: [to, 'jack@scalingdevtools.com'],
            subject: subject,
            html: html,
          });
          return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export default sendEmail