const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "sakibshaikh4724@gmail.com",
        pass: "rdpk miyr jjfb buwl",
      },
    });

    let info = await transporter.sendMail({
      from: "sakibshaikh4724@gmail.com",
      to: email,
      subject: title,
      html:  body
    });

    console.log("Email info: ", info)
    return info;

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
