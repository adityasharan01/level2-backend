# Backend for Color Theme Preference

This repository contains the backend code for the color theme preference project. It is built using Node.js, Express, GraphQL, and MongoDB.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- User authentication using email and password
- Save and retrieve user color preferences
- GraphQL API for managing user data

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