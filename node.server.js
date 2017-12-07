// 모듈을 추출한다
var http = require('http');
 
// 웹 서버를 생성 및 실행합니다.
http.createServer(function (request, response) {
 
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 응답 헤더를 작성
 
    response.end('<h1>Your winner!</h1>');
    // 응답 본문을 작성
 
}).listen(55555, function () {
 
    console.log('Server running at http://localhost:55555/');
    // 55555번 포트를 사용하여 서버를 실행
});