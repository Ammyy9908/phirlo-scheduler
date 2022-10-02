const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_KEY);

const dailyAlert = async (SLOT) => {
  const msg = {
    to: 'team@phirlo.in', // Change to your recipient
    from: "sb78639@gmail.com", // Change to your verified sender
    
    subject: "Phirlo Scheduler Alert",
    text: `
    Hi
    Phirlo You got this email from your daily schedular
    `,
    html: `
    <p>Hi</p>
    <p>Phirlo You got this message from your schedular which is scheduled for ${SLOT}</p>
    
    `,
  };
  try {
    let is_sent = await sgMail.send(msg);
    return is_sent;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = dailyAlert;