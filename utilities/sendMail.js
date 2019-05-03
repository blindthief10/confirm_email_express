const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const transporterOptions = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    password: process.env.PASSWORD
  }
};

const mailOptions = {
  from: process.env.EMAIL_ACCOUNT,
  subject: 'Confirm your account',
  html: `a href=${process.env.TESTER}>Click here!</a>`;
}

const sendEmail = (transporterOptions, userEmail, activationCode) => {

}

module.exports = sendEmail;
