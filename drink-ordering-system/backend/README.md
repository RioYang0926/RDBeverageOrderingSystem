# Drink Ordering System

This project is a Drink Ordering System built using React for the frontend and Spring Boot for the backend. It connects to an existing database and implements features such as permission management, menu management, and ordering functionality.

## Project Structure

The project is organized as follows:

```
drink-ordering-system
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── drinkorder
│   │   │   │               ├── DrinkOrderApplication.java
│   │   │   │               ├── config
│   │   │   │               ├── controller
│   │   │   │               ├── model
│   │   │   │               ├── repository
│   │   │   │               └── service
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── schema.sql
│   ├── pom.xml
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   ├── Menu
│   │   │   └── Order
│   │   ├── pages
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Features

- **Permission Management**: Secure access to the application based on user roles.
- **Menu Management**: Admins can manage the drink menu, including adding, updating, and deleting items.
- **Ordering Functionality**: Users can place orders for drinks from the menu.

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- Node.js and npm

### Backend Setup

1. Navigate to the `backend` directory.
2. Run `mvn clean install` to build the project.
3. Configure the database connection in `src/main/resources/application.properties`.
4. Run the application using `mvn spring-boot:run`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm start`.

## License

This project is licensed under the MIT License.