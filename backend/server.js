const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the send-email route
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'josephnweke247@gmail.com', // Replace with your Gmail email address
        pass: '@10Million$' // Replace with your Gmail password
      }
    });

    // Configure the email details
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'josephnweke9@gmail.com',
      subject: 'New email from the form',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a response back to the client
    res.send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});

// Start the server
const port = 3000; // You can change this to any desired port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
