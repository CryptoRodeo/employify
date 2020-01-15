const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//used for testing
app.get('/api',function(req,res){
    axios.get(`https://jobs.github.com/positions.json?description=python&location=new+york`)
    .then(resp => res.send(resp.data)) //send this data to the react front end server
});

app.get('/api/:filters', (req,res) => {
    const filters = JSON.parse(req.params.filters);
    axios.get(`https://jobs.github.com/positions.json?description=${filters.description}&location=${filters.location}`)
    .then(response => res.send(response.data)) //send this data to the react front end server
    .catch((err) => console.log(err.data));
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});