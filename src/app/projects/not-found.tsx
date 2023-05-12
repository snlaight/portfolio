'use client';

import Link from 'next/link';

import { DeveloperIcon } from '@/components';

const NotFound = () => (
  <div className='flex flex-col justify-center items-center my-24 h-screen'>
    <DeveloperIcon icon='/404.json' />
    <div className='px-9 py-14 text-white rounded shadow'>
      <h3 className='text-3xl font-bold'>
        Well, this is embarrassing.
      </h3>
      <p className='font-bold text-reg'>
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <p className='mt-6 text-sm font-light'>
        Error code: 404
      </p>
      <Link href='/'>
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
