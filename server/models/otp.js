const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  
  name: {
    type: String,
    required: true
  },

  otp: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

async function sendVerificationEmail(email, otp, name) {
  try {
    const mailResponse = await mailSender(
      email,
      "Zaikaa - OTP Verification",
      `
      <h2>Verify Your Email Address</h2>
      <p>Hi ${name},</p>
      <p>Thank you for registering with Zaikaa, your ultimate destination for delicious food! To complete your registration, please use the following OTP (One-Time Password) to verify your email address:</p>
      <p>${otp}</p>
      <p>If you did not request this verification, please ignore this email.</p>
      <p>Thank you,</p>
      <p>The Zaikaa Team</p>
      `
    );

    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

otpSchema.pre("save", async function (next) {
  console.log("New document saved to the database");

  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp, this.name);
  }

  next();
});

module.exports = mongoose.model("OTP", otpSchema);
