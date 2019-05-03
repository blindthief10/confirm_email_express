const nodemailer = require('nodemailer');
const url = 'https://www.google.de';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  }
})

const createOptions = (emailToSend, randomStamp) => {

  return {
    from: process.env.EMAIL_ACCOUNT,
    to: emailToSend,
    subject: 'Confirm email account',
    html: '<a href="http://localhost:4000/email/confirm/' + randomStamp + '"> Confirm your account</a>'
  }

}

module.exports = {transporter, createOptions};
