import React from 'react';
import './App.css';
import PageBuilder from './containers/PageBuilder';
import firebase from "firebase";



function App() {
  var config = {
        apiKey: 'AIzaSyA6rdzOOzlZBeUU4kSwqxuKIFXc2nvKr9Q',
        storageBucket: 'gs://fitness-club-56fdc.appspot.com/',
        databaseURL:'https://fitness-club-56fdc.firebaseio.com/',
        projectId:'fitness-club-56fdc'
        
      };
    firebase.initializeApp(config);
  return (
    <PageBuilder />
  );
}

export default App;
