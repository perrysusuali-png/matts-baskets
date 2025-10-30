import { NextResponse } from 'next/server';
import { supabaseServer } from '@/app/lib/supabase';

export async function GET() {
  const { data, error } = await supabaseServer.from('products').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, price, description, image } = body;
  const { data, error } = await supabaseServer
    .from('products')
    .insert([{ name, price, description, image }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
