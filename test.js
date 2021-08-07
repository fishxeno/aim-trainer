const fs = require('fs');



var testOb = {
    "highScore": { '0': '5', '1': '7' },
    "userName": ['asdf', 'lopiuikj'],
    "started": true,
    "ownerId": 'nN5awN0h1u'
}

function storeSessions(testOb) {
    const data = JSON.stringify(testOb);
    fs.writeFileSync("./sessions.json", data);
}

function returnSessions() {
    return (fs.readFileSync('./sessions.json',
        { encoding: 'utf8', flag: 'r' }))
}

storeSessions(testOb)
const session = returnSessions()
console.log("hello?")
console.log(session)