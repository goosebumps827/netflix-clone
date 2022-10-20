import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyB-RP-bdSPcJVcUB9gDny0l_bR1Dq01TTk ",
    authDomain: "netflix-12aee.firebaseapp.com",
    projectId: "netflix-12aee",
    storageBucket: "netflix-12aee.appspot.com",
    messagingSenderId: "223857544034",
    appId: "1:223857544034:web:379d3286a6565a886a7a3b"
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
seedDatabase(firebase);

export { firebase };