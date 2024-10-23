require('../utils/formatDate');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date().formatDate(),
      id: 0
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().formatDate(),
      id: 1
    }
];

const messagesModel = {
    getAll: () => messages,
    submitMessage: message => messages.push(message),
}

module.exports = messagesModel;
