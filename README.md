Add to Cart Application using React Router
Overview

This project is a single-page e-commerce cart application developed using ReactJS, React Router, and Context API.
It demonstrates product listing, cart management, dynamic pricing, and route-based navigation using modern React best practices.

The application consumes data from the Fake Store API and allows users to add, remove, and manage products within a shopping cart while dynamically calculating prices and discounts.

Objectives

Implement product and cart functionality using React

Manage global cart state using Context API

Enable seamless navigation using React Router

Perform real-time price calculations with discounts

Write clean, readable, and maintainable code

Key Features
Product Listing

Products fetched from Fake Store API

Responsive grid layout using Tailwind CSS

Displays product image, title, description, and price

Add to Cart / Remove from Cart toggle based on cart state

Cart Management

Centralized cart state using Context API

Quantity increase and decrease per item

Automatic removal prevention below quantity of 1

Item-wise total calculation

Dynamic cart total updates

Pricing & Discount

Displays:

Total cart price

10% discount

Final payable amount

Real-time price recalculation on quantity change

Routing

React Router used for navigation

Routes implemented:

/ → Products Page

/cart → Cart Page

Persistent navigation bar with cart count indicator

Technology Stack

ReactJS

React Router DOM

Context API

Tailwind CSS

JavaScript (ES6+)

Axios

Fake Store API

Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── Context/
│   └── CartContext.jsx
│
├── Pages/
│   ├── Products.jsx
│   └── Cart.jsx
│
├── App.jsx
└── main.jsx

Application Architecture

Component-based architecture for reusability

Context API for global cart state

Separation of concerns between UI, logic, and routing

Declarative routing using React Router

Data Source

Fake Store API

https://fakestoreapi.com/products

Price Calculation Logic

Item Total

Item Price × Quantity


Cart Total

Sum of all item totals


Discount

10% of cart total


Final Price

Total − Discount


All calculations are updated dynamically based on cart changes.

Installation & Setup
Prerequisites

Node.js (v16 or above)

npm or yarn

Steps to Run
# Clone repository
git clone <repository-url>

# Navigate to project folder
cd add-to-cart-app

# Install dependencies
npm install

# Start development server
npm run dev


Access the application at:

http://localhost:5173

Best Practices Followed

Clean and readable code structure

Reusable components

Centralized state management

Conditional rendering

Responsive UI design

Proper folder organization

Possible Enhancements

Persist cart data using localStorage

Add product search and filters

Implement checkout flow

Add loading and error handling

User authentication
