# Backend

This is the backend component of the project, which serves as the server-side application handling HTTP requests and interacting with the database.

## Technologies Used

- Node.js
- Express.js
- MariaDB (MySQL)

## Getting Started

To get started with the backend development environment, follow these steps:

1. Install Node.js and npm on your machine if they are not already installed.

2. Clone this repository to your local machine.

3. Navigate to the `backend` directory:


4. Install the project dependencies:

- Express.js
- body-parser
- cors
- http
- mariadb 


5. Configure the MariaDB (MySQL) database connection in the `config.js` file. Update the `host`, `user`, `password`, and `database` fields with your database credentials.

6. Start the backend server:


This will start the backend server on the specified port (default is 3001).

7. The backend server is now ready to handle HTTP requests.

## API Endpoints
## Description

This project is an API that provides various endpoints for managing restaurant data. It allows users to perform operations such as adding new restaurants, retrieving restaurant information, and updating existing restaurant data.

## API Endpoints

The API exposes the following endpoints:

- `GET /restaurants`: Retrieves a list of all restaurants.
- `GET /restaurants/:id`: Retrieves a specific restaurant by ID.
- `POST /restaurants`: Adds a new restaurant to the database.
- `PUT /restaurants/:id`: Updates an existing restaurant by ID.
- `DELETE /restaurants/:id`: Deletes a restaurant by ID.

## Testing with Postman

To test the API endpoints, you can use a tool like Postman. Here's how to get started:

1. Download and install Postman from the official website (https://www.postman.com/downloads/).
2. Launch Postman and create a new request.
3. Set the request URL to the desired endpoint (e.g., `http://localhost:3000/restaurants`).
4. Choose the appropriate HTTP method (GET, POST, PUT, DELETE) for the desired operation.
5. Set any required request headers or parameters as specified in the API documentation.
6. Click the "Send" button to make the request and view the response.

Make sure to test the API endpoints using Postman to ensure proper functionality and verify the expected results.


The following API endpoints are available:

- GET /test: Returns a simple "howdy!" message as a test endpoint.

<!-- API endpoints and their descriptions here -->

## Contributing

If you would like to contribute to the backend development of this project, please follow these guidelines:

1. Fork the repository and create your own branch for the feature or bug fix you are working on.

2. Make your changes and test them thoroughly.

3. Commit your changes with descriptive commit messages.

4. Push your branch to your forked repository.

5. Submit a pull request to the main repository, describing your changes and any relevant information.

Please make sure your pull request adheres to the coding conventions, documentation standards, and testing requirements of the project.

## License

This project is licensed under the [MIT License](LICENSE).

