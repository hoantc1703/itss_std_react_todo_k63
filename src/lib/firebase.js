import firebase from 'firebase';

// firebase の初期化
if (!firebase.apps.length) {
  const firebaseConfig = {
  apiKey: "AIzaSyDQZ4WZUuIXB0Qqvz8EijyiNoMiJn6ZgLI",
  authDomain: "itssss-fe4e3.firebaseapp.com",
  projectId: "itssss-fe4e3",
  storageBucket: "itssss-fe4e3.appspot.com",
  messagingSenderId: "123686260611",
  appId: "1:123686260611:web:ac5aca37a430271bc6f0b6"
};
  firebase.initializeApp(firebaseConfig);
}