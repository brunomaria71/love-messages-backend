import admin from "firebase-admin"; 
import serviceAccount from './credentials.js'; 

admin.initializeApp({ 
  credential: admin.credential.cert(serviceAccount) 
});

const db = admin.firestore();  

export const loveMessagesCol = db.collection('loveMessages'); 


