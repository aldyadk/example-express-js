const http = require('http')

const app = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Halo dunia!');
    response.end();
})

.listen(8000, function () {
    console.log('listening on port 8000')
})