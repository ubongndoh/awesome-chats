import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCvgCnz1Skw0NFKINuGTPB4eILi369g1VU",

    authDomain: "awesome-chats-c608f.firebaseapp.com",

    projectId: "awesome-chats-c608f",

    storageBucket: "awesome-chats-c608f.appspot.com",

    messagingSenderId: "1070195268170",

    appId: "1:1070195268170:web:4c8e2f7cdcde550d91a4b3",

    measurementId: "G-4DDJ94K9C0"


});

const db = firebaseApp.firestore();


export default db;