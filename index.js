import { loveMessagesCol } from "./connectDb"

 const loveMessage = {      
     name: 'Juliet',
     message: "Good Night, Good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.",
 }  

 db.collection('loveMessages').add(loveMessage) 
    .then(doc => console.log('created love message', doc.id))  
    .catch(err => console.error(err))  