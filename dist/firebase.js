"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyDUY2SMKxisZ2A6W5ejYKQ__9ExTftx2Og",
    authDomain: "repair-dekho.firebaseapp.com",
    projectId: "repair-dekho",
    storageBucket: "repair-dekho.appspot.com",
    messagingSenderId: "622778499235",
    appId: "1:622778499235:web:50185738ec3ea2b024ff16",
    measurementId: "G-QRQGHYF01C"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.storage = (0, storage_1.getStorage)(app);
//# sourceMappingURL=firebase.js.map