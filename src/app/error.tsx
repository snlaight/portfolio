'use client';

import { DeveloperIcon } from '@/components';

const ErrorPage = ({ error, reset } : {error: Error, reset :() => void}) => (
  <div className='flex flex-col justify-center items-center my-24 h-screen'>
    <DeveloperIcon icon='/error.json' />
    <div className='px-9 py-14 text-white rounded shadow'>
      <h3 className='text-3xl font-bold'>
        Well, this is embarrassing.
      </h3>
      <p className='font-bold text-reg'>
        {error.message}
      </p>
      <p className='mt-6 text-sm font-light'>
        Error code: 400
      </p>
      <button type='button' onClick={() => reset()}>
        Try again
      </button>
    </div>
  </div>
);

export default ErrorPage;
