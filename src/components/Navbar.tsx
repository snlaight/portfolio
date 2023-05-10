'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AlertWrapper from '@/components/Alert/AlertWrapper';
import { useAlert } from '@/utils/hooks/useAlert';

const Navbar = () => {
  const [linkHover, setLinkHover] = useState('');
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const { alerts } = useAlert();
  console.log(alerts);

  const onClickLink = (e: any) => {
    setLinkHover(e.target.textContent);
  };

  const onClickHamburguer = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const onClickLinkMobile = (e: any) => {
    setLinkHover(e.target.textContent);
    setShowMenuMobile(false);
  };

  return (
    <nav className='flex fixed top-0 z-50 flex-row items-center px-16 py-8 w-full backdrop-blur-lg bg-slate-400/5'>
      <AlertWrapper alerts={alerts || []} />
      <Link
        href='#presentation'
        className='absolute left-4 w-16 h-16 cursor-none sm:cursor-pointer md:left-auto md:h-20 md:w-20'
      >
        <Image src='/sl-logo.png' alt='logo' width={80} height={80} className='pt-2' />
      </Link>

      {/* Desktop */}
      <div className='hidden gap-4 md:flex md:flex-row md:m-auto'>
        <Link
          className={`nav-link ${linkHover === 'About me' && 'nav-link-active'}`}
          onClick={onClickLink}
          href='#about'
        >
          About me
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Skills' && 'nav-link-active'}`}
          onClick={onClickLink}
          href='#skills'
        >
          Skills
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Projects' && 'nav-link-active'}`}
          onClick={onClickLink}
          href='#projects'
        >
          Projects
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Contact' && 'nav-link-active'}`}
          onClick={onClickLink}
          href='#contact'
        >
          Contact
        </Link>
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
        <Link
          className={`nav-link-mobile ${linkHover === 'About me' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href='#about'
        >
          About me
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Skills' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href='#skills'
        >
          Skills
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Projects' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href='#projects'
        >
          Projects
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Contact' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href='#contact'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
