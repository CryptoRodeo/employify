const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.port || 8080;

//sends the cross origin request headers
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


//requests go through here as to avoid the issues with cross origin requests if sent from the front end.

app.get('/api', (req,res) => {
    axios.get(`https://jobs.github.com/positions.json?description=${req.query.description}&location=${req.query.location}`)
    .then(response => res.send(response.data)) //send this data to the react front end server
    .catch((err) => console.log(err.data));
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});