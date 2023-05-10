'use client';

import { Navbar } from '@/components';
import { AlertProvider } from '@/context/AlertContext';

const RenderProviders = ({ children }: {children: React.ReactNode}) => (
  <AlertProvider>
    <header>
      <Navbar />
    </header>
    {children}
  </AlertProvider>
);

export default RenderProviders;
