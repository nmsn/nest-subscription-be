const mail = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NMSN</title>
  </head>
  <body style="width: 100%;margin:0 auto;padding:0;background-color: #f5f5f5;">
    <div style="width: 600px;margin:16px auto;padding: 24px;background-color: #fff;">
      <header>
        <h2 style="margin: 0;margin-bottom: 24px;padding: 0;font-weight: bold;">今日推送</h2>
      </header>
      <content>
      <% for(let i=0; i < items.length; i++){ %>
        <hr style="background-color: #e0e0e0;;border: 0;width: 100%;height: 1px;"/>
        <div>
          <a href="<%= items[i].link %>" style="display: block;font-weight: bold;font-size: 14px;line-height: 2;text-decoration: none;margin: 6px 0;color:#2f3030;"><%= items[i].title %></a>
          <div style="font-size: 13px;color: #5f6060;line-height: 1.5;padding-bottom: 8px;"><%= items[i].content %></div>
        </div>
        <% } %>
      <hr style="background-color: #e0e0e0;;border: 0;width: 100%;height: 1px;"/>
      </content>
      <footer style="font-size: 12px;text-align: center;line-height: 2;color: #5f6060;">Copyright © 2020-present NMSN</footer>
    </div>
  </body>
</html>
`;

export default mail;
