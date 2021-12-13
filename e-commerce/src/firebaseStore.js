import firebase from "firebase/compat/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD6PNmZOXOg19MGLXJz-ZyR-x8kAII5B34",
    authDomain: "e-commerce-auth-3bd56.firebaseapp.com",
    databaseURL: "https://e-commerce-auth-3bd56-default-rtdb.firebaseio.com",
    projectId: "e-commerce-auth-3bd56",
    storageBucket: "e-commerce-auth-3bd56.appspot.com",
    messagingSenderId: "212170172586",
    appId: "1:212170172586:web:c0c35f8959e106205bc8d3",
};

const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB.database().ref();

// import { initializeApp } from "firebase/app";
// import {getDatabase} from 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyD6PNmZOXOg19MGLXJz-ZyR-x8kAII5B34",
//     authDomain: "e-commerce-auth-3bd56.firebaseapp.com",
//     databaseURL: "https://e-commerce-auth-3bd56-default-rtdb.firebaseio.com",
//     projectId: "e-commerce-auth-3bd56",
//     storageBucket: "e-commerce-auth-3bd56.appspot.com",
//     messagingSenderId: "212170172586",
//     appId: "1:212170172586:web:c0c35f8959e106205bc8d3",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export default database;

// import firebase from "firebase/compat/app";
// import {getDatabase} from 'firebase/database';

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyD6PNmZOXOg19MGLXJz-ZyR-x8kAII5B34",
//     authDomain: "e-commerce-auth-3bd56.firebaseapp.com",
//     databaseURL: "https://e-commerce-auth-3bd56-default-rtdb.firebaseio.com",
//     projectId: "e-commerce-auth-3bd56",
//     storageBucket: "e-commerce-auth-3bd56.appspot.com",
//     messagingSenderId: "212170172586",
//     appId: "1:212170172586:web:c0c35f8959e106205bc8d3",
// })

// export const db = getDatabase(app);
// export default db;