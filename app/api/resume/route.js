import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'resume', 'Deepanjali_Ishte_Resume.pdf');
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Deepanjali_Ishte_Resume.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Resume file not found' }, { status: 404 });
  }
}
