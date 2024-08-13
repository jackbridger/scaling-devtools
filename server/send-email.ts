import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to: string, subject: string, html: string) => {
    try {
        console.log(to, subject, html);
        console.log("sending email");
        const data = await resend.emails.send({
            from: 'Scaling DevTools <noreply@updates.scalingdevtools.com>',
            to: [to, 'jack@scalingdevtools.com'],
            subject: subject,
            html: html,
          });
          console.log(data);
          return data
    } catch (error) {
        console.log(error);
        return false
    }
}

export default sendEmail