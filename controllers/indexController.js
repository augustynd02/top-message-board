const messagesModel = require('../models/messages');

const indexController = {
    getIndex: (req, res) => {
        res.render('index', { messages: messagesModel.getAll() });
    }
}

module.exports = indexController;
