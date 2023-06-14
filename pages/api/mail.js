const formData = require('form-data')
const Mailgun = require('mailgun.js')

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';
export default async function handler(req, res) {

    const { name, email, message,phoneNumber } = req.body;
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({username: 'api', key: API_KEY });

    const messageData = {
      from: 'EasyAd Website <john@mg.yourdomain.com>',
      to: 'dinakanwamu@gmail.com',
      subject: 'Enquiry or Consultation',
      text: `Name: ${name}
      Phone Number: ${phoneNumber} 
      Email: ${email} 
      Message: ${message} `
    };

     try {
        const emailResponse = await client.messages.create(DOMAIN, messageData)
    console.log(emailResponse); }
     catch(err) {
    console.error(err);
       res.status(500).send({message: 'Error in Sending Message'})
     };
    
    
     res.send({message: 'Message sent Sucessfully we would get back to you within 24 hrs'})
    



 
}
