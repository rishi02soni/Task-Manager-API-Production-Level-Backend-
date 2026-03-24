# 🚀 Task Manager Backend API

A **production-ready backend REST API** built using **Node.js, Express, and MongoDB**.
This project provides secure authentication and full CRUD functionality for managing tasks.

## 🎬 Tech Stack in Action

### 🟢 Node.js
![Node.js](https://media.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif)

### ⚡ Express.js
![Express.js](https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif)

### 🍃 MongoDB
![MongoDB](https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif)
---

## 📌 Features

* 🔐 JWT Authentication (Login/Register)
* 👤 User Management
* ✅ Task CRUD Operations
* 🧠 MVC Architecture
* 🔒 Password Hashing using bcrypt
* 🌐 RESTful API Design
* ⚡ Scalable Folder Structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcrypt.js

---

## 📁 Project Structure

```
task-manager-backend/
│── config/
│   └── db.js
│
│── models/
│   ├── User.js
│   └── Task.js
│
│── controllers/
│   ├── userController.js
│   └── taskController.js
│
│── routes/
│   ├── userRoutes.js
│   └── taskRoutes.js
│
│── middleware/
│   └── authMiddleware.js
│
│── server.js
│── package.json
│── .env
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-backend.git
cd task-manager-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### 🔐 Authentication

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | /api/users/register | Register new user |
| POST   | /api/users/login    | Login user        |

---

### 📌 Tasks

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---

## 🔑 Authentication Usage

Add token in headers:

```
Authorization: <your_token>
```

---

## 🧪 Example Request (Postman)

### Register User

```json
POST /api/users/register

{
  "name": "Rishi",
  "email": "rishi@example.com",
  "password": "123456"
}
```

---

### Login User

```json
POST /api/users/login

{
  "email": "rishi@example.com",
  "password": "123456"
}
```

---

### Create Task

```json
POST /api/tasks

Headers:
Authorization: <token>

Body:
{
  "title": "Complete Backend Project"
}
```

---

## 🚀 Future Enhancements

* 🔍 Search & Filter Tasks
* 📅 Due Dates & Reminders
* 📊 Dashboard Analytics
* 🌍 Deployment (AWS / Render)
* 🐳 Docker Support

---

## 💡 Learning Outcomes

* Backend Architecture (MVC)
* Authentication & Security
* REST API Design
* Database Modeling with MongoDB
* Middleware Implementation

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 👨‍💻 Author

**Rishi Soni**

---

🔥 *Build. Learn. Ship. Repeat.*
