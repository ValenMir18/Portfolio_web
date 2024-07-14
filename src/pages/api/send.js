import { NextApiRequest, NextApiResponse } from 'next';
import { Html } from 'next/document';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, message } = req.body;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                port: 465,  // Usar el puerto correcto para Gmail
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,  // Intentar enviar en nombre del usuario
                to: process.env.EMAIL_USER,
                subject: `Mensaje de ${name}`,
                text: message,
                replyTo: email,  // Para que las respuestas vayan al correo del usuario
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                        <h2 style="color: #333;">Nuevo mensaje desde el Portfolio</h2>
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Correo electrónico:</strong> ${email}</p>
                        <p><strong>Mensaje:</strong></p>
                        <p>${message}</p>
                    </div>
                ` 
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email enviado exitosamente, Valentina.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Algo salió mal' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}