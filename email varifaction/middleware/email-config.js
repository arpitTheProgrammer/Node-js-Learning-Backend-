import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "arpitsrivastava8863.9h@gmail.com",
      pass: "nxyx qfvp egaj dxol",
    },
  });

export const sendEmail = async() => {
    try {
        // const info = await transporter.sendMail({
        //     from: '"Arpit Coder" <arpitsrivastava8863.9h@gmail.com>', // sender address
        //     to: "arpit.sriv16@gmail.com", // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        //   });

          console.log(info)
    } catch (error) {
        console.log(error)
    }
}

sendEmail()