# 🌍 Foodverse

**Foodverse** is a global recipe-sharing platform built with the MERN stack. It celebrates culinary diversity by organizing recipes by continent, region, and theme — with a focus on accessibility, modular design, and user experience.


🔗 Live site: [foodverseonline.netlify.app]
---

## 🧰 Tech Stack

- **Frontend**: React, React Router, Modular CSS
- **Backend**: Express.js, MongoDB, Mongoose
- **Deployment**: Netlify (frontend), Render/Railway (backend)
- **Database**: MongoDB Atlas

---

## ✨ Features

- 🌍 Continent-based recipe browsing (Africa, Asia, Europe, Americas, Oceania)
- 📖 Detailed recipe pages with ingredients, instructions, and metadata
- 🧩 Modular components for scalability and reuse
- 🎨 Accessible and responsive design with semantic HTML
- 🔌 RESTful API for full CRUD operations
- 🧪 Seed script to populate MongoDB with global recipes

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/PLP-MERN-Stack-Development/week-8-capstone_-KatlehoChi.git
cd foodverse

# Install backend
cd server
npm install

# Install frontend
cd ../client
npm install

## 🚀 Running Locally
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start

Make sure to add your MongoDB URI in .env:

env
MONGO_URI=mongodb+srv://
PORT=5000

🌱 Seeding the Database
bash
# Run seed script
node seed.js

foodverse/
├── client/                # React frontend
│   ├── components/        # Reusable UI components
│   ├── pages/             # Continent and recipe views
│   ├── styles/            # Modular CSS
│   └── App.js
├── server/                # Express backend
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   ├── controllers/       # Logic for recipes
│   ├── seed.js            # Seed data script
│   └── server.js
├── .env
└── README.md
