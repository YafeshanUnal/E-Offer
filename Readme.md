# E-Offer

## In this application, there is a backend service that stores the data of the logged in users and a frontend application that shows this data. People who log in can enter the products in the application, they cannot see the products without logging in and cannot bid, people who do not have any registration in the application can register from the signup section.

## Requirements

- Docker
- Docker Compose

## Installation

1. Clone the project: `git clone https://github.com/YafeshanUnal/E-Offer.git`
2. Open the terminal and navigate to the directory where the project is cloned: `cd internship-challenge`
3. Create Docker containers: `docker-compose build`
4. Start Docker containers: `docker-compose up`
5. The project is now running at `localhost:3000`.

## Usage

- The frontend application is accessible at `localhost:3000`.
- The backend service runs at `localhost:5000` and stores data using Redis.
