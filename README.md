# Hotel Booking Application

## Description

The Hotel Booking Application is a web-based platform designed to simplify hotel reservations for users. It offers a seamless booking experience, allowing users to browse available hotels, view room details, and make reservations with ease.

## Features

- Secure authentication using JWT and HTTP cookies.
- Advanced search functionality for hotels.
- Sorting and filtering capabilities via REST API.
- Advanced forms with image upload capability.
- Support for CRUD operations to manage hotel and user data.
- Robust automated tests ensuring functionality across all features.
- Seamless reservation process with booking confirmation and email notifications.

## Tech Stack

### Client Side/Front-end

- @stripe/react-stripe-js: 2.5.1
- @stripe/stripe-js: 3.0.6
- react: 18.2.0
- react-datepicker: 6.2.0
- react-dom: 18.2.0
- react-hook-form: 7.49.2
- react-icons: 5.0.1
- react-query: 3.39.3
- react-router-dom: 6.22.2

### API Side/Backend

- bcryptjs: 2.4.3
- cloudinary: 2.0.2
- cookie-parser: 1.4.6
- cors: 2.8.5
- cross-env: 7.0.3
- dotenv: 16.3.1
- express: 4.18.2
- express-validator: 7.0.1
- jsonwebtoken: 9.0.2
- mongodb: 6.3.0
- mongoose: 8.2.0
- multer: 1.4.5-lts.1
- stripe: 14.19.0

## Installation

To run the Hotel Booking Application locally, follow these steps:

1. Clone this repository: `git clone https://github.com/The-0mnipotent/MERNStay.git`
2. Navigate to the project directory: `cd hotel-booking-app`
3. **Frontend Setup:**
   - Navigate to the frontend folder: `cd frontend`
   - Install frontend dependencies: `npm install`
   - Configure Stripe.js as needed
   - Create a `.env` file with required environment variables
   - Start the frontend: `npm start`

4. **Backend Setup:**
   - Open another terminal window/tab.
   - Navigate to the backend folder: `cd ../backend` (assuming the backend folder is located at the same level as the frontend folder)
   - Install backend dependencies: `npm install`
   - Configure the database (MongoDB), Cloudinary, and JWT as needed
   - Create a `.env` file with required environment variables
   - Start the backend: `npm start`

5. **Final Steps:**
   - Make necessary changes in the `package.json` file if required.
   - Once both frontend and backend are running, you can access the application at `http://localhost:7000`.


## Usage

To use the Hotel Booking Application, follow these steps:

1. Sign up for an account or log in if you already have one.
2. Search for hotels by location, dates, and other preferences.
3. View hotel details, including available rooms, amenities, and pricing.
4. Select the desired room type and proceed to the booking page.
5. Enter guest details and payment information.
6. Confirm the booking using toastify notification.
7. Check your Bookings in My Bookings section.

## Contributing

Contributions are welcome! Please follow these guidelines:
- Fork the repository
- Create your branch: `git checkout -b feature-name`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin feature-name`
- Submit a pull request

## Contact

For questions or feedback, please contact [Arpit Singh](https://arpit-singh.netlify.app/) at [arpitsingh92741@gmail.com].
