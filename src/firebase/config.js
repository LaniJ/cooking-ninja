import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-UUUkhLt1okAlJnob3hRjLMySav1DKvg",
  authDomain: "cooking-ninja-site-82267.firebaseapp.com",
  projectId: "cooking-ninja-site-82267",
  storageBucket: "cooking-ninja-site-82267.appspot.com",
  messagingSenderId: "1042790738984",
  appId: "1:1042790738984:web:510f82bb8b5fe133b3591d"
};

// initialize firebase

firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore }
