# Musician Management System

A web application for managing musicians and their managers, built with Node.js, Express.js, and MongoDB. This project allows users to perform CRUD operations on musicians and managers, and provides functionality to link musicians to their respective managers.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [API Routes](#api-routes)
7. [Models](#models)
8. [Controllers](#controllers)
9. [Database](#database)

## Overview

The Musician Management System is designed to simplify the management of musicians and their associated details, including genre, location, booking prices, and their respective managers. It allows for efficient tracking, updating, and deletion of musician records, as well as querying musicians based on their managers.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete musicians and managers.
- **Manager-Musician Relationship**: Link musicians to their managers, enabling queries to retrieve all musicians managed by a specific manager.
- **RESTful API**: Provides endpoints to interact with the system programmatically.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js, used for routing and middleware.
- **MongoDB**: NoSQL database for storing musician and manager data.
- **Mongoose**: MongoDB object modeling tool for Node.js, used for schema validation and data manipulation.
- **Other Libraries**: CORS for handling Cross-Origin Resource Sharing, dotenv for managing environment variables.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   CONNECTION_STRING=mongodb+srv://your-db-connection-string
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. **Access the application:**

   The server will start running on `http://localhost:5001`. You can now use API clients like Postman or curl to interact with the endpoints.

## Usage

Once the server is running, you can use the following API endpoints:

- Create a musician: `POST /api/musician`
- Get all musicians: `GET /api/musician`
- Get a musician by ID: `GET /api/musician/:id`
- Update a musician: `PUT /api/musician/:id`
- Delete a musician: `DELETE /api/musician/:id`
- Get all musicians managed by a specific manager: `GET /api/musician/manager/:managerId`

## API Routes

- **GET /api/musician**: Retrieves all musicians.
- **POST /api/musician**: Creates a new musician.
- **GET /api/musician/:id**: Retrieves a musician by ID.
- **PUT /api/musician/:id**: Updates a musician by ID.
- **DELETE /api/musician/:id**: Deletes a musician by ID.
- **GET /api/musician/manager/:managerId**: Retrieves all musicians managed by a specific manager.

## Models

### Musician Model

- **Attributes**: artistName, location, genre, bookingPrice, manager (referenced by ObjectId)
- **Relationships**: Belongs to a Manager (referenced by ObjectId)

### Manager Model

- **Attributes**: name, email, phone, artists (array of ObjectId references to musicians)
- **Relationships**: Manages many Musicians

## Controllers

The controllers define the logic for handling requests and interacting with the models:

- `musicianController`: Manages CRUD operations for musicians.
- `managerController`: Manages CRUD operations for managers.

## Database

The application uses MongoDB to store musician and manager data. Mongoose is used for schema validation and managing relationships between models.
