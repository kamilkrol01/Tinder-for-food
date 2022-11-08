import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAXPhOYO7lB847eGxl3FbrxDO6zExDl1sE",
    authDomain: "tinder-recipes.firebaseapp.com",
    projectId: "tinder-recipes",
    storageBucket: "tinder-recipes.appspot.com",
    messagingSenderId: "821304440220",
    appId: "1:821304440220:web:9143ce37325f511546c459",
    measurementId: "G-1D965D0NZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

console.log(database)

export default database;