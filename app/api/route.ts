import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); 
  }

  const { name, gender, ageGrade, joinType, contact, schoolOrWork, details, goals } = req.body;

  const transporter = nodemailer.createTransport({
    // email server configuration
  });

  // Email content
  const emailContent = `
    Name: ${name}
    Gender: ${gender}
    Age/Grade: ${ageGrade}
    Join Type: ${joinType}
    Contact: ${contact}
    School/Work: ${schoolOrWork}
    Details: ${details}
    Goals: ${goals}
  `;

  // Send email
  try {
    await transporter.sendMail({
      from: 'your-email@example.com',
      to: 'your-email@example.com',
      subject: 'New KOL Application',
      text: emailContent,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
