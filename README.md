```markdown
# 📚 Book Shop API (B4A2V1)

An Express-based Book Shop API built with TypeScript, integrating MongoDB through Mongoose for seamless database management. This project includes robust data validation using **Zod** and offers features like product management, order handling, and revenue calculation.

---

## 🌟 Features

- **Book Management:** Create, update, delete, and fetch books.
- **Order Management:** Place orders with automatic inventory updates.
- **Revenue Calculation:** Calculate total revenue using MongoDB aggregation.
- **Input Validation:** Zod is used for strong input validation to ensure data integrity.
- **Error Handling:** Comprehensive error responses for validation failures, resource not found, and other errors.

---

## 🔧 Tech Stack

- **TypeScript**: Ensures type safety and scalability.
- **Express.js**: Backend framework for routing and API development.
- **MongoDB**: NoSQL database for storing book and order data.
- **Mongoose**: ODM for defining and managing MongoDB schemas.
- **Zod**: Input validation for robust and predictable API behavior.

---

## 🚀 API Endpoints

### 📚 **Book Management**

#### 1. **Create a Book**
- **Endpoint**: `POST /api/products`
- **Request Body**:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10,
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 100,
    "inStock": true
  }
  ```
- **Response**:
  ```json
  {
    "message": "Book created successfully",
    "success": true,
    "data": { ...bookDetails }
  }
  ```

#### 2. **Get All Books**
- **Endpoint**: `GET /api/products`
- **Query**: Search books by `title`, `author`, or `category`.
- **Response**:
  ```json
  {
    "message": "Books retrieved successfully",
    "success": true,
    "data": [ ...booksList ]
  }
  ```

#### 3. **Get a Specific Book**
- **Endpoint**: `GET /api/products/:productId`
- **Response**:
  ```json
  {
    "message": "Book retrieved successfully",
    "success": true,
    "data": { ...bookDetails }
  }
  ```

#### 4. **Update a Book**
- **Endpoint**: `PUT /api/products/:productId`
- **Request Body**:
  ```json
  {
    "price": 15,
    "quantity": 25
  }
  ```
- **Response**:
  ```json
  {
    "message": "Book updated successfully",
    "success": true,
    "data": { ...updatedBookDetails }
  }
  ```

#### 5. **Delete a Book**
- **Endpoint**: `DELETE /api/products/:productId`
- **Response**:
  ```json
  {
    "message": "Book deleted successfully",
    "success": true
  }
  ```

---

### 🛒 **Order Management**

#### 6. **Order a Book**
- **Endpoint**: `POST /api/orders`
- **Request Body**:
  ```json
  {
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 30
  }
  ```
- **Response**:
  ```json
  {
    "message": "Order created successfully",
    "success": true,
    "data": { ...orderDetails }
  }
  ```

#### 7. **Calculate Revenue**
- **Endpoint**: `GET /api/orders/revenue`
- **Response**:
  ```json
  {
    "message": "Revenue calculated successfully",
    "success": true,
    "data": { "totalRevenue": 450 }
  }
  ```

---

## ⚠️ Error Responses

- **Validation Errors**:
  ```json
  {
    "message": "Validation failed",
    "success": false,
    "error": { ...errorDetails },
    "stack": "Error: ..."
  }
  ```

- **Resource Not Found**:
  ```json
  {
    "message": "Resource not found",
    "success": false
  }
  ```

---

## 🌐 Deployment

- **Live Link**: [Insert your deployed link here]
- **GitHub Repository**: [Insert your repository link here]

---

## 📜 Instructions to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Fahmudul/BookShopAPI.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BookShopAPI
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=<your_mongo_connection_string>
   PORT=5000
   ```
5. Start the server:
   ```bash
   npm run dev
   ```
6. Access the API at `http://localhost:5000`.

---

## 🎥 Video Explanation

- [Insert your video link here]

---

## ✍️ Author

- **Fahmudul Hassan Siam**  
  
  

---

## 📖 License

This project is licensed under the MIT License. See the LICENSE file for details.
```
