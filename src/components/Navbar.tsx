'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AlertWrapper from '@/components/Alert/AlertWrapper';
import { useAlert } from '@/utils/hooks/useAlert';
import { NavRoutes } from '@/routes';

const Navbar = () => {
  const [linkHover, setLinkHover] = useState('');
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const { alerts } = useAlert();

  const onClickLink = (e: any) => {
    setLinkHover(e.target.textContent);
  };

  const onClickHamburguer = () => {
    setShowMenuMobile((prev) => !prev);
  };

  const onClickLinkMobile = (e: any) => {
    setLinkHover(e.target.textContent);
    setShowMenuMobile(false);
  };

  return (
    <nav className='flex fixed top-0 z-50 flex-row items-center px-16 py-8 w-full backdrop-blur-lg bg-slate-400/5'>
      <AlertWrapper alerts={alerts || []} />
      <Link
        href='#top'
        className='absolute left-4 w-16 h-16 cursor-none sm:cursor-pointer md:left-auto md:h-20 md:w-20'
      >
        <Image src='/sl-logo.png' alt='logo' width={80} height={80} className='pt-2' />
      </Link>

      {/* Desktop */}
      <div className='hidden gap-4 md:flex md:flex-row md:m-auto'>
        {NavRoutes.map((route) => (
          <Link
            className={`nav-link ${linkHover === route.name && 'nav-link-active'}`}
            onClick={onClickLink}
            href={route.path}
            key={route.name}
          >
            {route.name}
          </Link>
        ))}
      </div>

      {/* Hamburguer */}
      <div className='absolute right-4 cursor-none sm:cursor-pointer md:hidden' onClick={onClickHamburguer}>
        <Image src='/menu.svg' alt='github' width={35} height={35} />
      </div>

      {/* Mobile */}
      <div
        className={`w-[90%] gap-y-6 py-4 m-auto left-0 duration-300 right-0 absolute top-16 flex flex-col items-center justify-center bg-background_secondary rounded-3xl md:hidden md:pointer-events-none ${
          showMenuMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NavRoutes.map((route) => (
          <Link
            className={`nav-link ${linkHover === route.name && 'nav-link-active'}`}
            onClick={onClickLinkMobile}
            href={route.path}
            key={route.name}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
