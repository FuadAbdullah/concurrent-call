const axios = require("axios");

// set the URL for the API endpoint
const url = "http://localhost:3000/helloWorld?name=Fuad";

// set the number of requests to send
const numRequests = 2500;

// send the requests
for (let i = 0; i < numRequests; i++) {
  axios
    .post(url)
    .then((response) => {
      console.log(`Request ${i + 1} succeeded:`, response.data);
    })
    .catch((error) => {
      console.error(`Request ${i + 1} failed:`, error.message);
    });
}
