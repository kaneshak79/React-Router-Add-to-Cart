🛒 Add to Cart Application (React + Router)

📌 Project Overview

This project is a ReactJS Add to Cart application built using React Router and Context API.
It fetches product data from the Fake Store API, displays products on a dedicated products page, and allows users to add/remove items from a cart with quantity management and price calculations.

The application demonstrates state management, routing, and clean component-based architecture.

🚀 Features

✅ Product Page

Fetches products from Fake Store API

Displays:

Product Image

Title

Description

Price

“Add to Cart” button

If product already exists in cart → shows Remove from Cart

✅ Cart Page

Displays all added cart items

Each cart item includes:

Product title

Price

Quantity

Increase / Decrease quantity buttons,Remove from Cart button and Item-wise total price (price × quantity)

Cart summary:

Dispalys:Total Price,10% Discount and Final Price after discount.Prices update dynamically based on quantity

✅ Navigation & Routing

React Router used for navigation

Routes:

/ → Products page

/cart → Cart page

Navbar with cart count indicator

🧑‍💻 Tech Stack Used

ReactJS

React Router DOM

Context API (Global Cart State)

Tailwind CSS

JavaScript (ES6+)

Axios

Fake Store API

🔄 Application Flow

Products Page:

Products fetched using Axios from Fake Store API.Each product rendered using ProductCard.Add or remove items using Context state,Cart Context and Stores cart items globally

Handles:

Add to cart,Remove from cart,Increase / decrease quantity 

Cart Page:

Reads cart data from Context

Calculates:

Total price,Discount (10%) and Final payable amount

Navbar

Displays cart item count and Enables navigation between pages

🌐 API Used

Fake Store API

https://fakestoreapi.com/products

▶️ How to Run the Project

1️⃣ Clone the Repository
git clone <repository-url>
cd add-to-cart-app

2️⃣ Install Dependencies

npm install

3️⃣ Start Development Server

npm run dev

4️⃣ Open in Browser

http://localhost:5173

📌 Key Concepts Implemented

React Hooks (useState, useEffect, useContext)

Context API for global state management

React Router for page navigation

Conditional rendering

Dynamic price calculations

Clean and reusable components

🎯 Future Enhancements (Optional)

Persist cart data using Local Storage

Add loading and error states

Product search and filtering

Checkout page

User authentication

Author

Kanesha K
👨‍💻 Author

Kanesha K make it little short
