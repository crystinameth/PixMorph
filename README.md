# 🤖 pixMorph

pixMorph is a SaaS (Software as a Service) app that leverages AI features for image manipulation and enhancement. It integrates with Next.js 14 for frontend development, Clerk for authentication, MongoDB for data storage, Cloudinary AI for image processing, and Stripe for handling payments and credits.

## 🚀Features

- **Cloudinary AI Integration:** Utilizes Cloudinary AI tools to implement various image manipulation features such as object recolor, object removal, background removal, and generative fill.
- **Authentication with Clerk:** Secure user authentication and management powered by Clerk, allowing users to create accounts, log in, and access their personalized content.
- **Stripe Payment Gateway:** Integrated Stripe for handling payments and implementing a credits system. New users receive 10 free credits upon signup and can purchase additional credits for image processing tasks.
- **MongoDB Data Storage:** Data persistence and storage using MongoDB, ensuring reliable and scalable data management for user accounts, credits, and image processing results.

## Getting Started

To run the pixMorph app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/crystinameth/PixMorph.git
   cd PixMorph

2. Installation:

   ```bash
   npm install

3. Set Up Environment Variables:

   ```bash
   #NEXT
   NEXT_PUBLIC_SERVER_URL=

   #MONGODB
   MONGODB_URL=

   #CLERK
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   WEBHOOK_SECRET=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   #CLOUDINARY
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   #STRIPE
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
  Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com/in).

4. Running the Project:

   ```bash
   npm run dev
  Open http://localhost:3000 in your browser to view the project.

## 📌Usage

 - **Image Manipulation:** Upload images to the app and explore the Cloudinary AI features for object recoloring, object removal, background removal, and generative fill.
 - **Credits System:** New users receive 10 free credits. Purchase additional credits via the Stripe payment gateway to access more image processing tasks.
 - **User Management:** Use the Clerk authentication system for account creation, login, and personalized user experiences.
