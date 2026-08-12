// إعدادات الاتصال بقاعدة بيانات Firebase المخصصة لمتجر العبايات
// يرجى استبدال هذه الإعدادات ببيانات مشروع Firebase الجديد الخاص بك من لوحة تحكم Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID_HERE.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID_HERE-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_PROJECT_ID_HERE.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE"
};

// تهيئة Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  window.fbDb = firebase.database();
  console.log("Firebase initialized successfully for Abaya Store!");
} else {
  console.error("Firebase SDK is not loaded. Please make sure script tags are included.");
}
