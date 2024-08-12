# JobHut
JobHut is a web application designed and developed for hackprix hackathon to bridge the gap between service sector or domestic workers and potential hiring parties. This repository contains the source code for the frontend and backend of the application.

# Installation
1. clone the repository to your local machine:
   ```
   https://github.com/yourusername/jobhut.git
   ```
2. Navigate to the project directory:
  
    ```
    cd elevate-app
    ```
3. Install dependencies:

    ```
    npm install
    ```
## Configuration
Before running the app, you need to set up Firebase for authentication and database services. Follow these steps:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable authentication with email/password in the Firebase project settings.
3. Create a Firebase database and update the Firebase configuration in `src/firebase/config.js` file with your project's configuration details.

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    
    export default firebaseConfig;
    ```

## Running the App
After configuring Firebase, you can run the app on your local machine:
1. Go to the main folder
    ```
    cd mainapp
    ```
2. Run the web application on your local machine
    ```
    npm start
    ```    

## Acknowledgments
Special thanks to HackPrix Hackathon for organizing the event and providing the opportunity to develop this app.
