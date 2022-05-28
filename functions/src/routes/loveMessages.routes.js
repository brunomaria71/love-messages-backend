import { getAllLoveMessages } from '../services/loveMessages.services';

app.get('/test', (req,res) => {
    res.send('Wow I cannot believe this works!😱');
});

app.get('/loveMessages', getAllLoveMessages) 


