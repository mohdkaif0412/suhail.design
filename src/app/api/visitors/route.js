import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export async function POST() {
  try {
    const count = await redis.incr('portfolio:visitors');
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}

export async function GET() {
  try {
    const count = (await redis.get('portfolio:visitors')) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
