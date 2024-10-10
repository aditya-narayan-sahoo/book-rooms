# Book Rooms

## Overview

**Book Rooms** is a web application built with Next.js that allows users to book rooms efficiently. Users can log in or sign up using their email, add rooms, view available rooms, and perform CRUD operations on their bookings. The backend is powered by Appwrite, ensuring a robust and scalable solution.

## Features

- **User Authentication**: Sign up and log in using email.
- **Room Management**: Add new rooms and view available options.
- **Booking Management**: Create, read, update, and delete bookings.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Tailwind CSS**: Utilizes Tailwind for styling, ensuring a modern UI.

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (latest LTS version)
- **npm** (comes with Node.js) or **yarn** (optional)
- **tailwindCSS** (can be configured on the project initialization page)

### Setup Instructions

1. **Clone the Repository**

   Open your terminal and run:

   ```bash
   git clone https://github.com/aditya-narayan-sahoo/book-rooms.git
   cd book-rooms
   ```

2. **Install Dependencies**

   Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

   Or if you prefer using yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the root of your project and add the following configuration:

   ```plaintext
   NEXT_APPWRITE_KEY=your-appwrite-key
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT=your-appwrite-projectId
   NEXT_PUBLIC_APPWRITE_DATABASE=your-appwrite-databaseId
   NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=your-appwrite-collectionId
   NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS=your-appwrite-collectionId
   NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=your-appwrite-bucketId
   NEXT_PUBLIC_URL=your-app-url
   ```

4. **Run the Development Server**

   Start the application with:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

Here's a brief overview of the project structure:

```
book-rooms/
├── public/          # Static assets
├── app/             # Application pages and routing
├── assets/          # Images and other static files
├── components/      # Reusable components
├── config/          # Configuration files (e.g., Appwrite setup)
├── context/         # Context API for state management
├── middleware.js     # Middleware for authentication and routing logic
├── tailwind.config.js # Tailwind CSS configuration file
├── postcss.config.js  # PostCSS configuration file for Tailwind integration
├── package.json      # Project metadata and dependencies
└── README.md        # Project documentation
```

## Usage

### User Authentication

Users can sign up or log in using their email credentials. After logging in, they will have access to all functionalities of the application.

### Room Management

Users can add new rooms through a dedicated form. Available rooms can be viewed on the main page.

### Booking Management

Users can manage their bookings through a user-friendly interface that allows them to create, update, or delete bookings as needed.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any feature requests or bug reports.

### Citation

This project is done with in accordance to this video by [Traversy Media](https://www.youtube.com/watch?v=l9zh0pqEHyc) on his youtube channel.
