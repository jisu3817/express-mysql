"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        let userId = "";
        if (req.cookies['loginId'] !== undefined) {
            console.log("로그인 정보있음!")
            userId = req.cookies['loginId'];
        }
        res.render('home/login', {userId: userId});
    },
    welcome: (req, res) => {
        const userId = req.query.userId;
        console.log(userId);
        res.render('home/welcome', {userId: userId});
    },
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const client = req.body;
        const response = await user.login();
        
        if (client.rememberId === "checked") {
            res.cookie('loginId', client.id);
            console.log("아이디 저장!");
            response.userId = client.id;
        };
        console.log(response);
        return res.status(200).json(response);
    }
}

module.exports = {
    output, 
    process
};