
const path = require("path");
const fs = require("fs");
const usersImagePath = path.join(__dirname, "../../public/img/user-img")
const usersFilePath = path.join(__dirname, "../database/users.json");
// const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const User = {

    getData: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    },
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    findAll: function () {
        return this.getData();
    },
    findByPk: function (id) {
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;
    },

    findByField: function (field, value) {
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser[field] == value);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;