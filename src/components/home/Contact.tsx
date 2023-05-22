/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */

'use client';

import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';

import { ContactFormValidationRules } from '@/utils/validators';
import { sendEmail } from '@/utils/email';
import { DeveloperIcon, Input } from '@/components';
import { useAlert } from '@/utils/hooks/useAlert';
import { EmailSend } from '@/utils/interfaces';

const Contact = () => {
  const {
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm<EmailSend>();

  const { handleAlert } = useAlert();

  const onSendEmail: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const { full_name, email, message } = getValues();
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

  const FormFields = [
    {
      id: 'full_name',
      name: 'full_name',
      label: 'Full Name',
      type: 'text',
      register,
      options: ContactFormValidationRules.full_name,
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      register,
      options: ContactFormValidationRules.email,

    },
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      type: 'text',
      register,
      options: ContactFormValidationRules.message,
    },
  ];

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
          onSubmit={onSendEmail}
        >
          {FormFields.map((field) => (
            <Input
              key={field.id}
              id={field.id}
              name={field.name}
              label={field.label}
              type={field.type}
              register={field.register}
              options={field.options}
              error={errors[field.name as keyof EmailSend] || ''}
            />
          ))}
          <button type='submit' className='w-full button-custom'>Send mail</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
