import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
     apiKey: "AIzaSyB0mGp8p5eDlX26O2CDHDSw6ZoQRRhGOxg",
     authDomain: "vue-10-apps-e2553.firebaseapp.com",
     projectId: "vue-10-apps-e2553",
     storageBucket: "vue-10-apps-e2553.appspot.com",
     messagingSenderId: "984059869282",
     appId: "1:984059869282:web:ace23158f61cd910f0793b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;