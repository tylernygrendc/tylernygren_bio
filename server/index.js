const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('main', { title: 'Bio'})
})
exports.app = functions.https.onRequest(app);