import validator from 'validator';

export const isValidEmail = (email: string): boolean => {
  const resp = validator.isEmail(email);
  return !!resp;
};

export const isValidFullName = (value: string): boolean => {
  const resp = validator.isLength(value, { min: 5, max: 50 });
  return !!resp;
};

export const checkIsValidMessage = (value: string): boolean => {
  const resp = validator.isLength(value, { min: 10, max: 500 });
  return !!resp;
};
