🛒 Add to Cart Application (React + Router)
📌 Project Overview

This project is a ReactJS Add to Cart application built using React Router and the Context API. It fetches product data from the Fake Store API and allows users to add, remove, and manage cart items with dynamic quantity and price calculations. The application demonstrates efficient state management, routing, and a clean component-based architecture.

🚀 Features

Product Page:
Products are fetched from the Fake Store API and displayed in a responsive Tailwind CSS grid showing the product image, title, description, and price. Users can add items to the cart, and if an item already exists, the button changes to “Remove from Cart.”

Cart Page:
Displays all cart items with quantity controls, item-wise total price, and a cart summary showing total price, a 10% discount, and the final payable amount. All values update dynamically based on user actions.

Navigation & Routing:
React Router enables navigation between the Products page (/) and the Cart page (/cart), with a persistent navbar displaying the cart item count.

🧑‍💻 Tech Stack

ReactJS, React Router DOM, Context API, Tailwind CSS, JavaScript (ES6+), Axios, Fake Store API.

📂 Project Structure

Components, Context, and Pages are clearly separated to ensure maintainability and scalability, with routing handled in App.jsx.

🧮 Price Logic

Item totals are calculated as price × quantity, the cart total is the sum of all items, a 10% discount is applied, and the final price is calculated dynamically.

▶️ How to Run

Clone the repository, install dependencies using npm install, start the development server with npm run dev, and access the app at http://localhost:5173.

📌 Key Concepts

React Hooks, Context API for global state, React Router for navigation, conditional rendering, dynamic price calculations, and reusable components.

🎯 Future Enhancements

Local storage persistence, product search and filtering, checkout flow, and user authentication.

👨‍💻 Author

Kanesha K
