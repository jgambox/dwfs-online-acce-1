const http = require('http');
const fs = require('fs');
// const webpage = require('index.html')

let bods = '';
fs.readFile('index.html', 'utf8' , (err, webpage) => {
   if (err) {
      console.error(err)
      return
   }
   bods = webpage;
})

http.createServer(function (req, res){
   res.writeHead(200, {'Content-type': 'text/html'});
   res.write(bods);
   res.end();
}).listen(3030);