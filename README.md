# Product Inventory Management API

This is a CRUD-based RESTful API built with **Node.js, Express.js, and MongoDB** for managing product inventory. The API allows users to **Create, Read, Update, and Delete** products.

---

## Features
- Add new products
- Get all products
- Get a single product by ID
- Update a product by ID
- Delete a product by ID
- Middleware for error handling
- CORS support for cross-origin requests

---

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **body-parser** - Parses incoming request bodies
- **cors** - Enables Cross-Origin Resource Sharing
- **nodemon** - Automatic server restarts during development

---

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/product-inventory-api.git
cd product-inventory-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:

```
PORT=8080
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/product-inventory?retryWrites=true&w=majority
```
Replace `yourUsername` and `yourPassword` with your actual MongoDB credentials.

### 4. Run the Server
Start the server using **nodemon**:
```sh
npx nodemon server.js
```
If nodemon is not installed, use:
```sh
node server.js
```

The server will run at **http://localhost:8080**.

---

## API Endpoints

### 1. Create a Product
**POST** `/api/products`
#### Request Body (JSON):
```json
{
  "name": "Wireless Headphones",
  "price": 49.99,
  "category": "Electronics",
  "stock": 25,
  "description": "Bluetooth over-ear headphones with noise cancellation"
}
```
#### Response:
```json
{
  "_id": "60c72b2f4f1a2c001f5e2b9c",
  "name": "Wireless Headphones",
  "price": 49.99,
  "category": "Electronics",
  "stock": 25,
  "description": "Bluetooth over-ear headphones with noise cancellation",
  "createdAt": "2025-03-03T12:34:56.789Z"
}
```

### 2. Get All Products
**GET** `/api/products`
#### Response:
```json
[
  {
    "_id": "60c72b2f4f1a2c001f5e2b9c",
    "name": "Wireless Headphones",
    "price": 49.99,
    "category": "Electronics",
    "stock": 25,
    "description": "Bluetooth over-ear headphones with noise cancellation"
  }
]
```

### 3. Get a Product by ID
**GET** `/api/products/:id`
#### Response:
```json
{
  "_id": "60c72b2f4f1a2c001f5e2b9c",
  "name": "Wireless Headphones",
  "price": 49.99,
  "category": "Electronics",
  "stock": 25,
  "description": "Bluetooth over-ear headphones with noise cancellation"
}
```

### 4. Update a Product
**PUT** `/api/products/:id`
#### Request Body (JSON):
```json
{
  "price": 39.99,
  "stock": 30
}
```
#### Response:
```json
{
  "message": "Product updated successfully"
}
```

### 5. Delete a Product
**DELETE** `/api/products/:id`
#### Response:
```json
{
  "message": "Product deleted successfully"
}
```

---

## Error Handling
If an invalid product ID is provided, the API returns:
```json
{
  "error": "Product not found"
}
```

---

## Testing the API
You can test the API using **Postman**:
1. Open Postman.
2. Select the request type (GET, POST, PUT, DELETE).
3. Enter the endpoint URL (`http://localhost:8080/api/products`).
4. Send the request and check the response.

---

## Deployment
To deploy the API to **Render, Vercel, or Railway**, follow these steps:
1. Push the code to a **GitHub repository**.
2. Sign up for **Render/Vercel/Railway**.
3. Create a **new project** and link your GitHub repository.
4. Set the **environment variables** (MONGO_URI, PORT).
5. Deploy the application.

---

## Future Enhancements
✅ Pagination for GET `/api/products`
✅ Sorting and filtering (e.g., filter by category, sort by price)
✅ Secure API with JWT authentication
✅ Deploy API to a cloud hosting service

---



---

## Author
**Farhana Alam** 🎯

