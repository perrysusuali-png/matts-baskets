import { NextResponse } from 'next/server';
import { supabaseServer } from '@/app/lib/supabase';

export async function GET() {
  const { data, error } = await supabaseServer.from('orders').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, address, product_id, quantity } = body;
  const { data, error } = await supabaseServer
    .from('orders')
    .insert([{ name, email, address, product_id, quantity }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}