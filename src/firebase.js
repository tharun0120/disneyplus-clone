import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC722B1eTosVZzmCmNARiZuo0yTOb8z2I0",
  authDomain: "disneyplus-clone-221eb.firebaseapp.com",
  projectId: "disneyplus-clone-221eb",
  storageBucket: "disneyplus-clone-221eb.appspot.com",
  messagingSenderId: "91990436523",
  appId: "1:91990436523:web:3dab389700099623f8e5ee",
  measurementId: "G-H1KVDZXTD5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
