import { loveMessagesCol } from '../../connectDb.js'

 loveMessagesCol.get() 
 .then(snapshot => {
     snapshot.docs.forEach(doc => console.log(doc.data()))
 }) 
 .catch(console.error) 

