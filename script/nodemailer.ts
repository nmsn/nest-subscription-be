import * as nodemailer from 'nodemailer';

export const sendMail = async (content?: object) => {
  const transporter = nodemailer.createTransport({
    service: '163',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const defaults = {
      from: '"NMSN" <18268007796@163.com>', // sender address
      to: '136696700@qq.com', // list of receivers
      subject: '测试标题', // Subject line 标题
      text: '测试文本', // plain text body
      html: '<b>测试html</b>', // html body
    };

  // send mail with defined transport object
  const info = await transporter.sendMail(content || defaults);

};
