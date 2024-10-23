require('../utils/formatDate');
const messagesModel = require('../models/messages');
let currentIndex = 2; // since there are 2 built-in default messages

const indexController = {
    getIndex: (req, res) => {
        res.render('pages/index', { messages: messagesModel.getAll() });
    },
    getNew: (req, res) => {
        res.render('pages/form');
    },
    postNew: (req, res) => {
        messagesModel.submitMessage({
            text: req.body.messageText,
            user: req.body.author,
            added: new Date().formatDate(),
            id: currentIndex++
        })
        console.log(currentIndex)
        res.redirect('/');
    },
    getMessage: (req, res) => {
        res.render('pages/message', { message: messagesModel.find(req.params.id) });
    }
}

module.exports = indexController;
