
import { request } from 'playwright';
import ADD_JSON from './resources/place-data.js';
import { writeData } from './mUtils.js';

(async () => {
    // Create a new API context
    const apiContext = await request.newContext();

    // Send the POST request
    const response = await apiContext.post('https://rahulshettyacademy.com/maps/api/place/add/json', {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer your_token_here', // uncomment if needed
        },
        params: {
            'key': 'qaclick123'
        },
        data: ADD_JSON
    });

    // Print the response details
    console.log('✅ Status:', response.status());
    const responseBody = await response.json();
    console.log('📦 Response:', responseBody);

    // Write sharedData.json inside the maps/resources folder
    const message = await writeData(responseBody);
    console.log(message);

    // Close the API context
    await apiContext.dispose();
})();
