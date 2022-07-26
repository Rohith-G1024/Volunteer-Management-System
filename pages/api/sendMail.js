export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "bot.baselpractioner@gmail.com",
      pass: "xbkdjcpcpjvmblva", //PASSWORD,
    },
    secure: true,
  });
  const mailList = req.body.mailList;
  const subject = req.body.subject;
  const text = req.body.text;

  const mailData = {
    from: "bot.baselpractioner@gmail.com",
    to: mailList,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(500).json({ status: "error" });
    } else {
      console.log(info.response);
      return res
        .status(200)
        .json({ status: "Message Sent", mailData: mailData });
    }
  });
}
