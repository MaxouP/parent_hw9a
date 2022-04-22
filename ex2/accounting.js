module.exports = class Account {
	constructor(name) {
		this.name = name;
	}

	credit(c) {
		this.balance = c;
	}

	describe() {
		return `owner: ${this.name}, balance: ${this.balance}`;
	}
};
