// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDFYIpJlgGZBHyjcaiIKgPAadzSofuYaCY",
    authDomain: "vuesax-admin.firebaseapp.com",
    databaseURL: "https://vuesax-admin.firebaseio.com",
    projectId: "vuesax-admin",
    storageBucket: "vuesax-admin.appspot.com",
    messagingSenderId: "914001522995"
};

firebase.initializeApp(config);
