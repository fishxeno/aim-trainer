module.exports = class {
    constructor() {
        this.highScore = "";
        this.userName = "";
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
}