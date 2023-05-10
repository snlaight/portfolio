'use client';

import { AlertProvider } from '@/context/AlertContext';

const RenderProviders = ({ children }: {children: React.ReactNode}) => (
  <AlertProvider>
    {children}
  </AlertProvider>
);

export default RenderProviders;
