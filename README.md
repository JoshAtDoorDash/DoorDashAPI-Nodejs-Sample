# DoorDash API Node.js Sample

This sample is an example of how to create a JWT using Node.js when calling the DoorDash API. Additionally, it creates a delivery request using the JWT.

It builds a token that is valid for 30 minutes. Please obtain a set of DoorDash Credentials (Developer ID, Key ID, and Signing Secret) in the [DoorDash Developer Portal](https://developer.doordash.com/portal/integration/drive/credentials) to use in the application.

This application targets Node.js version [18.14.0](https://nodejs.org/en/download/). The code source and build files provided in this repository are samples and not intended for production, and are not supported.

## Running Sample

Follow these steps to run the sample app:

1. Clone repository locally.
2. Open a terminal and change directories to the ``test-app`` folder.
3. Install jsonwebtoken (if not already installed) by running ``npm install jsonwebtoken`` in the test-app folder.
4. Install axios (if not already installed) by running ``npm install axios`` in the test-app folder.
5. Install crypto (if not already installed) by running ``npm install crypto`` in the test-app folder.
6. Run ``node app.js`` at the prompt.
7. Open your browser and enter the hostname and port provided in the app.js, such as ``http://127.0.0.1:3000/`` if you had used 127.0.0.1 for your host and 3000 for your port.

## More About DoorDash Credentials

- [DoorDash JWT Format](https://developer.doordash.com/en-US/docs/drive/reference/JWTs/)
- [Manage DoorDash Credentials](https://developer.doordash.com/en-US/docs/drive/how_to/manage_credentials/)
- [Create DoorDash JSON Web Tokens (JWTs)](https://developer.doordash.com/en-US/docs/drive/how_to/JWTs)

## Related Utilities and Samples

- [auth0 JWT Debugger](https://jwt.io/)
- [DoorDash API JWT JSFiddle Sample](https://bit.ly/doordashapi)
- [make-doordash-jwt CLI](https://github.com/infin8x/make-doordash-jwt)
- [DoorDash API get started with Postman](https://developer.doordash.com/en-US/docs/drive/tutorials/get_started_postman/)
- [DoorDash SDK Example Application](https://github.com/doordash-oss/doordash_sdk_example_application)

## Community

Please join the [DoorDash Developer Discord community](https://discord.com/channels/951208871828013066/951208872478113875) to provide feedback and ask questions about developing with the DoorDash API.
