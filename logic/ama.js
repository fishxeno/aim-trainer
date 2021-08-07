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
    getHighScore() {
        return [this.highScore]
    }
    startedTF(TF) {//true false
        this.started = TF;
        return [this.started];
    }
    recordHighScore(score, userId) {
        const StrScore = "" + score;
        const StrId = "" + userId;//turn into string variables
        
        console.log("strScore is: " + StrScore)
        console.log("StrId: " + StrId);

        this.highScore[StrId] = StrScore; // highScore: {StrId : StrScore, StrId2 : StrScore2....} hopefully
        return [this.highScore];
    }
}