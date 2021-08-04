const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const { customAlphabet } = require('nanoid')

const Ama = require('./logic/ama');
const sessions = {};

app.post('/', function (req, res) {
    console.log("request received")
    const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);
    const sessionId = nanoid()
    const ownerId = nanoid()
    console.log(sessionId)
    sessions[sessionId] = new Ama();
    console.log("sessions is : ")
    sessions[sessionId].started = true;
    console.log(sessions[sessionId])
    res.status(201).json({ session_Id: sessionId, owner_Id: ownerId })
})

app.post('/join', function (req, res) {
    const sessionIdInput = req.body.session_id.sessionIdInput;
    const userName = req.body.userName.userName;
    console.log(sessions)
    console.log(userName)
    console.log(sessionIdInput)
    const Ama = sessions[sessionIdInput]
    console.log("below this is Ama")
    console.log(Ama)
    console.log("received sessionIdInput: " + sessionIdInput)
    console.log("start status: " + Ama.checkStarted())
    if (Ama != undefined || Ama != null) {
        if (Ama.checkStarted() == true || Ama.checkStarted() == "true") {
            Ama.userName(userName);
            console.log("true start")
            res.status(200).json({ success: true })
        } else {
            console.log("false start")
            res.status(404).json({ success: false })
        }
    } else {
        res.status(404).json({ success: false })
    }
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

app.get('/leaderBoard', function (req, res) {

    const sessionId = req.query.session_id;
    var scoreArr = [];
    var emailArr = [];

    for (var i = 0; i < sessions.length; i++) {
        const keys = keysObject.keys(sessions)// return an array of emails
        const AMA = sessions[keys[i]];//the user details with email as key



    }
})

app.listen(process.env.PORT || 5000, function () {
    console.log('app listening on port 8000');
});

