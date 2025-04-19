# Kanban Board Application  
**Live Demo:** 

This is a secure Kanban task management application with user authentication powered by JSON Web Tokens (JWT). Users can log in, manage tasks in a Kanban-style interface, and maintain authenticated sessions for streamlined productivity. Unauthorized access is blocked, and sessions expire automatically after inactivity to ensure security.
<img width="1435" alt="Screenshot 2025-04-18 at 5 52 26 PM" src="https://github.com/user-attachments/assets/5faa3db1-da13-4af6-baea-717be4d554a2" />

---

## License  
This project is licensed under the MIT License.

---

## Table of Contents  
- [Features](#features)  
- [Installation](#installation)  
- [Technologies Used](#technologies-used)  
- [License](#license)  

---

## Features  

### Login Page:  
- Username and password form inputs  
- Authenticates using JSON Web Tokens (JWT)  
- Invalid login attempts trigger helpful error messages  
- JWT is stored in localStorage upon successful login  

### Kanban Board Page:  
- Task board accessible only after authentication  
- JWT is required for all API requests  
- Unauthorized access redirects users to the login screen  
- Inactivity results in session expiration and auto-logout  

### Logout Handling:  
- Clears the JWT from localStorage  
- Redirects the user to the login screen  
- Protects the app from unauthorized access  

---

## Installation  

**Clone the repository:**  
```bash
git clone https://github.com/your-username/kanban-jwt-auth.git
```

**Navigate into the project directory:**  
```bash
cd kanban-jwt-auth
```

**Install dependencies:**  
```bash
npm install
```

**Set environment variables:**  
Create a `.env` file in the root directory with the following:  
```
JWT_SECRET=yourSecretKey
```

**Start the app:**  
```bash
npm start
```

---

## Technologies Used  

- React (Frontend Framework)  
- Node.js (Runtime Environment)  
- Express (Backend Framework)  
- JSON Web Tokens (Authentication)  
- LocalStorage (Session Persistence)  
- Render (Deployment Platform)  

---

## License  
This project is licensed under the MIT License.
