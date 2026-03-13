# HelpOthers – Backend API

This repository contains the backend API for the HelpOthers platform.

The backend is built with **Node.js and Express** and provides authentication, donation handling, image management, and other services required by the frontend application.

The API is deployed on **Railway** and connects to **MongoDB Atlas**.

---

## Live Backend API

https://myprojectadiyuvanbackend-production.up.railway.app

---

## Tech Stack

Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

Authentication
- JWT
- Google OAuth

Security
- Helmet
- Express Rate Limit
- CORS Configuration
- Cookie Parser

Integrations
- Razorpay (Payments)
- Cloudinary (Image Storage)
- Nodemailer (Email Service)

Deployment
- Railway

---

## Features

- Google OAuth authentication
- JWT authentication system
- Password reset via email
- Donation handling with Razorpay
- Image upload and retrieval
- Secure API endpoints
- Rate limiting for security

---

## Environment Variables

Create a `.env` file in the root of the backend project.

PORT=8080
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=my_google_client_id
GOOGLE_CLIENT_SECRET=my_google_client_secret

RAZORPAY_KEY_ID=my_razorpay_key
RAZORPAY_KEY_SECRET=my_razorpay_secret

CLOUDINARY_CLOUD_NAME=my_cloudinary_name
CLOUDINARY_API_KEY=my_cloudinary_api_key
CLOUDINARY_API_SECRET=my_cloudinary_api_secret

EMAIL_USER=my_email
EMAIL_PASS=my_email_password

Example configuration:

## Installation

Clone the repository

git clone https://github.com/RahulShukla387/MyProjectAdiYuvanBackend.git


Navigate to the project directory

cd MyProjectAdiYuvanBackend


Install dependencies

npm install


Run the development server

npm run server


---

## Deployment

The backend API is deployed on **Railway**.

Steps used:

1. Push project to GitHub
2. Import repository into Railway
3. Configure environment variables
4. Deploy the service

---

## Author

Rahul Shukla

GitHub

https://github.com/RahulShukla387


