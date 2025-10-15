
import { request } from 'playwright';

(async () => {
    const context = await request.newContext({
        extraHTTPHeaders: { 'X-Demo-Header': 'PlaywrightRocks' }
    });
    const response = await context.get('https://httpbin.org/headers');
    console.log(await response.json());
})();
