import { transporter } from "./email-config.js"; 

export const sendVerificationCode = async(email, varificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"Arpit Coder" <arpitsrivastava8863.9h@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify Your Email", // Subject line
            text: "Verify Your Email", // plain text body
            html: varificationCode, // html body
          });
          console.log('OTP Send');
          
    } catch (error) {
        console.log("Unable to send OTP")
    }
}