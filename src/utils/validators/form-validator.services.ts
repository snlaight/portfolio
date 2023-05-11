import { isValidEmail, isValidFullName, checkIsValidMessage } from '@/utils/validators/validator.services';

export const isEmail = (email:string) : string => (isValidEmail(email) ? '' : 'Not a valid email');
export const isFullName = (value:string) : string => (isValidFullName(value) ? '' : 'Please enter at least 5 characters');
export const isValidMessage = (value:string) : string => (checkIsValidMessage(value) ? '' : 'Must be between 10 and 500 characters');
