import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyBEV286AzJGGx7gdlI6thoJdjLzodW8Tl0",
  authDomain: "panwar-clothes.firebaseapp.com",
  projectId: "panwar-clothes",
  storageBucket: "panwar-clothes.appspot.com",
  messagingSenderId: "905744143642",
  appId: "1:905744143642:web:4bb53263dc3d2e6b8fc8a3",
  measurementId: "G-NHVXHEC8LS",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async function (
  userAuth,
  additionalData
) {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const date = new Date();

    console.log(displayName, email);
    try {
      await userRef.set({
        displayName,
        email,
        date,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(snapShot);
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "Select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
