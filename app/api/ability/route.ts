import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ability/?limit=${limit}&offset=${offset}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();

  return NextResponse.json(data);
}
