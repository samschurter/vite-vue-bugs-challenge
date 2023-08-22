# User Data API
There is a local server running on `localhost:3000` that will serve user specific data.

This API provides access to a list of users stored in a JSON file. It includes the following endpoints:

- `/getAuthToken`: Returns an authentication token that can be used to access the other endpoints.
- `/listUsers`: Returns an array of user IDs.
- `/getUser?userID=<id>`: Returns the user object with the specified ID.

## Usage
To use the API, follow these steps:

- Call the `/getAuthToken` endpoint to get an authentication token.
- Include the authentication token in the Authorization header of subsequent requests, like this: Authorization: Bearer <token>.
- Call the `/listUsers` endpoint to get an array of user IDs.
- Call the `/getUser?userID=<id>` endpoint to get the user object with the specified ID.

