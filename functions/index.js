import express from "express";
import cors from 'cors';
import functions from 'firebase-functions';
import { addLoveMessage, deleteLoveMessage, getAllLoveMessages } from "./src/services/loveMessages.services.js";

const app = express();

app.use(cors());
app.use(express.json());


app.post('/loveMessage', addLoveMessage);
app.get('/loveMessages', getAllLoveMessages);
app.get("/deleteLoveMessage", deleteLoveMessage);


app.get('/test', (req, res) => {
    res.send('This is actually working!');
  });


export const api = functions.https.onRequest(app);