
import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await api.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: { title: 'Updated Title', body: 'Updated content' }
    });
    console.log(await response.json());
})();
