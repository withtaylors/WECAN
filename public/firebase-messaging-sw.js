importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyBqlJafy3TZ_S2W9uHqGO5warC8ZbDfewg",
    authDomain: "wecan-6752c.firebaseapp.com",
    projectId: "wecan-6752c",
    storageBucket: "wecan-6752c.appspot.com",
    messagingSenderId: "358108176427",
    appId: "1:358108176427:web:f1f476df99158cfc29ca6e",
    measurementId: "G-XCBNQLE1VV"
});

    // Initialize Firebase
const messaging = firebase.messaging();
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.onBackgroundMessage((payload) => {
        self.registration.showNotification();
    });