# AI Image Generator

**AI Image Generator** is a web application that allows users to generate stunning AI-driven images by providing creative prompts. It includes secure authentication to personalize user experiences and ensures the safety of user data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Production](#production)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and signup functionality using JWT.
- **Prompt-to-Image**: Enter a text prompt to generate an AI-generated image.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Secure Data Handling**: Ensures user data safety and privacy.

## Technologies Used

- **Frontend**: React, HTML, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **others**: RESTful APIs, JWT for authentication, AI API for image generation(Clipdrop API)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/vaishnaviprakash12/Imagify.git
    cd Imagify
    ```

2. **Install dependencies for the frontend**:
    ```bash
    cd client
    npm install
    ```

3. **Install dependencies for the backend**:
    ```bash
    cd ../server
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the `server` directory and add the following variables:
    ```env
    NODE_ENV = development
    PORT = 3000
    MONGODB_URI = your_mongodb_connection_string
    JWT_SECRET = your_jwt_secret_key
    CLIPDROP_API = your_ai_image_generator_api_key
    ```

5. **Run the application**:
    ```bash
    # Start the backend server
    cd server
    npm run server

    # Start the frontend server in another terminal
    cd client
    npm run dev
    ```

## Usage

1. **Register**: Create a new account or log in with existing credentials.
2. **Enter Prompt**: Write a text prompt in the input field.
3. **Generate Image**: Click the "Generate" button to create an AI-generated image.
4. **Save or Download**: Optionally download or save the generated image.

## Production

To deploy AI Image Generator in production:

1. Update the `.env` file in the `server` directory with production MongoDB connection string, JWT secret key, and Cloudinary API key.

2. Build the frontend for production:
   ```bash
   cd client
   npm run build

   ## Contact

Vaishnavi Prakash - [LinkedIn](https://www.linkedin.com/in/vaishnavi-prakash-b5547921a/) - [Email](mailto:vaishnaviprakash342@gmail.com)

Project Link: [https://github.com/vaishnaviprakash12/Imagify](https://github.com/vaishnaviprakash12/Imagify)

Live Site: 


