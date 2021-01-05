import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDCZ-VkkshocTUM5HyrpQyErlrombrTvHg',
  authDomain: 'catch-of-the-day-a8059.firebaseapp.com',
  projectId: 'catch-of-the-day-a8059',
  storageBucket: 'catch-of-the-day-a8059.appspot.com',
  messagingSenderId: '537737760177',
  appId: '1:537737760177:web:b7fff871c001df32b84190',
  measurementId: 'G-6HM5480T9L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();
const auth = firebaseApp.auth();
const signInGoogle = new firebase.auth.GoogleAuthProvider();
const signInGithub = new firebase.auth.GithubAuthProvider();
const signInFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, signInFacebook, signInGoogle, signInGithub };
export default db;
