const express = require("express");
const axios = require("axios");

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Server is running. Try 'say' endpoint with keyword parameter");
})

app.get('/say', (req, res) => {
    axios.get("https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-e98ebf3d-ed43-4d3b-9da3-2c7e725eed96/default/assignment09?keyword=" + req.query.keyword)
        .then(response => res.send(response.data))
        .catch(err => res.status(500).send(err))
});

app.listen(port, () => {
    console.log("Server running on port: ", port);
});
