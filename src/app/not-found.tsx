'use client';

import Error from 'next/error';

import { locales } from '@/navigation';

export default function NotFound() {
  return (
    <html lang={locales[0]}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
