import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB1ZqDVKa7xD-h3WVYD6FmSbXaGWdBmcO0",
    authDomain: "project-resonance-c5b16.firebaseapp.com",
    databaseURL: "https://project-resonance-c5b16.firebaseio.com",
    projectId: "project-resonance-c5b16",
    storageBucket: "project-resonance-c5b16.appspot.com",
    messagingSenderId: "503111220707",
    appId: "1:503111220707:web:db735f5179d0ceab0234d6",
    measurementId: "G-GHTBGHCV77"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();