# Nirmitee-PreInterviewTask-Project

# Post App with API

The Post App is a simple web application that allows users to create posts and comment on them. It provides basic CRUD (Create, Read, Update, Delete) operations for posts and comments through a RESTful API.

## Features

- Create a new post: Users can create a new post by providing a title and content.
- Comment on a post: Users can comment on a post by providing the comment content.
- Comment on a comment: Users can comment on an existing comment by providing the comment content.
- Edit and delete a post: Users can edit the title and content of their posts, as well as delete a post entirely.
- Edit and delete a comment: Users can edit the content of their comments, as well as delete a comment.

## Technologies Used

- Node.js: Backend JavaScript runtime environment.
- Express.js: Web application framework for building APIs.
- MongoDB: NoSQL database to store posts and comments.
- Mongoose: MongoDB object modeling for Node.js.
- Body-parser: Middleware to parse incoming request bodies.
- Cors: Middleware to enable Cross-Origin Resource Sharing.

## Getting Started

Follow the steps below to set up the project locally:

1. Clone the repository:


git clone https://github.com/aestheticscoder/Nirmitee-PreInterviewTask-Project.git
cd post-app


2. Install dependencies:

npm install


3. Set up the MongoDB database:

   - Make sure you have MongoDB installed and running on your machine.
   - Update the MongoDB connection URL in `app.js` and `index.js` to match your database configuration.

4. Start the server:


node index.js


The server will run on `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- **Create a new post:** `POST /posts`
- **Create a new comment for a post:** `POST /posts/:postId/comments`
- **Edit a post:** `PUT /posts/:postId`
- **Edit a comment:** `PUT /comments/:commentId`
- **Delete a post:** `DELETE /posts/:postId`
- **Delete a comment:** `DELETE /comments/:commentId`

Make sure to use proper authentication (JWT or similar) and error handling mechanisms in a production environment.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as per the terms of the license.


Please make sure to customize this README with accurate information about your project, such as repository links, installation instructions, and API documentation. Add additional sections or information as needed to suit your project's specific requirements.
