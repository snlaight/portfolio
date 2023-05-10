/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import emailjs from '@emailjs/browser';

import { EmailSend } from '@/utils/interfaces';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

export const sendEmail = async ({ full_name, email, message }: EmailSend) => {
  await emailjs.send(serviceId, templateId, { full_name, email, message }, publicKey);
};
