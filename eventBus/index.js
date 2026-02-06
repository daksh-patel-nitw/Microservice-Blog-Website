const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const event = req.body;
    axios.post("http://localhost:4000/events", event).catch((err) => {
        console.log("4000: ",err.message);
    });
    axios.post("http://localhost:4001/events", event).catch((err) => {
        console.log("4001: ",err.message);
    });
    axios.post("http://localhost:4002/events", event).catch((err) => {
        console.log("4002: ",err.message);
    });
    axios.post("http://localhost:4003/events", event).catch((err) => {
        console.log("4003: ",err.message);
    });
    res.send({ status: "OK" });
})

app.listen(4005, () => {
    console.log("listening on 4005.")
});