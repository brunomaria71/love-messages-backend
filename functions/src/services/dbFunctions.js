import { loveMessagesCol } from "../gateway/connectDb.js"


 const loveMessage = {      
     name: 'Selena',
     message: "I love you like a love song",
 }  

 loveMessagesCol.add(loveMessage) 
    .then(doc => console.log(doc.id))  
    .catch(err => console.error(err))  



loveMessagesCol.doc('FMMaOvMTFXT2FTyT1l5A').delete()
 .then(res => console.log('success!'))
 .catch(err => console.error('Error deleting', err))



 loveMessagesCol.get() 
 .then(snapshot => {
     snapshot.docs.forEach(doc => console.log(doc.data()))
 }) 
 .catch(console.error) 