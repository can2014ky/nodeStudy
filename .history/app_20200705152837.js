const express = require('express');
const { send } = require('process');

const app = new express();

app.get('/', () => {
    send('hello world !');
})

app.listen(3000, () => {
    console.log('App is running, localhost:3000')
});