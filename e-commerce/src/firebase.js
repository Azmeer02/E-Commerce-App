import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD6PNmZOXOg19MGLXJz-ZyR-x8kAII5B34",
    authDomain: "e-commerce-auth-3bd56.firebaseapp.com",
    projectId: "e-commerce-auth-3bd56",
    storageBucket: "e-commerce-auth-3bd56.appspot.com",
    messagingSenderId: "212170172586",
    appId: "1:212170172586:web:c0c35f8959e106205bc8d3",
})

export const auth = app.auth();
export default app;