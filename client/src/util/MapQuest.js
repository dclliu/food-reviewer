const apiKey = 'u5mrF79LEqZx7JFwOyifoKT2a3ILGvRE'; //enter your own mapquest api key

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

const MapQuest = {
    reverse(pos) { //returns name of city given latitude & longitude
        
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        return fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${lat}%2C${long}&outFormat=json&thumbMaps=false`)
        .then(handleErrors)
        .then(jsonResponse => {
            const city = jsonResponse.results[0].locations[0].adminArea5;
            const state = jsonResponse.results[0].locations[0].adminArea3;
            const country = jsonResponse.results[0].locations[0].adminArea1;
            console.log(`${city}, ${state}, ${country}`);
            return `${city}, ${state}, ${country}`;
        })
        .catch(error => {
            console.log(error);
            return {};
        });
    }
}

export default MapQuest;
