import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyDklRvPmuK1gI70Lbv2nSw1kMWlQDIv97U",
    authDomain: "test-d4d4d.firebaseapp.com",
    databaseURL: "https://test-d4d4d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-d4d4d",
    storageBucket: "test-d4d4d.appspot.com",
    messagingSenderId: "746131197046",
    appId: "1:746131197046:web:813153f603f3edee112357"
};

export const firebase_app = firebase.initializeApp(firebaseConfig);

