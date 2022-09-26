// Import the functions you need from the SDKs you need
const {initializeApp} = require("firebase/app");
const {getStorage} = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY7wweOrD8m6ATRyofV8tUEhweRo6K-YQ",
  authDomain: "img-storage-test.firebaseapp.com",
  projectId: "img-storage-test",
  storageBucket: "img-storage-test.appspot.com",
  messagingSenderId: "619289652063",
  appId: "1:619289652063:web:32027df5cd7b801924e4ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

module.exports = storage;