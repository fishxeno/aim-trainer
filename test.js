// const fs = require('fs');
// fs.readFile('sessions.json', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }

//     // parse JSON object
//     const sessions = JSON.parse(data.toString());

//     // print JSON object
//     console.log(sessions);
// });


const fs = require('fs');

function storeSessions(data) {
    const sessions = JSON.stringify(data);

    // write JSON string to a file
    fs.writeFile('sessions.json', sessions, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}

function returnSessions() {
    fs.readFile('sessions.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }

        // parse JSON object
        const sessions = JSON.parse(data.toString());

        // print JSON object
        console.log(sessions);
        return sessions
    });
}


var sessionss = returnSessions();
if (typeof sessionss=== 'undefined') {
    console.log("test")
    sessionss = {}
}

var testOb = {
    highScore: { '0': '5', '1': '7' },
    userName: [ 'asdf', 'lopiuikj' ],
    started: true,
    ownerId: 'nN5awN0h1u'
}

storeSessions(testOb)

sessionss = returnSessions();
if (typeof sessionss=== 'undefined') {
    console.log("test")
    sessionss = {}
}

console.log("below this")
console.log(sessionss)