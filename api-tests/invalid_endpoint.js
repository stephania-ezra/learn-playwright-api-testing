
import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/unknown');
    console.log('Expected 404, got:', response.status());

    if (response.status() === 404)
        console.log('✅ Correctly received 404 Not Found');
    else console.error('❌ Failed:', response.status());
})();

