
import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/comments', {
        params: { postId: 1 }
    });
    console.log('Comments count:', (await response.json()).length);
})();