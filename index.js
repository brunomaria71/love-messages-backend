import express from "express";
import cors fom 'cors';

const app = express();
app.use(cors());
app.use(express.json());



app.listen(5050, () => {
    console.log('Listening...');
});