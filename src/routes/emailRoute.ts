import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { Document } from 'mongoose'; // Import the Document type from mongoose
import ApprenticeModel, { Apprentice } from './models/Apprentice'; // Import your Apprentice model

const router = express.Router();

// Create a nodemailer transporter with your email service settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});

// Route to send email to an apprentice
router.post('/send-email-to-apprentice', async (req: Request, res: Response) => {
  try {
    const { apprenticeId, subject, message } = req.body;

    // Find the apprentice by ID
    const apprentice: Document & Apprentice | null = await ApprenticeModel.findById(
      apprenticeId
    );

    if (!apprentice) {
      return res.status(404).json({ error: 'Apprentice not found' });
    }

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: apprentice.email,
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
