'use client';

import Error from 'next/error';

import { languages } from 'utils';

export default function NotFound() {
  return (
    <html lang={languages[0]}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
