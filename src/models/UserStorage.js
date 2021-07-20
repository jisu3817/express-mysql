class userStorage {
    static #users = {
        id: ["김지수", "지수", "jisu"],
        psword: ["1234", "123", "12345"],
    };

    static getUsers() {
        return this.#users;
    }
}

module.exports = userStorage;