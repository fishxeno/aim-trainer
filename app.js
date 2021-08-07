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
    const AMA = sessions[sessionId]
    console.log("sessions is : ")
    AMA.owner(ownerId);
    AMA.startedTF(true);
    console.log(sessions)
    console.log("AMA is: ")
    console.log(AMA)
    res.status(201).json({ session_Id: sessionId, owner_Id: ownerId })
})

app.post('/join', function (req, res) {
    const sessionIdInput = req.body.session_id.sessionIdInput;
    const userName = req.body.userName.userName;
    console.log(sessions)
    console.log(userName)
    console.log(sessionIdInput)
    const AMA = sessions[sessionIdInput]
    console.log("below this is Ama")
    console.log(AMA)
    console.log("received sessionIdInput: " + sessionIdInput)
    if (typeof AMA === "undefined") {
        res.status(404).json({ success: false })
    } else {
        console.log("ownerId" + AMA.checkOwnerId());
        console.log("start status: " + AMA.checkStarted())
        if (AMA.checkStarted() == true || AMA.checkStarted() == "true") {
            AMA.userNames(userName);
            console.log(userName)
            console.log("true start")
            res.status(200).json({ success: true })
        } else {
            console.log("false start")
            res.status(404).json({ success: false })
        }
    }
})

app.post('/submit', function (req, res) {
    const sessionId = req.body.session_id.sessionId;
    const highScore = req.body.highScore;
    const userName = req.body.username;
    var userId;

    const AMA = sessions[sessionId];
    var userNames = AMA.getUserNames()
    for (var i = 0; i < userNames.length; i++) {
        if (userNames[i] == userName) {
            userId = i;
            break;
        }
    }
    AMA.recordHighScore(highScore, userId)
    console.log(AMA)
    res.status(200).json({ success: true })
});

app.get('/leaderBoard', function (req, res) {

    const sessionId = req.body.session_id.sessionId;
    const AMA = sessions[sessionId]

    for (var i = 0; i < sessions.length; i++) {
        const keys = keysObject.keys(sessions)// return an array of emails
        const AMA = sessions[keys[i]];//the user details with email as key
    }
})

app.listen(process.env.PORT || 5000, function () {
    console.log('app listening on port 8000');
});

