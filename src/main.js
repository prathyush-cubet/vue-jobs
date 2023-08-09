import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyAme9wAaK967P5DICdSQeilC_zbuCsw6zA",
    authDomain: "cubet-vue-job.firebaseapp.com",
    databaseURL: "https://cubet-vue-job-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cubet-vue-job",
    storageBucket: "cubet-vue-job.appspot.com",
    messagingSenderId: "323883278659",
    appId: "1:323883278659:web:1abec411b11e1598010ff6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
createApp(App).use(store).mount('#app')
