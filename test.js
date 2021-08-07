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
console.log("below this")
console.log(sessionss)