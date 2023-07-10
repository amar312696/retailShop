import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9bk63YLwOzjt_LtIV8RjoYwiJ4UmSejg",
  authDomain: "retailshop-64fa8.firebaseapp.com",
  projectId: "retailshop-64fa8",
  storageBucket: "retailshop-64fa8.appspot.com",
  messagingSenderId: "859987616753",
  appId: "1:859987616753:web:1ec2005c73a64ace1dda50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ****retailSop-retailer*********

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
export const auth = getAuth(app);

export default app;