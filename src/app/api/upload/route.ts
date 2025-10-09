import { NextResponse } from 'next/server';
import { supabaseServer } from '@/app/lib/supabase';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${randomUUID()}-${file.name}`;
  const bucket = process.env.SUPABASE_BUCKET!;

  const { data, error } = await supabaseServer.storage
    .from(bucket)
    .upload(`images/${fileName}`, buffer, {
      contentType: file.type,
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data: publicUrl } = supabaseServer.storage
    .from(bucket)
    .getPublicUrl(`images/${fileName}`);

  return NextResponse.json({ url: publicUrl.publicUrl });
}
