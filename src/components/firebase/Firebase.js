import app from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2-tWSs_4FyyUNJEztUhPdKuBpCtDZqdQ",
    authDomain: "electronics-9436f.firebaseapp.com",
    databaseURL: "https://electronics-9436f-default-rtdb.firebaseio.com",
    projectId: "electronics-9436f",
    storageBucket: "electronics-9436f.appspot.com",
    messagingSenderId: "121295028074",
    appId: "1:121295028074:web:65269f330359da72c52f13",
    measurementId: "G-08Z3ZJB0NE"
  };

const Firebase = app.initializeApp(firebaseConfig);

export default Firebase;