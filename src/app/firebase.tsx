import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: "AIzaSyD4xhe4cKcukwM9lTjWykfXlHTFRhCzCLM",
    authDomain: "tivio-auth.firebaseapp.com",
    projectId: "tivio-auth",
    storageBucket: "tivio-auth.firebasestorage.app",
    messagingSenderId: "474891054304",
    appId: "1:474891054304:web:5d2169d418324bbbe6f485"
};

const app = initializeApp(firebaseConfig);