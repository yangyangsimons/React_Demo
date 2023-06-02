// 1. import express framework
const express = require('express');

//create application object
const app = express();

// 3. path rules
// default/index webpage
app.get('/',(request, response) => {
    response.send("HELLO EXPRESS");
});
// server page
app.get('/server',(request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send("HELLO Ajax");
});

// post method page
app.post('/server', (request,response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    console.log(request.body);
    response.send("hahaha");
})
// 4.listen to the port
app.listen(8000, () => {
    console.log("server start, 8000 port listening...")
})