
import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/posts/1');
    if (response.status() === 200) console.log('✅ OK');
    else console.error('❌ Failed:', response.status());
})();
