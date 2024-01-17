'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang='en'>
      <body>
        <h2>Something went wrong!</h2>
        <button type='button' onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
