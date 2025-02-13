# Guestbook App

This is a simple Guestbook app built with **React** and **Firebase** using **Vite**. The app allows users to log in using their Google account and leave messages that are stored in **Firebase Firestore** and displayed in real-time. Users can also delete their own messages.

## Features

- **Google Login**: Users can log in with their Google account via Firebase Authentication.
- **Real-Time Messaging**: Messages are saved in Firebase Firestore and displayed in real-time.
- **Message Deletion**: Users can delete their own messages.

## Technologies Used

- **React** (via Vite)
- **Firebase Firestore** (for storing and retrieving messages)
- **Firebase Authentication** (for Google login)

## Project Structure

- **`src/pages/login.jsx`**: Handles the login functionality with Google.
- **`src/components/messagelist.jsx`**: Displays the list of messages and allows users to delete their own messages.
- **`src/firebase.js`**: Initializes Firebase and connects to Firestore.
- **`src/App.jsx`**: The main React component that integrates the login and message display.
- **`src/main.jsx`**: The entry point of the application that renders `App.jsx` to the DOM.
- **`src/index.css`**: Global styles for the application.


## How to Run Locally

### 1. Clone the repository:

```bash
git clone https://github.com/Buruk4/GuestBook/tree/main
```

### 2. Install dependencies:

```bash
cd guestbook-app
npm install
```

### 3. Set up Firebase:

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Set up Firebase Authentication with Google sign-in.
- Enable Firestore in your Firebase project.
- Add your Firebase config to the app in the `src/firebase.js` file.

### 4. Run the app:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## License

MIT
