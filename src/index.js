import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyBSn5aoVaVIepFvb4kedOXnNuGO_tBodOA",
  authDomain: "chukwudi-2e0fc.firebaseapp.com",
  databaseURL: "https://chukwudi-2e0fc.firebaseio.com",
  projectId: "chukwudi-2e0fc",
  storageBucket: "chukwudi-2e0fc.appspot.com",
  messagingSenderId: "585207000535",
  appId: "1:585207000535:web:690f6aa3e48b898b4d6f92",
  measurementId: "G-BHYJDN04BJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
