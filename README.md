# Paradise Nursery Shopping Application 🌿

Welcome to **Paradise Nursery**, an e-commerce web application crafted with React and Redux Toolkit. Paradise Nursery offers a curated selection of premium houseplants designed to breathe vitality, tranquility, and natural beauty into your living spaces and offices.

---

## 📖 Project Overview
Paradise Nursery Shopping Application provides a smooth, intuitive, and modern online shopping experience. Users can explore various categories of houseplants, learn about the company's background and botanical heritage, add their favorite greenery to a persistent shopping cart, and seamlessly manage item quantities with real-time price computations.

Developed as the Final Capstone Project for the **Developing Front-End Apps with React** course (Coursera / IBM Full Stack Cloud Developer & Front-End Developer certifications).

---

## ✨ Features

### 1. 🏡 Landing Page & Company Story
- **Immersive Hero Section**: Beautiful full-bleed botanical background imagery with glassmorphic cards and responsive typography.
- **Brand Identity**: Company name, tagline, and an engaging "Get Started" call-to-action button transitioning directly to the plant showroom.
- **About Us Section**: Details the mission, commitment to sustainable nursery cultivation, and 100% plant health guarantee.

### 2. 🌱 Botanical Product Catalog
- **18 Unique Houseplants**: Across 3 curated categories:
  - **Air Purifying Plants**: Monstera Deliciosa, Snake Plant, Peace Lily, Spider Plant, Boston Fern, Rubber Plant.
  - **Aromatic & Fragrant Plants**: Lavender, Jasmine, Rosemary, Gardenia, Mint, Eucalyptus.
  - **Low Maintenance & Succulents**: Aloe Vera, ZZ Plant, Jade Plant, Echeveria, Haworthia, Pothos.
- **Detailed Plant Cards**: Each plant displays high-resolution thumbnail images, botanical names, descriptions, and transparent pricing.
- **Smart "Add to Cart" State**: Clicking "Add to Cart" adds the plant to Redux state and disables the button to prevent duplicate single-click additions while showing an "Added to Cart" confirmation badge.

### 3. 🧭 Seamless Navigation Bar
- Appears across both the Product Listing and Shopping Cart views.
- Includes quick links to **Home**, **Plants**, and **Cart**.
- Features an interactive **Shopping Cart Icon** with a dynamic item counter badge that updates in real-time as items are added, increased, or decreased.

### 4. 🛒 Dynamic Shopping Cart
- **Detailed Line Items**: Displays thumbnail, plant name, individual unit price, and calculated subtotal for each plant.
- **Quantity Controls**: Simple `+` and `-` buttons allowing users to increase or decrease quantities on the fly. Decreasing below 1 automatically removes the item.
- **Item Removal**: One-click delete/trash button to remove any plant directly from the cart.
- **Order Summary**: Real-time computation of total plant units and grand total cost.
- **Continue Shopping**: Effortlessly return to the plant collection to keep exploring.
- **Checkout Action**: Interactive checkout button with "Coming Soon" status notification.

---

## 🛠️ Technology Stack
- **Framework**: React 18+
- **Build Tool**: Vite
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Styling**: Modern Vanilla CSS3 (Custom Glassmorphism, CSS Grid, Flexbox, Keyframe Animations)
- **Fonts**: Outfit & Plus Jakarta Sans via Google Fonts

---

## 📂 Project Structure & Grading Submission Files
| Task | Requirement | File Location |
| :--- | :--- | :--- |
| **Task 1** | Project Name & Details README | `README.md` |
| **Task 2** | Company Information & Story | `src/AboutUs.jsx` |
| **Task 3** | Landing Page Background & Styles | `src/App.css` |
| **Task 4** | Landing Page with "Get Started" CTA | `src/App.jsx` |
| **Task 5** | Redux Shopping Cart Slice | `src/CartSlice.jsx` |
| **Task 6** | Product Catalog (18 plants, 3 categories, Cart badge) | `src/ProductList.jsx` |
| **Task 7** | Shopping Cart with totals, +/- buttons & checkout | `src/CartItem.jsx` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/abdulrafium/paradise_nursery_shopping_application.git
   cd paradise_nursery_shopping_application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).