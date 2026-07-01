import emailjs from 'emailjs-com';
import { portfolioConfig } from '@/config/portfolioConfig';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  const { serviceId, templateId, publicKey } = portfolioConfig.emailjs;

  if (!serviceId || !templateId || publicKey === "PUBLIC_KEY_PLACEHOLDER") {
    console.warn("EmailJS credentials not fully configured. Simulating success for development.");
    return new Promise((resolve) => setTimeout(() => resolve(true), 1500));
  }

  try {
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      subject: data.subject,
      message: data.message,
      to_name: portfolioConfig.personal.name,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
