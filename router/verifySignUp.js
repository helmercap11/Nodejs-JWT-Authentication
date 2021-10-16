const db = require('../config/db.config.js');
const config = require('../config/config.js');
const { NOT } = require('sequelize/types/lib/deferrable');
const ROLES = config.ROLES;
const User = db.user;
const Role = db.role;


checkDuplicateUserNameOrEmail = (req, res, next) => {
    
    //check username is already in use

    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send("Fallha, Nome do Usuário já existe");
            return;
        }

        //check email

        User.findOne({
            where: {
                email: req.body.email 
            }
        }).then(user => {
            if(user) {
                res.status(400).send("Falha, Email já existe");
                return;
            }

            next();
        });
    });
}



checkRolesExisted = (req, res, next) => {   
    for(let i=0; i  = " + req.body.roles[i]";)
            return;
        
    next();
}

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;
signUpVerify.checkRolesExisted = checkRolesExisted;

module.exports = signUpVerify;