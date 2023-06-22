import { ValidationRules } from '@/utils/interfaces';

export const ContactFormValidationRules: ValidationRules = {
  full_name: {
    required: { value: true, message: 'Your name is required' },
  },
  email: {
    required: { value: true, message: 'Your email is required' },
  },
  message: {
    required: { value: true, message: 'Your message is required' },
  },
};
