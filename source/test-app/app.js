const jwt = require('jsonwebtoken');

// Credentials provided from https://developer.doordash.com/portal/integration/drive/credentials
// TODO: Replace placeholders with credential values
const accessKey = {
  "developer_id": "UPDATE_WITH_DEVELOPER_ID", // TODO: Update value with Developer ID
  "key_id": "UPDATE_WITH_KEY_ID", // TODO: Update value with Key ID
  "signing_secret": "UPDATE_WITH_SIGNING_SECRET" // TODO: Update value with Signing Secret
};

// Set JWT Payload data
const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 1800),
  iat: Math.floor(Date.now() / 1000),
};

// Set JWT header, including DoorDash header used to identify DoorDash JWT version
const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } };

// Create signature, decoding signing secret when passing the parameter 
const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
);

// Write the DoorDash API JWT
console.log("DoorDash API JWT: \n" + token + "\n");

const crypto = require('crypto');

// Generate Unique ID for Delivery
const deliveryId = crypto.randomUUID(); // TODO: Replace with generated system ID

const axios = require('axios');

// Create data needed to create a new delivery  
const body = JSON.stringify({
  external_delivery_id: deliveryId,
  pickup_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  pickup_business_name: 'Wells Fargo SF Downtown',
  pickup_phone_number: '+16505555555',
  pickup_instructions: 'Enter gate code 1234 on the callbox.',
  dropoff_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  dropoff_business_name: 'Wells Fargo SF Downtown',
  dropoff_phone_number: '+16505555555',
  dropoff_instructions: 'Enter gate code 1234 on the callbox.',
  order_value: 1999,
});

console.log("\n Create New Delivery Response: \n");

// Make API call, write response data with successful result, otherwise write error
axios
  .post('https://openapi.doordash.com/drive/v2/deliveries', body, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error)
  });