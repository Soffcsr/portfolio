import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5gJGuu_8riI_v5IH30_3TZjf0bzPMXS0",
    authDomain: "portfolio-de9b8.firebaseapp.com",
    databaseURL: "https://portfolio-de9b8.firebaseio.com",
    projectId: "portfolio-de9b8",
    storageBucket: "portfolio-de9b8.appspot.com",
    messagingSenderId: "898178805004",
    appId: "1:898178805004:web:3082bfe0f093c50b0f2d29"
};

firebase.initializeApp(firebaseConfig)
const firebaseApp = firebase

export{
    firebaseApp,
}