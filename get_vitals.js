const https = require('https');

const url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://prsgroup.in&strategy=mobile';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.error) {
        console.error("API Error:", parsed.error);
        return;
      }
      const metrics = parsed.lighthouseResult.audits;
      console.log('--- MOBILE PERFORMANCE METRICS ---');
      console.log('Performance Score:', parsed.lighthouseResult.categories.performance.score * 100);
      console.log('First Contentful Paint (FCP):', metrics['first-contentful-paint'].displayValue);
      console.log('Largest Contentful Paint (LCP):', metrics['largest-contentful-paint'].displayValue);
      console.log('Cumulative Layout Shift (CLS):', metrics['cumulative-layout-shift'].displayValue);
      console.log('Time to Interactive (TTI):', metrics['interactive'].displayValue);
      console.log('Total Blocking Time (TBT):', metrics['total-blocking-time'].displayValue);
      console.log('Speed Index:', metrics['speed-index'].displayValue);
    } catch (e) {
      console.error('Error parsing response:', e);
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
