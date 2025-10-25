import { UPDATE_JSON } from './resources/place-data.js';
import { getPlaceId } from './mUtils.js';
import { request } from 'playwright';

(async () => {
    // Create a new API context
    const apiContext = await request.newContext();

    // Prepare the update payload
    // const updatePayload = { ...UPDATE_JSON };
    // updatePayload.place_id = await getPlaceId();
    UPDATE_JSON.place_id = await getPlaceId();

    // Send the PUT request
    const response = await apiContext.put('https://rahulshettyacademy.com/maps/api/place/update/json', {
        headers: {
            'Content-Type': 'application/json',
        },
        // data: updatePayload
        data: UPDATE_JSON
    });

    // Print the response details
    console.log('✅ Status:', response.status());
    const responseBody = await response.json();
    console.log('📦 Response:', responseBody);

    // Close the API context
    await apiContext.dispose();
})();
