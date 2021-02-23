import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.send({ message: 'Hello world' })
});

app.post('/', (req, res) => {
    return res.send({ message: 'Hello world' })
});

app.listen(3333, () => console.log('Server running on port 3333'));