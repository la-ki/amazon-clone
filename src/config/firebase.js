import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvxyzeN2yS3A7yZrzrkCv4iSHFBjUXbaA",
    authDomain: "clone-bdad1.firebaseapp.com",
    databaseURL: "https://clone-bdad1.firebaseio.com",
    projectId: "clone-bdad1",
    storageBucket: "clone-bdad1.appspot.com",
    messagingSenderId: "468869185209",
    appId: "1:468869185209:web:9260eefcf7463467e1e568"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export {db, auth};