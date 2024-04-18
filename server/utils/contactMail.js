const nodemailer = require("nodemailer");

const contactMail = async (email, name, message) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
    });

    let info = await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: "Zaikaa Contact Form Submission",
      html: message
    });

    console.log("Email info: ", info)
    return info;

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = contactMail;