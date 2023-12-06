const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Configure your Gmail account
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'richiebgitcall94@gmail.com',
    pass: '********Use Your Own Email And Password*********',
  },
});

// Define the email options
const mailOptions = {
  from: 'richiebgitcall94@gmail.com',
  to: 'qwabs94@gmail.com',
  subject: 'Scheduled Email',
  text: 'This is an automated email sent using Node.js and Gmail.',
};

// Schedule the email to be sent every day at 9 AM
cron.schedule('*/1 * * * *', () => {
  sendEmail();
})

// { timezone: 'Western Sahara Standard Time' }); // Set your timezone (e.g., 'America/New_York')

// Function to send the email
function sendEmail() {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
