# MERN Website

This project is a website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a simple home page, about page, services page, and an admin panel.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/1.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/2.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/3.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/4.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/5.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/6.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-project/blob/master/Screenshots/7.png)

## Features

- **User Panel**: Open to all users, providing a user-friendly interface with essential functionalities.
  - Home page
  - About page
  - Services page
- **Admin Panel**: Restricted access, exclusively designed for administrators to manage and control the website efficiently.
- **CRUD Operations**: Fully implemented CRUD (Create, Read, Update, Delete) operations on both the frontend and backend.
  - Create, read, update, and delete functionality for managing data within the application.

## Technologies Used

- **MongoDB**: NoSQL database for storing data
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/mern-project
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install
    
    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    # In the client directory
    VITE_APP_URI_API = your_backend_base_uri
    
    MONGO_URI=your_mongodb_uri
    JWT_SECRET_KEY=your_jwt_secret
    PORT=_write_port_number_here
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    cd server
    npm run dev

    # In the client directory
    cd client
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the MERN Website.
