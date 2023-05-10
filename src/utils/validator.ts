import validator from 'validator';

export const isValidEmail = (email: string): boolean => {
    const resp = validator.isEmail(email);
    return !!resp;
  };

export const isEmail = (email: string): string | undefined => {
    return isValidEmail(email) ? undefined : 'Not a valid email';
  };

export const isValidName = (name: string): boolean => {
    const resp = validator.isAlpha(name, 'es-ES', { ignore: ' ' });
    return !!resp;
  };

export const isName = (name: string): string | undefined => {
    return isValidName(name) ? undefined : 'Not a valid name';
  };
