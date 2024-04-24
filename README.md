# Project Overview

This project demonstrates the use of Docker in development environments, showcasing a full-stack application with a React frontend and a Ruby on Rails (RoR) backend. Each part of the application is containerized, allowing for consistent development environments.

## Structure

The project is organized into two main directories:

- `backend/`: Contains the Ruby on Rails API project.
- `frontend/`: Contains the React application.

Both directories include a Dockerfile for building Docker images of the respective parts of the application.

## Prerequisites

Before you begin, make sure you have Docker and Docker Compose installed on your machine. These tools are necessary to build and run the containers defined by the Dockerfiles and the `docker-compose.yml` file.

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

To get started with the project, follow these steps:

### Cloning the Repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/YINWEIHSU/docker-exercise.git
cd docker-exercise
```

### Building the Images
You can build the Docker images for both the frontend and backend separately using: 
```bash
docker build -f backend/Dockerfile-dev -t backend-image .
docker build -f frontend/Dockerfile-dev -t frontend-image .
```
### Using Docker Compose
For easier management and to run both projects simultaneously, use Docker Compose. This tool simplifies the process of running multi-container Docker applications. The provided docker-compose.yml file in the root of the repository is configured to build and run both the frontend and backend services using their respective Dockerfiles.

Here's how you can use Docker Compose to build and start the containers:

Starting the Services
To start the services, navigate to the root directory where docker-compose.yml is located and run:
```bash
docker-compose up --build -d
```
This command does the following:

- Builds the images for both frontend and backend if they haven't been built or if there are changes in the Dockerfiles.
- Starts the containers as defined in the docker-compose.yml file.
- Attaches the containers to two named volumes, ensuring that data persists across container restarts.

### Accessing the Applications
By default, the frontend and backend services are exposed on different ports as specified in the docker-compose.yml:

- Frontend: Access the React application at http://localhost:3002.
- Backend: The Rails API can be accessed at http://localhost:3001.