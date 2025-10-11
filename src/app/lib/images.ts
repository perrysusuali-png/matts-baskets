const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const BUCKET = 'matts-baskets-images';

export function getImageUrl(imageName: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${imageName}`;
}