const functions = require('firebase-functions');
const express = require('express');
const path = require('path');


const app = express();

//とりあえずスタティックの場所指定
app.use(express.static(__dirname + '/react-app/src/'));

//それ以外の時もindex.htmlへ
app.all('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'react-app/src/index.html'));
})

exports.app = functions.https.onRequest(app);