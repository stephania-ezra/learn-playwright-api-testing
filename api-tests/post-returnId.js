
import { request } from 'playwright'

(async () => {
    const context = await request.newContext();
    const response = await api.post('https://jsonplaceholder.typicode.com/posts', {
        data: { title: 'My Post', body: 'Hello world', userId: 1 }
    });
    console.log('Created ID:', (await response.json()).id);
})();
