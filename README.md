# Chat App README

## Overview
This Chat App is a modern messaging application built with React, Tailwind CSS, and Firebase. It supports user authentication, real-time messaging, media sharing, emoji integration, and user profile management. Users can add, block, and remove other users, edit their profiles, and enjoy a seamless chatting experience.

## Features
- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Real-time Messaging**: Send and receive messages in real time using Firebase Firestore.
- **Media Sharing**: Send images, videos, and other media files in chats.
- **Emoji Integration**: Enhance messages with a wide range of emojis.
- **User Management**: Add, block, and remove users.
- **Profile Management**: Edit profile details including username and profile picture.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase**: Backend-as-a-service for authentication, database, and storage.

## Getting Started

### Prerequisites
- A Firebase project set up with Firestore and Authentication enabled.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. **Set up Firebase:**
   - Go to the Firebase Console.
   - Create a new project or use an existing one.
   - Enable Firestore and Authentication.
   - Get your Firebase config object from Project Settings and add it to a `.env` file in the root of your project:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

### Firebase Configuration
Ensure your Firebase Firestore rules allow read and write access to authenticated users. Example rules:
```json
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Usage

### User Authentication
- **Sign Up**: Users can create an account using their email and password.
- **Log In**: Users can log in with their email and password.

### Real-time Messaging
- **Send Messages**: Users can send text messages in real-time.
- **Receive Messages**: Messages are received in real-time and displayed in the chat window.

### Media Sharing
- **Send Media**: Users can upload and send images and videos.
- **View Media**: Media files are displayed in the chat window.

### Emoji Integration
- **Send Emojis**: Users can select and send emojis in their messages.

### User Management
- **Add Users**: Users can search for and add other users to their contacts.
- **Block Users**: Users can block others to prevent them from sending messages.
- **Remove Users**: Users can remove contacts from their list.

### Profile Management
- **Edit Profile**: Users can update their username and profile picture.

## Contributing
Contributions are welcome! Please create a pull request with detailed information on your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions or support, please contact sanchiitvijay@gmail.com.

---