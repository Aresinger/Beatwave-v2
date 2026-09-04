export async function fetchDeezerApi (valueInput){

const URL = 'http://localhost:3000';
const endpointTrack = '/api/deezer/track';

try {
    const response = await fetch(`${URL}${endpointTrack}?q=${encodeURIComponent(valueInput)}`);
    if(!response.ok){
        throw new Error (`Response status: ${response.status}`)
    }
    const result = await response.json();
    console.log(result);
    return result;
} catch (error) {
    console.error(error.message)
}
}