const https = require('https');

https.get('https://www.quickhub.ai/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Basic regex to find fonts and inline styles or inline CSS blocks
    const tailwindColors = data.match(/bg-\[#[0-9a-fA-F]{3,6}\]|text-\[#[0-9a-fA-F]{3,6}\]/g);
    const fonts = data.match(/font-family:([^;]+);/g);
    const links = data.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g);
    
    console.log("Colors found inline:", Array.from(new Set(tailwindColors)));
    console.log("Fonts found inline:", Array.from(new Set(fonts)));
    
    // Also grab font-family from Google Fonts if imported
    const googleFonts = data.match(/family=([^&:]+)/g);
    console.log("Google Fonts:", googleFonts);
    
    // Just dump some of the head to see tailwind config or primary css variables
    const styleTags = data.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if(styleTags) {
       styleTags.forEach(t => {
          if (t.includes('--')) {
             console.log("CSS Variables found: ", t.substring(0, 500));
          }
       });
    }
  });
}).on('error', err => console.error(err));
