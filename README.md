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
## Screenshots
   ![Screenshot 2024-08-12 200344](https://github.com/user-attachments/assets/8e138be4-3910-4cc6-8b02-e99da2fd84d6)
   ![Screenshot 2024-08-12 200532](https://github.com/user-attachments/assets/0fa749d2-a85d-4e20-a59a-6937a407df35)
   ![Screenshot 2024-08-12 200612](https://github.com/user-attachments/assets/785bd59f-9008-4228-bf6a-c65c966eb5b0)
   ![Screenshot 2024-08-12 200835](https://github.com/user-attachments/assets/9915e225-8f7f-4850-8ef4-68a056e5ba9d)

   ![Screenshot 2024-08-12 200706](https://github.com/user-attachments/assets/1a0e2e93-c908-4acb-9d6b-a78aea1f7fc3)
   ![Screenshot 2024-08-12 200744](https://github.com/user-attachments/assets/c83b6c1d-26c1-4224-9060-2dcae0333a4b)


## Contributors
 - [Mohammed Faisal Khan](https://github.com/faisalkhan4k)
 - [Mohammed Talha Hussain](https://github.com/imtalhahussain)
 - [Mohammed Zain](https://github.com/codingsenpy)
 - [Mohammed Saif](https://github.com/saifxyzyz)
## Acknowledgments
Special thanks to HackPrix Hackathon for organizing the event and providing the opportunity to develop this app.
