import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUY2SMKxisZ2A6W5ejYKQ__9ExTftx2Og",
  authDomain: "repair-dekho.firebaseapp.com",
  projectId: "repair-dekho",
  storageBucket: "repair-dekho.appspot.com",
  messagingSenderId: "622778499235",
  appId: "1:622778499235:web:50185738ec3ea2b024ff16",
  measurementId: "G-QRQGHYF01C"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);