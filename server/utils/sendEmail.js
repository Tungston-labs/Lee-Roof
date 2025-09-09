import nodemailer from "nodemailer"

const sendMail = async ({ from, to, subject,  html }) => {
  try {
     console.log("",from, to, subject,  html) 
   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,  // <--- allows self-signed cert
  },
});


    const mailOptions = {
      from: from || process.env.EMAIL_USER, 
      to,
      subject,
      
      html, 
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send message.", error };
  }
};


export default sendMail;