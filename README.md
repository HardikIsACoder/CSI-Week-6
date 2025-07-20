# 📡 Subscribers REST API

This is a simple RESTful API built using Node.js, Express, and MongoDB. It allows you to perform CRUD operations on a "Subscribers" collection.

## 🔧 Getting Started

Follow the steps below to set up the project and test the API:

### 1. 📦 Install Dependencies

```bash
npm install
```

### 2. 🧭 Install MongoDB Compass

- Download and install MongoDB Compass: https://www.mongodb.com/try/download/compass
- Open Compass and create a new database and collection (e.g., `subscribers` in a database called `mydatabase`)
- Copy the connection string (starts with `mongodb://localhost...`)

### 3. 🔐 Set Up `.env` File

- In the root directory, create a `.env` file
- Paste your MongoDB connection string like this:

```
DATABASE_URL=your_connection_string_here
```

- Make sure to remove or overwrite any existing connection strings.

### 4. 📫 Install Postman

- Download Postman from: https://www.postman.com/downloads/
- Use it to test the API endpoints described below.

### 5. 🚀 Run the Server

```bash
npm run devStart
```

The server will start at: `http://localhost:3000`

---

## 🧪 API Endpoints

### 📥 GET All Subscribers

- **Method**: GET
- **URL**: `http://localhost:3000/subscribers/`
- **Description**: Retrieves a list of all subscribers from the database.

---

### ➕ POST a New Subscriber

- **Method**: POST
- **URL**: `http://localhost:3000/subscribers/`
- **Body (raw JSON)**:

```json
{
  "name": "Hardik Agrawal",
  "subToChannel": "Celebal"
}
```

---

### ✏️ PATCH an Existing Subscriber

- **Method**: PATCH
- **URL**: `http://localhost:3000/subscribers/<id>`
- Replace `<id>` with the actual `_id` of the subscriber
- **Body (raw JSON)**:

```json
{
  "name": "Hardik Agrawal",
  "subToChannel": "Celebal Technologies"
}
```

---

### ❌ DELETE a Subscriber

- **Method**: DELETE
- **URL**: `http://localhost:3000/subscribers/<id>`
- Replace `<id>` with the actual `_id` of the subscriber
- **Description**: Deletes the specified subscriber from the database.

---

### 📤 GET Subscriber by ID

- **Method**: GET
- **URL**: `http://localhost:3000/subscribers/<id>`
- Replace `<id>` with the actual `_id` of the subscriber
- **Description**: Retrieves the details of a single subscriber.

---

## 📁 Sample `.env` File

```
MONGO_STRING=mongodb://localhost:27017
```

---

## 🙌 Made With ❤️ by Hardik Agrawal
