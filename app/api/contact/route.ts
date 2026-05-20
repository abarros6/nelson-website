import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteEmail } from '@/lib/resend';
import { getPhotosByIds } from '@/lib/gallery-data';

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
  refs?: string[];
  website?: string; // honeypot
}

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot — if populated, silently reject
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  const { name, email, message } = body;

  if (!name?.trim()) {
    return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 422 });
  }

  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, message: 'A valid email address is required.' }, { status: 422 });
  }

  if (!message?.trim()) {
    return NextResponse.json({ success: false, message: 'A project description is required.' }, { status: 422 });
  }

  const selectedPhotos = getPhotosByIds(body.refs ?? []);

  const result = await sendQuoteEmail({
    name: name.trim(),
    email: email.trim(),
    phone: body.phone?.trim() || undefined,
    message: message.trim(),
    selectedPhotos,
  });

  if (!result.success) {
    console.error('Resend error:', result.error);
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please try again or call us directly.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
