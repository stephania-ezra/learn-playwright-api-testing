// test9-404.js
import { request } from 'playwright';

(async () => {
  const context = await request.newContext();
  const response = await api.get('https://jsonplaceholder.typicode.com/unknown');
  console.log('Expected 404, got:', response.status());
})();
// Expected output: "Expected 404, got: 404"