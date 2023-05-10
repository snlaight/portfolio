import { FC } from 'react';

import { AlertProps } from '@/utils/types';

const AlertStyles = {
  success: 'bg-green-500 text=green-800',
  error: 'bg-red-500 text-red-800',
  warning: 'bg-yellow-500 text-yellow-800',
  info: 'bg-gray-500 text-gray-800',
};

const Alert:FC<AlertProps> = ({ type, message }) => (
  <div className={`px-3 py-2 mt-2 rounded shadow-md transition-all text-shadow ${AlertStyles[type as keyof typeof AlertStyles]}`}>
    {message}
  </div>
);

export default Alert;
