import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyC4t0lJ94MSmL6QQkNgcpf2peU3ebq_fvQ",
    authDomain: "spring-react-app-upload.firebaseapp.com",
    databaseURL: "https://spring-react-app-upload.firebaseio.com",
    projectId: "spring-react-app-upload",
    storageBucket: "spring-react-app-upload.appspot.com",
    messagingSenderId: "739743547245",
    appId: "1:739743547245:web:41adffa1caa7ccd6c5a464",
    measurementId: "G-65R5HVK40F"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default}