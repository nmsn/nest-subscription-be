import * as nodemailer from 'nodemailer';

export const sendMail = async (option: object | undefined) => {
  const transporter = nodemailer.createTransport({
    service: '163',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const defaultOption = {
      from: '"NMSN" <18268007796@163.com>', // sender address
      to: '136696700@qq.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    };

  // send mail with defined transport object
  const info = await transporter.sendMail(option || defaultOption);

};
