import { FC, DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form';

type TInputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  options: RegisterOptions;
  option?: string;
  error: FieldError | string;
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
} & Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  'size'
>;

const Input: FC<TInputProps> = ({
  id,
  name,
  label,
  type = 'text',
  register,
  options,
  error,
  ...props
}) => {
  const isMessage = name === 'message';

  return (
    <div className='flex relative flex-col w-full'>
      {isMessage ? (
        <textarea
          id={id}
          className='input-text peer'
          placeholder=' '
          {...register(name, options)}
          {...props}
        />
      ) : (
        <input
          id={id}
          className='input-text peer'
          type={type}
          placeholder=' '
          {...register(name, options)}
          {...props}
        />
      )}
      <label htmlFor={id} className='label-input'>
        {label}
      </label>
      {error && typeof error === 'object' && 'message' in error && (
        <p className='absolute -bottom-6 text-red-500'>{error.message}</p>
      )}
      {error && typeof error === 'string' && (
        <p className='absolute -bottom-6 text-red-500'>{error}</p>
      )}
    </div>
  );
};

export default Input;
