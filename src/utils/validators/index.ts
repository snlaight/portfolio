import { ValidationRules } from '@/utils/interfaces';
import { isEmail, isFullName, isValidMessage } from '@/utils/validators/form-validator.services';

export const ContactFormValidationRules: ValidationRules = {
  full_name: {
    validate: isFullName,
    required: 'Your name is required',
  },
  email: {
    validate: isEmail,
    required: 'Your email is required',
  },
  message: {
    validate: isValidMessage,
    required: 'Your message is required',
  },
};
