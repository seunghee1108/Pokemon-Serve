const http = require('http');

const server = http.createServer(function(request, response){
  // http 서버를 만든다. 매개변수:request,reponse
  console.log(request);
  console.log(typeof(response));

  response.writeHead(200, {"content-Type" : "text/html"});
  // 200 : 성공적으로 수행되었음, content-type을 html로 하겠다. 
  let doc = `<html> <head> </head> <body> <h1> hello </h1> </body> </html>`

    response.end(doc);
    // doc을 띄우고 끝낸다. 
});

server.listen(1234);
  // 서버가 구동되면 listen 1234
  // client가 문을 두들기면 뭘? 요청을 받게 된다면 typeof 찍어주고
  // 응답처리 해주세요.