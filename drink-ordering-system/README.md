# Drink Ordering System

## Overview
The Drink Ordering System is a web application that allows users to order drinks from a menu. It is built using React for the frontend and Spring Boot for the backend, providing a seamless experience for users to manage their orders.

## Features
- **User Authentication**: Secure login and registration for users.
- **Menu Management**: Admins can manage the drink menu, including adding, updating, and removing items.
- **Order Management**: Users can place orders and view their order history.
- **Role-Based Access Control**: Different access levels for users and admins.

## Project Structure
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

## Getting Started

### Prerequisites
- Java 11 or higher
- Node.js and npm
- Maven

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd drink-ordering-system
   ```

2. **Backend Setup**
   - Navigate to the `backend` directory.
   - Run the following command to install dependencies:
     ```
     mvn install
     ```
   - Configure your database connection in `src/main/resources/application.properties`.
   - Run the Spring Boot application:
     ```
     mvn spring-boot:run
     ```

3. **Frontend Setup**
   - Navigate to the `frontend` directory.
   - Install the frontend dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

### Usage
- Access the application at `http://10.177.37.152:9457`.
- Use the authentication features to log in or register.
- Explore the menu and place orders.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.