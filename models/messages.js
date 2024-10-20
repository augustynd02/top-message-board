const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

const messagesModel = {
    getAll: () => messages,
    submitMessage: message => messages.push(message),
}

module.exports = messagesModel;
