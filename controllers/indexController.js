const messagesModel = require('../models/messages');

const indexController = {
    currentIndex: 2, // since there are 2 built-in default messages
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
            added: new Date(),
            id: currentIndex
        })
        res.redirect('/');
    }
}

module.exports = indexController;
