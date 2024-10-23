const messagesModel = require('../models/messages');

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
            added: new Date()
        })
        res.redirect('/');
    }
}

module.exports = indexController;
