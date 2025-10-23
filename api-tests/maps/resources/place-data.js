import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ADD_JSON = {
    "location": {
        "lat": -38.383494,
        "lng": 33.427362
    },
    "accuracy": 50,
    "name": "Frontline house",
    "phone_number": "(+91) 983 893 3937",
    "address": "29, side layout, cohen 09",
    "types": [
        "shoe park",
        "shop"
    ],
    "website": "http://google.com",
    "language": "French-IN"
};

// default placeholders
export const UPDATE_JSON = {
    "place_id": "PLACE_ID_PLACEHOLDER",
    "address": "70 Summer walk, USA",
    "key": "qaclick123"
};

export const DELETE_JSON = {
    "place_id": "PLACE_ID_PLACEHOLDER"
};

// try to read sharedData.json placed by addPlace.js
try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const sharedPath = path.join(__dirname, 'sharedData.json');
    if (fs.existsSync(sharedPath)) {
        const raw = fs.readFileSync(sharedPath, 'utf8');
        const data = JSON.parse(raw);
        if (data && data.place_id) {
            UPDATE_JSON.place_id = data.place_id;
            DELETE_JSON.place_id = data.place_id;
        }
    }
} catch (e) {
    // ignore — keep placeholders
}

export default ADD_JSON;