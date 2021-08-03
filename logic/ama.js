module.exports = class {
    constructor() {
        this.email = "";
        this.highScore = "";
        this.userName = "";
    }
    email(email) {
        this.email = email;
        return [this.email];
    }
    highScore(highScore) {
        this.highScore = highScore;
        return [this.ownerId];
    }
    userName(userName) {
        this.userName = userName;
        return [this.userName];
    }

}