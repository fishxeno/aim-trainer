const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const { customAlphabet } = require('nanoid')

const Ama = require('../backend/logic/ama');
const sessions = {};

app.post('/', function(req, res) {
    console.log("request received")
    const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);
    const sessionId = nanoid()
    sessions[sessionId] = new Ama();
    res.status(201).json({session_Id: sessionId})
})

app.post('/submit', function (req, res) {
    const sessionId = req.query.session_id;
    const username = req.body.username;
    const email = req.body.email;
    const score = req.body.score;

    const AMA = sessions[sessionId];
    AMA.userName = username;
    AMA.score = score;
    AMA.email = email;
    res.status(201).json(AMA)
});

app.get('/leaderBoard', function(req,res) {

    const sessionId = req.query.session_id;
    var scoreArr = [];
    var emailArr = [];
    
    for (var i = 0; i < sessions.length; i++) {
        const keys = keysObject.keys(sessions)// return an array of emails
        const AMA = sessions[keys[i]];//the user details with email as key



    }
})

app.listen(8000, function () {
    console.log('app listening on port 8000');
});

