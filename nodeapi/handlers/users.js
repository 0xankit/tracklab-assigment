const db = require('../models');
const sendMessage = require('../services/sender');

//rabbitMQ queue name
const queue = 'users';

exports.setUser = async function (req, res, next) {
    try {
        let newUser = await db.User.create(req.body);

        //send message to rabbitMQ
        sendMessage(queue, newUser.id);

        //return only id that's why i changed it
        newUser = { id: newUser.id };

        return res.status(200).json(newUser);
    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Sorry, that username and/or email is taken';
        }
        return next({
            status: 400,
            message: err.message
        });
    }
};

exports.getUser = async function (req, res, next) {
    const id = req.params.id;
    try {
        let foundUser = await db.User.findOne({ _id: id });

        //if founduser is null then return as it is otherwise 
        //return only name and email
        if (foundUser) {
            foundUser = {
                name: foundUser.name,
                email: foundUser.email
            };
        }
        return res.status(200).json(foundUser);
    } catch (err) {
        return next(err);
    }
};
