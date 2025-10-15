// test5-delete.js
import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await context.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Delete status:', response.status());
})();
