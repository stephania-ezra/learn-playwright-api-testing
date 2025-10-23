import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const getPlaceId = async () => {
    // try to read sharedData.json placed by addPlace.js
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const rawData = fs.readFileSync(path.join(__dirname, 'resources', 'sharedData.json'), 'utf-8');
        const data = JSON.parse(rawData);
        console.log('Read data:', data.id, data.place_id);
        return data.place_id;
    } catch (e) {
        // ignore — keep placeholders
        console.log('Could not read place_id from sharedData.json, using placeholder.', e);
        return 'PLACE_ID_PLACEHOLDER';
    }
};

// function to write data to sharedData.json
export const writeData = async (data) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const outPath = path.join(__dirname, 'resources', 'sharedData.json');
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
    // console.log('Wrote data to:', outPath);
    return `Wrote data to: ${outPath}`;
};