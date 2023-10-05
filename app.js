const http = require('http');
const server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});
  if(request.url === "/"){
    let doc = '<!DOCTYPE html> <head> <meta charset="UTF-8"> </head> <body> <a href = "http://localhost:1234/sub"> 서브로이동하기 </a> </body> </html>'
    response.end(doc);
  }
  // url 
  if(request.url === "/sub"){
    let docTwo = '<!DOCTYPE html> <head> <meta charset="UTF-8"> </head> <body> <a href = "http://localhost:1234/"> 메인으로이동하기 </a> </body> </html>'
    response.end(docTwo);
  }
});
server.listen(1234);