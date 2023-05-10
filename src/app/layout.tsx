'use client';

import '@/styles/globals.css';
import { Navbar } from '@/components';
import RenderProviders from '@/providers';

export const metadata = {
  title: 'Santiago Laight | Frontend Developer',
  description: 'Santilaightio, Santiago Laight, Portfolio',
  author: 'Santiago Laight',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang='en'>
    <body>
      <RenderProviders>
        <header>
          <Navbar />
        </header>
        {children}
      </RenderProviders>
    </body>
  </html>
);

export default RootLayout;
