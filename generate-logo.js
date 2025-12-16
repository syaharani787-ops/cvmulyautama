import ZAI from 'z-ai-web-dev-sdk';

async function generateLogo() {
  try {
    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: 'Professional logo for CV MULYA UTAMA construction company, civil engineering and road construction, minimalist design with orange and gray colors, modern construction industry logo, clean typography',
      size: '512x512'
    });

    const imageBase64 = response.data[0].base64;
    
    // Save the image
    const fs = require('fs');
    const path = require('path');
    
    const imagePath = path.join(process.cwd(), 'public', 'logo.png');
    const buffer = Buffer.from(imageBase64, 'base64');
    fs.writeFileSync(imagePath, buffer);
    
    console.log('Logo saved to:', imagePath);
    return imagePath;

  } catch (error) {
    console.error('Logo generation failed:', error.message);
  }
}

generateLogo();