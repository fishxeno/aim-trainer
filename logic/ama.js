module.exports = class {
    constructor() {
        this.highScore = {};
        this.userName = [];
        this.started = false;
        this.ownerId = "";
    }
    owner(ownerId) {
        this.ownerId = ownerId;
        return [this.ownerId];
    }
    checkOwnerId() {
        return [this.ownerId]
    }
    checkStarted() {
        return [this.started]
    }
    highScore(highScore) {
        this.highScore = highScore;
        return [this.highScore];
    }
    userName(userName) {
        this.userName = userName;
        return [this.userName];
    }
    startedTF(TF) {//true false
        this.started = TF;
        return [this.started];
    }
    highScore(text,id) {
        //id is id of username
        const strID = "" + id;//turns it into str
        if (!(strID in this.highScore)) {//
            this.highScore[strID] = [];
        }
        this["highScore"][strID].push(text);
        return [this.highScore];
    }
}