# Product Inventory Management API

This is a RESTful API for managing a product inventory system using Node.js, Express.js, MongoDB, and JWT authentication. It provides CRUD operations, pagination, sorting, filtering, and authentication for secure access.

## Features
- Create, Read, Update, and Delete (CRUD) products
- Pagination support for fetching products
- Sorting products by fields (e.g., price)
- Filtering by category
- JWT-based authentication for secure access
- Protected routes to ensure only authenticated users can modify products
- Error handling for invalid requests

## Technologies Used
- **Node.js** – Backend runtime
- **Express.js** – Web framework for handling routes
- **MongoDB & Mongoose** – NoSQL database for storing product data
- **JWT (JSON Web Token)** – Secure authentication
- **dotenv** – Manage environment variables
- **body-parser** – Parse incoming request bodies
- **CORS** – Enable cross-origin requests
- **Nodemon** – Auto-restart for development

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/product-inventory-api.git
   cd product-inventory-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```sh
   npm start
   ```

   For development with automatic restart:
   ```sh
   npm run dev
   ```

## API Endpoints

### Authentication
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login` | Authenticate user and receive token |

### Product Management (Protected)
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/products/?sort=price` | Get all products sorted by price |
| GET | `/api/products/?sort=-price` | Get all products sorted by price in descending order |
| GET | `/api/products/?category=<category>` | Get all products filtered by category |
| GET | `/api/products/?category=<category>&sort=price` | Get all products in the <category> category sorted by price |
| GET | `/api/products/?category=<category>&sort=-price` | Get all products in the <category> category sorted by price in descending order |

| GET | `/api/products/:id` | Get a specific product by ID |
| POST | `/api/products` | Add a new product (requires authentication) |
| PUT | `/api/products/:id` | Update a product (requires authentication) |
| DELETE | `/api/products/:id` | Delete a product (requires authentication) |

## Usage Examples

### 1. Register a User
```sh
curl -X POST "http://localhost:8080/api/auth/register" \
     -H "Content-Type: application/json" \
     -d '{"username": "user1", "password": "password123"}'
```

### 2. Login to Get JWT Token
```sh
curl -X POST "http://localhost:8080/api/auth/login" \
     -H "Content-Type: application/json" \
     -d '{"username": "user1", "password": "password123"}'
```
Response:
```json
{
   "token": "your_jwt_token"
}
```

### 3. Fetch Products with Authentication
```sh
curl -X GET "http://localhost:8080/api/products" \
     -H "Authorization: Bearer your_jwt_token"
```

### 4. Create a New Product (Authenticated)
```sh
curl -X POST "http://localhost:8080/api/products" \
     -H "Authorization: Bearer your_jwt_token" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Wireless Headphones",
           "price": 49.99,
           "category": "<category>",
           "stock": 25,
           "description": "Bluetooth over-ear headphones with noise cancellation"
        }'
```

### 5. Fetch Products with Pagination, Sorting, and Filtering
```sh
curl -X GET "http://localhost:8080/api/products?page=1&limit=5&sort=-price&category=<category>" \
     -H "Authorization: Bearer your_jwt_token"
```

## Deployment
To deploy on **Render, Vercel, or Railway**, follow these steps:
1. Push your project to GitHub
2. Link your repository to the chosen hosting platform
3. Add the required environment variables (`MONGO_URI`, `JWT_SECRET`)
4. Deploy and get the live API URL

## License
This project is open-source and available under the MIT License.

---
### Author
Developed by **Farhana Alam**

For any queries, feel free to reach out!
