# 🧠 Focal API — Backend Session Tracker

<div align="center">

**A RESTful backend API for tracking focus and break sessions, built with Node.js, Express, and TypeScript.**

> **Project 2 — Backend API Development**  
> DecodeLabs Full Stack Internship (Batch 2026)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3B82F6?style=for-the-badge)

</div>

---

# 📖 Overview

Focal API is the backend service for the **Focal Focus Timer** application. It provides a clean REST API to create, retrieve, update, and delete focus sessions while ensuring every request is validated before reaching the business logic.

The project follows a layered architecture with centralized error handling, request logging, and type-safe development using TypeScript.

---

# ✨ Features

- 🚀 Full CRUD operations for focus sessions
- 🛡️ Request validation using **Zod**
- 📦 Layered architecture (Routes → Controllers → Services → Repository)
- ⚠️ Centralized error handling
- 📝 Request logging middleware
- ❤️ Health check endpoint
- 🔧 Environment-based configuration
- 💯 Type-safe code with TypeScript

---

# 🛠️ Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Language | TypeScript |
| Validation | Zod |
| Storage | In-Memory Repository |
| Tooling | ts-node-dev, ESLint, Prettier |

---

# 📂 Project Structure

```text
focal-api/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   └── index.ts
├── screenshots/
├── .env.example
├── tsconfig.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000
NODE_ENV=development
```

---

# 🚀 Getting Started

```bash
git clone <your-repository-url>
cd focal-api

npm install

cp .env.example .env

npm run dev
```

Server runs at:

```text
http://localhost:5000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/sessions` | Get all sessions |
| GET | `/api/sessions/:id` | Get a session |
| POST | `/api/sessions` | Create a session |
| PUT | `/api/sessions/:id` | Update a session |
| DELETE | `/api/sessions/:id` | Delete a session |

---

# 📝 Example Request

```bash
curl -X POST http://localhost:5000/api/sessions \
-H "Content-Type: application/json" \
-d '{"mode":"focus","durationMinutes":25}'
```

---

# 📸 Screenshots

### ✅ Create Session

Successful `POST /api/sessions` request returning **201 Created**.

<p align="center">
  <img src="./screenshots/create-session-success.png" alt="Create Session Success" width="900">
</p>

---

### ❌ Validation Error

Invalid request returning **400 Bad Request** with validation details.

<p align="center">
  <img src="./screenshots/validation-error.png" alt="Validation Error" width="900">
</p>

---

# 🔮 Future Improvements

- 🗄️ Integrate MongoDB or PostgreSQL
- 🔐 Add JWT Authentication
- 📄 Pagination & Filtering
- 🧪 Unit and Integration Tests

---

# 👩‍💻 Author

**Tanya Vaish**

Full Stack Development Intern  
DecodeLabs (Batch 2026)

---

<div align="center">

⭐ If you like this project, consider giving it a star!

</div>