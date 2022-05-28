import { loveMessagesCol } from "../gateway/connectDb.js";

export const addLoveMessage = async (req, res) => {
  if (!req.body.name || !req.body.message) {
    response.status(401).send("Invalid request");
    return;
  }
  const newloveMessage = {
    name: req.body.name,
    message: req.body.message,
  };
  try {
    const doc = await loveMessagesCol.add(loveMessage);
    res.status(201).send("loveMessage created " + doc.id);
  } catch (err) {
    res.status(500).send(err);
  }
}; 

export const getAllLoveMessages = async (req, res) => {
  try {
    const snapshot = await loveMessagesCol.get();
    const loveMessagesArray = snapshot.docs.map(doc => {
      let loveMessage = doc.data();
      loveMessage.id = doc.id;
      return loveMessage;
    });
    res.send(loveMessagesArray);
  } catch (err) {
    res.status(500).send(err);
  }
};

 export function deleteLoveMessage(req, res) {
  const { loveMessageId } = req.params;
  if(!loveMessageId) {
    res.status(401).send('Invalid request');
    return;
  }
  loveMessagesCol.doc(loveMessageId).delete()
    .then(() => {
      res.send('Love Message deleted.');
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

