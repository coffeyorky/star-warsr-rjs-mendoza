import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZvCkrge42UlXIiPTovgFoVLtJGnVgCHo",
  authDomain: "wookitienda.firebaseapp.com",
  projectId: "wookitienda",
  storageBucket: "wookitienda.appspot.com",
  messagingSenderId: "609652692705",
  appId: "1:609652692705:web:dcc9439e07f05ea63dc9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


