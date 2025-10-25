import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Status:', response.status());
    console.log('Body:', await response.json());
})();
