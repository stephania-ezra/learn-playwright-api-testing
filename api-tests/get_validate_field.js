// test2-validate-field.js

import { request } from 'playwright';

(async () => {
    const context = await request.newContext();
    const response = await api.get('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log('Has email field?', !!data.email);
})();
