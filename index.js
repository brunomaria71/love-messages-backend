import express from "express";
import cors from 'cors';
import functions from 'firebase-functions';

const app = express();
app.use(cors());
app.use(express.json());


export const api = functions.https.onRequest(app);