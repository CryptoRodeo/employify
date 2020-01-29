const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = process.env.port || 8080;

let git = require("./handle_github.js");

//sends the cross origin request headers
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


//requests go through here as to avoid the issues with cross origin requests if sent from the front end.
app.get('/api', (req,res) => {
    git.handle_git(res, `https://jobs.github.com/positions.json?description=${req.query.description}&location=${req.query.location}`);
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});