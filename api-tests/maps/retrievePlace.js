
import { request } from 'playwright';
import { getPlaceId } from './mUtils.js';

(async () => {
    // Create a new API context
    const apiContext = await request.newContext();
    const placeId = await getPlaceId();

    // Send the POST request
    const response = await apiContext.get('https://rahulshettyacademy.com/maps/api/place/get/json', {
        params: {
            'key': 'qaclick123',
            'place_id': placeId
        }
    });

    // Print the response details
    console.log('✅ Status:', response.status());

    const responseBody = await response.json();
    console.log('📦 Response:', responseBody);

    // Close the API context
    await apiContext.dispose();
})();
