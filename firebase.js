// Firebase setup for the NUVAREI site.
// The site has no build step, so the SDK is loaded straight from Google's CDN.
//
// Use it from any page with a module script:
//   <script type="module">
//     import { auth, db, storage } from "./firebase.js";
//   </script>
//
// The apiKey below is not a secret: Firebase web keys are meant to be public.
// Data is protected by the Firestore and Storage security rules in the console.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaWfHzG7HmtMEFIwrRP5lMG40qOZxzePA",
  authDomain: "nuvarei.firebaseapp.com",
  projectId: "nuvarei",
  storageBucket: "nuvarei.firebasestorage.app",
  messagingSenderId: "513143412379",
  appId: "1:513143412379:web:d617e6e54afe986b51d83e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
