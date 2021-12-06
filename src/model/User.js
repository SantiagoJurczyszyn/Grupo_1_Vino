
const path = require("path");
const fs = require("fs");
const usersImagePath = path.join(__dirname, "../../public/img/user-img")
const usersFilePath = path.join(__dirname, "../database/users.json");
// const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const User = {
   
   getData: function () {
       return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
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
   } 
}

module.exports = User;