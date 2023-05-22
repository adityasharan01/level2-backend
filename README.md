# Backend for Color Theme Preference

This repository contains the backend code for the color theme preference project. It is built using Node.js, Express, and MongoDB.

## Folder Structure
backend
├── models
│   └── user.js
├── routes
│   └── user.js
├── server.js
└── package.json

## Features

- User authentication using email and password
- Save and retrieve user color preferences

## Installation

1. Clone this repository:

```
git clone https://github.com/yourusername/color-theme-preference-backend.git
```

2. Change to the project directory:

```
cd color-theme-preference-backend
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables:

Create a `.env` file in the root directory with the following content:

```
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Usage

Start the development server:

```
npm start
```

The GraphQL API will be available at `http://localhost:4000/graphql`.

## Testing

To run tests (if implemented):

```
npm test
```

## Contributing

If you'd like to contribute to this project, please follow the standard GitHub workflow:

1. the repository
2. Create a feature branch
3. Commit your changes
4. Create a pull request

Replace `your_database_name` with the actual name of your MongoDB database, and `your_jwt_secret_key` with a secure secret key for signing JSON Web Tokens (JWT) used in user authentication.

Make sure to add the `.env` file to your `.gitignore` to prevent it from being tracked by Git and accidentally exposing your sensitive information.