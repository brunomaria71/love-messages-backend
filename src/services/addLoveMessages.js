import { loveMessagesCol } from "../gateway/connectDb.js"

 const loveMessage = {      
     name: 'Selena',
     message: "I love you like a love song",
 }  

 loveMessagesCol.add(loveMessage) 
    .then(doc => console.log(doc.id))  
    .catch(err => console.error(err))  