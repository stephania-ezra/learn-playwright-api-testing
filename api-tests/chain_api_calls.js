
import { request } from 'playwright';

(async () => {
  const context = await request.newContext();
  const userRes = await context.get('https://jsonplaceholder.typicode.com/users/1');
  const user = await userRes.json();

  const postRes = await context.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'Post by ' + user.username, body: 'Hello!', userId: user.id }
  });

  console.log('Created post for:', user.username);
  console.log(await postRes.json());
})();
