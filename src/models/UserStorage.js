const  db = require("../config/db");

class userStorage {
    static getUsers(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
                if (err) reject(err);
                console.log(data);
                resolve(data[0]);
            })
        })
    }
}

module.exports = userStorage;