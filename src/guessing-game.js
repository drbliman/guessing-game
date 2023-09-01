class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.a = this.max - this.min;
        this.a = Math.floor(this.a / 2)
        this.a = this.max - this.a;
        this.middle = this.a;
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
