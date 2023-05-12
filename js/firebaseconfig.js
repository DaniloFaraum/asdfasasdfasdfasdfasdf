const firebaseConfig = {
    apiKey: "AIzaSyB9XI-hnLEwq23QGsioQob3riAPnpOjnuc",
    authDomain: "senai-dent-lab.firebaseapp.com",
    projectId: "senai-dent-lab",
    storageBucket: "senai-dent-lab.appspot.com",
    messagingSenderId: "632183933285",
    appId: "1:632183933285:web:40008f3eb8e473277af98c",
    measurementId: "G-N1RNS93VYH"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()