import * as nodemailer from 'nodemailer';
import * as ejs from 'ejs';
import mailTemp from './mailTemp';

export const sendMail = async (content?: object) => {
  const transporter = nodemailer.createTransport({
    service: '163',
    auth: {
      user: process.env.EMAIL_ADDRESS, // 邮箱账号
      pass: process.env.EMAIL_PASSWORD, // 邮箱密码或授权码
    },
  });

  const temp = ejs.render(mailTemp, {
    items: [
      {
        title: '测试标题',
        content: '阿萨大阿达阿达阿达啊大宋的',
        date: '2020-02-15',
        link: 'https://www.baidu.com/',
      },
      {
        title: '测试标题2',
        content: '昂啥阿萨大阿萨大阿达阿达阿萨大阿萨大阿达',
        date: '2020-02-15',
        link: 'https://www.baidu.com/',
      },
    ],
  });

  const defaults = {
    from: `"NMSN" <${process.env.EMAIL_ADDRESS}>`, // sender address
    to: '136696700@qq.com', // list of receivers
    subject: '测试标题', // Subject line 标题
    text: '测试文本', // plain text body
    html: temp, // html body
  };

  // send mail with defined transport object
  const info = await transporter.sendMail(content || defaults);
};
