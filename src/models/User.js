"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
    login() {
        const client = this.body;
        const user = UserStorage.getUsers(); 

        if (user) {
            if (user.id.includes(client.id) && user.psword.includes(client.psword)) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    } 
}

module.exports = User;