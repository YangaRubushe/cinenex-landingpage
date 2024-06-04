import { PropsWithChildren } from 'react';
import { Libre_Franklin } from 'next/font/google';
import { Chivo } from 'next/font/google';
import './globals.css';

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
});

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${libre_franklin.variable} ${chivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
