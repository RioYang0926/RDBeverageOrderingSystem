# Drink Ordering System

This project is a drink ordering system built with React for the frontend and Spring Boot for the backend. It connects to an existing database and implements features such as permission management, menu management, and ordering functionality.

## Project Structure

- **backend**: Contains the Spring Boot application.
  - **src/main/java/com/example/drinkorder**: Java source files for the application.
    - **DrinkOrderApplication.java**: The entry point of the Spring Boot application.
    - **config**: Configuration classes for security and database settings.
    - **controller**: Classes that handle HTTP requests and responses.
    - **model**: Entity classes defining the structure of the database.
    - **repository**: Interfaces for database access using Spring Data JPA.
    - **service**: Classes implementing business logic.
  - **src/main/resources**: Resources for the application.
    - **application.properties**: Configuration file for database connection and other settings.
    - **schema.sql**: SQL commands for creating database tables.
  - **pom.xml**: Maven configuration file listing project dependencies and plugins.
  - **README.md**: Documentation and usage guide for the backend.

- **frontend**: Contains the React application.
  - **src/components**: React components for various functionalities.
    - **Auth**: Components related to authentication (login and registration).
    - **Menu**: Components for menu management (displaying and managing the menu).
    - **Order**: Components for ordering (order forms and order history).
  - **src/pages**: Page components for the application.
  - **src/App.tsx**: Main component responsible for routing and global state management.
  - **src/index.tsx**: Entry point of the React application that renders the root component.
  - **public/index.html**: HTML template for the application.
  - **package.json**: npm configuration file listing project dependencies and scripts.
  - **tsconfig.json**: TypeScript configuration file specifying compilation options and included files.
  - **README.md**: Documentation and usage guide for the frontend.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and build the project:
   ```
   cd backend
   mvn clean install
   ```

3. Configure the database connection in `src/main/resources/application.properties`.

4. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Start the React application:
   ```
   npm start
   ```

## Features

- **Permission Management**: Secure access to different parts of the application based on user roles.
- **Menu Management**: Admins can manage the drink menu, including adding, updating, and removing items.
- **Ordering Functionality**: Users can place orders and view their order history.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.