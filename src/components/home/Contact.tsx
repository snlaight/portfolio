/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */

'use client';

import { useForm } from 'react-hook-form';

import { sendEmail } from '@/utils/email';
import { isEmail, isName } from '@/utils/validator';
import { DeveloperIcon } from '@/components';
import { useAlert } from '@/utils/hooks/useAlert';

interface DataForm {
  full_name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataForm>();

  const { handleAlert } = useAlert();

  const onSendEmail = async (data: DataForm) => {
    const { full_name, email, message } = data;

    await sendEmail({ full_name, email, message })
      .then(() => handleAlert?.({
        type: 'success',
        message: 'Email sent successfully',
      }))
      .catch(() => handleAlert?.({
        type: 'error',
        message: 'Error sending email',
      }));

    reset();
  };

  return (
    <section
      className='flex flex-col py-8 mt-36 items-center w-full gap-y-16 rounded-t-[5rem] md:rounded-t-[10rem]'
      id='contact'
    >
      <h2 className='text-6xl font-bold text-gradient-2'>Contact Me</h2>
      <div className='flex flex-col gap-y-20 justify-center items-center p-6 w-full lg:flex-row lg:gap-x-20'>
        <DeveloperIcon icon='/contact-me.json' />
        <form
          className='flex flex-col gap-y-10 items-center w-full transition-all duration-300 md:w-96'
          onSubmit={handleSubmit(onSendEmail)}
        >
          <div className='flex relative flex-col w-full'>
            <input
              id='full_name'
              className='input-text peer'
              type='text'
              placeholder=' '
              {...register('full_name', {
                required: 'Your name is required',
                minLength: { value: 6, message: 'Minimum 6 characters' },
                validate: isName,
              })}
            />
            <label htmlFor='full_name' className='label-input'>
              Full Name
            </label>
            {errors.full_name && <p className='absolute -bottom-6 text-red-500'>{errors.full_name.message}</p>}
          </div>
          <div className='flex relative flex-col w-full'>
            <input
              id='email'
              className='input-text peer'
              type='email'
              placeholder=' '
              {...register('email', {
                required: 'Your email is required',
                validate: isEmail,
              })}
            />
            <label htmlFor='email' className='label-input'>
              Email
            </label>
            {errors.email && <p className='absolute -bottom-6 text-red-500'>{errors.email.message}</p>}
          </div>
          <div className='flex relative flex-col w-full'>
            <textarea
              id='message'
              className='input-message peer'
              placeholder=' '
              {...register('message', {
                required: 'This message is required',
                minLength: { value: 6, message: 'Minimum 6 characters' },
                maxLength: { value: 250, message: 'Maximum 250 characters' },
              })}
            />
            <label htmlFor='message' className='label-input'>
              Message
            </label>
            {errors.message && <p className='absolute -bottom-6 text-red-500'>{errors.message.message}</p>}
          </div>
          <button type='submit' className='w-full button-custom'>Send mail</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
