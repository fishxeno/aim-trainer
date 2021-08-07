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
    userNames(userName) {
        this.userName.push(userName)
        return [this.userName];
    }
    getUserNames() {
        return [this.userName];
    }
    startedTF(TF) {//true false
        this.started = TF;
        return [this.started];
    }
    highScore(score ,userId) {
        const StrScore = "" + score;
        const strId = "" + userId;//turns it into str
        if (!(strId in this.highScore)) {//if userid don't exist in the current highScore object array
            this.highScore[strId] = [];
        }
        this["highScore"][strId].push(StrScore);
        return [this.highScore];
    }
}