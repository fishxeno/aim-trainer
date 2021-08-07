const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const { customAlphabet } = require('nanoid')

const Ama = require('./logic/ama');
const fs = require('fs');

// this will replace calling storeSessions
// const sessionsData = JSON.stringify(sessions);
// storeSessions(sessionsData)

function storeSessions(sessionsObject) {
    const data = JSON.stringify(sessionsObject);
    fs.writeFileSync("./sessions.json", data);
}

function returnSessions() {
    return (fs.readFileSync('./sessions.json',
        { encoding: 'utf8', flag: 'r' }))
}


var sessions = returnSessions();
if (typeof sessions === 'undefined') {
    sessions = {}
}
console.log("below here is sessions")
console.log(sessions)

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
    storeSessions(sessions)
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
            storeSessions(sessions)
            res.status(200).json({ success: true })
        } else {
            console.log("false start")
            res.status(404).json({ success: false })
        }
    }
})

app.post('/submit', function (req, res) {
    const sessionId = req.body.session_id.sessionId;
    const highScore = req.body.highScore.highScore;
    const userName = req.body.userName.userName;
    var userId;

    const AMA = sessions[sessionId];
    var userNames = AMA.getUserNames()
    console.log("below this is usernames")
    console.log(userNames)
    console.log(userName)
    for (var i = 0; i < userNames[0].length; i++) {
        if (userNames[0][i] == userName) {
            console.log("these 2 should be equal")
            console.log(userNames[0][i])
            console.log(userName)
            userId = i;
            console.log(userId)
            break;
        }
    }
    AMA.recordHighScore(highScore, userId)
    console.log(AMA)
    storeSessions(sessions)
    var test = returnSessions()
    console.log("below here is testing json file")
    console.log(test)
    res.status(200).json({ success: true })
});

app.post('/leaderBoard', function (req, res) {
    const sessionId = req.body.session_id.sessionId;
    const AMA = sessions[sessionId]
    storeSessions(sessions)
    res.status(200).json({ AMAttribute: AMA })
})

app.listen(process.env.PORT || 5000, function () {
    console.log('app listening on port 8000');
});

