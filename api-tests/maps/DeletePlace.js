import { DELETE_JSON } from './resources/place-data.js';
import { getPlaceId } from './mUtils.js';
import { request } from 'playwright';

(async () => {
    // Create a new API context
    const apiContext = await request.newContext();

    // Prepare the delete payload
    const deletePayload = { ...DELETE_JSON };
    deletePayload.place_id = await getPlaceId();

    // Send the DELETE request (include API key and the prepared payload)
    const response = await apiContext.delete('https://rahulshettyacademy.com/maps/api/place/delete/json', {
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            key: 'qaclick123'
        },
        data: deletePayload
    });

    // Print the response details
    console.log('✅ Status:', response.status());
    const responseBody = await response.json();
    console.log('📦 Response:', responseBody);

    // Close the API context
    await apiContext.dispose();
})();
