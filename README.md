# Full E‑Commerce for NTI (MEAN Technology)

Final project for NTI using **MEAN-style stack**:
- **Frontend:** Angular 19 + Bootstrap 5
- **Backend:** Node.js + Express
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT (jsonwebtoken), password hashing (bcrypt)

> Repo: `apdo978/full-e-commerce-for-nti-with-mean-technology`

---

## Table of Contents
- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Express + MongoDB)](#backend-setup-express--mongodb)
  - [Frontend Setup (Angular)](#frontend-setup-angular)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Upload Endpoint](#upload-endpoint)
- [Rate Limiting & CORS](#rate-limiting--cors)
- [Scripts](#scripts)
- [Notes / Known Gaps](#notes--known-gaps)
- [License](#license)

---

## Project Overview
This is an e-commerce project that includes:
- Angular client app (runs on `http://localhost:4200`)
- Express REST API (default port `3000`)
- MongoDB persistence (default `mongodb://127.0.0.1:27017/Users`)
- JWT-based authentication/authorization
- O-Auth 2.0 With Google
- Product endpoints and admin endpoints
- File upload endpoint using Multer

---

## Repository Structure

. ├── Back-End E-Commerce/ │ ├── app.js │ ├── app.env │ ├── package.json │ └── Mvc/ │ ├── Controllers/ │ ├── assets/ │ ├── authrization/ │ ├── config/ │ ├── models/ │ ├── products fitching/ │ ├── routs/ │ └── validators/ ├── e-commerce/ # Angular app (main frontend) │ ├── angular.json │ ├── package.json │ ├── public/ │ └── src/ │ ├── app/ │ ├── index.html │ ├── main.ts │ └── styles.css ├── Front-End E-Commerce/ # appears to contain notes/artifacts │ ├── abgular.txt │ └── package-lock.json ├── NtiProject.rar # archived bundle (optional) └── README.md

Code

---

## Tech Stack

### Frontend
- Angular **19.x** (Angular CLI **19.0.6**)
- Bootstrap **5.3.3**
- `jwt-decode` for decoding JWTs in the UI

### Backend
- Express **4.21.x**
- Mongoose **8.9.x**
- JWT: `jsonwebtoken`
- Validation: `express-validator`
- Rate limiting: `express-rate-limit`
- File uploads: `multer`
- CORS: `cors`
- Env config: `dotenv`

---

## Getting Started

### Prerequisites
- Node.js (recommended: modern LTS)
- npm
- MongoDB running locally (or provide a cloud connection string)
- Angular CLI (optional; you can use `npx` or `npm run start`)

---

## Backend Setup (Express + MongoDB)

1. Go to backend folder:
   ```bash
   cd "Back-End E-Commerce"
Install dependencies:

bash
npm install
Configure environment variables:

The project currently loads dotenv from app.env:
js
require('dotenv').config({ path: "app.env" })
Start the API server (uses nodemon via the test script):

bash
npm run test
Backend will listen on:

process.env.port (default in app.env is 3000)
Frontend Setup (Angular)
Go to Angular app folder:

bash
cd e-commerce
Install dependencies:

bash
npm install
Run dev server:

bash
npm start
Frontend runs at:

http://localhost:4200/
Environment Variables
Backend environment file: Back-End E-Commerce/app.env

Current keys:

apiLink — https://fakestoreapi.com/products (used as an external products API source)
port — API port (default 3000)
databaseurl — MongoDB connection string (default local)
secretkey — JWT secret key (do not commit real secrets in public repos)
Example (app.env):

env
apiLink=https://fakestoreapi.com/products
port=3000
databaseurl=mongodb://127.0.0.1:27017/Users
secretkey=YOUR_SECRET_HERE
API Overview
From Back-End E-Commerce/app.js, main route prefixes:

GET / → health check (“Hello World”)
/Users → user routes
/Products → product routes
/admins → admin routes (orders/admin logic)
/insertSuperUser → user type / super user insertion routes
Exact endpoints (paths/methods/body) are defined in:
Back-End E-Commerce/Mvc/routs/*

Upload Endpoint
File uploads:

POST /upload
Uses upload.array('file', 5) → accepts up to 5 files in form field named file.
Rate Limiting & CORS
CORS
Backend allows requests from:

http://localhost:4200
Rate limiting
A limiter is applied globally:

Window: 15 minutes
Max: 50 requests per IP per window
Message: "Too many requests from this IP, please try again later."
Scripts
Backend (Back-End E-Commerce/package.json)
npm run test → starts nodemon app.js
Frontend (e-commerce/package.json)
npm start → ng serve
npm run build → production build
npm run watch → dev build watch
npm test → Karma unit tests
Notes / Known Gaps
The root README.md is currently minimal; this README is intended to replace it.
The backend script name test is being used to run the server (common improvement: rename to dev and add start).
app.env contains a JWT secret key — best practice is to use .env + .gitignore and provide an .env.example.
If you want, I can also:

generate an .env.example
add a .gitignore
document endpoints by reading the route/controller files (recommended for a truly “comprehensive” API section)
