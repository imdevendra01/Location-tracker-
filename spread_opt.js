// let arr=[1,2,34,5,6,7,8]
// let num = [4,7,8,9,0,...arr]
// console.log(num.concat,'hehheheh')
// let obj={
//     id:2,
//     lastName:'heloo'
// }
// let std={
//     id:1,
//     name:'eheheh',
//     ...obj
// }
// console.log(num,'hehehehe');

// function sum(a,b,...num){
//     console.log(num,'hbjjg');

// }
// sum(55,5,5,5,5,56,8)

// let str="hello , herre";
// console.log(str.slice(0,5));

function getLocation() {
    const locationDiv = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    const locationDiv = document.getElementById('location');
    locationDiv.innerHTML = `
        <p>Latitude: ${lat}</p>
        <p>Longitude: ${lon}</p>
        <p>Accuracy: ${accuracy} meters</p>
        <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">View on Google Maps</a>
    `;
}

function showError(error) {
    let message = "";
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            message = "An unknown error occurred.";
            break;
    }
    document.getElementById('location').innerHTML = message;
}
