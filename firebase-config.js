// إعدادات الاتصال بقاعدة بيانات Firebase المخصصة لمتجر العبايات
// يرجى استبدال هذه الإعدادات ببيانات مشروع Firebase الجديد الخاص بك من لوحة تحكم Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyB_8kYwHjEF1oJn-zADngAMCqj03Zx8GtE",
  authDomain: "abaya-store-b8841.firebaseapp.com",
  databaseURL: "https://abaya-store-b8841-default-rtdb.firebaseio.com",
  projectId: "abaya-store-b8841",
  storageBucket: "abaya-store-b8841.firebasestorage.app",
  messagingSenderId: "175771404108",
  appId: "1:175771404108:web:b9fd0f3632beb9cbd8f1e9"
};

// تهيئة Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  window.fbDb = firebase.database();
  console.log("Firebase initialized successfully for Abaya Store!");
} else {
  console.error("Firebase SDK is not loaded. Please make sure script tags are included.");
}
