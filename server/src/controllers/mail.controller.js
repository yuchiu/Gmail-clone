const mailController = {
  getMailList: async (req, res) => {
    try {
      res.status(200).send({
        mailList: [
          {
            id: "1",
            subject: "travel aboard",
            isImportant: true,
            body:
              "This is my email, and it is super long so that we are forced to cut it short to show it on a row",
            timestamp: Date.now() + 1001
          },
          {
            id: "2",
            subject: "ALOHA WELCOME!",
            viewedAt: Date.now(),
            body:
              "This is my email, and it is super long so that we are forced to cut it short to show it on a row",
            timestamp: Date.now() + 1002
          },
          {
            id: "3",
            subject: "caramel so tasty",
            body:
              "This is my email, and it is super long so that we are forced to cut it short to show it on a row",
            timestamp: Date.now() + 1003
          }
        ]
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "server error"
      });
    }
  }
};

export default mailController;
