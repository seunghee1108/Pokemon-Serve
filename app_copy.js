const http = require('http');

const server = http.createServer(function(request, response){
  console.log(request);
  console.log(typeof(response));

  response.writeHead(200, {"content-Type" : "text/html"});
  // 200 : 정상 작동
  let doc = `<html> <head> </head> <body> <h1> hello </h1> </body> </html>`

    response.end(doc);
    // document를 띄우고 종료한다. 
});

server.listen(1234);
  // localhost:1234


  // client가 문을 두드리면 무엇을? 요청을 받게 됨. typeof 찍어주고 response 해주기. 