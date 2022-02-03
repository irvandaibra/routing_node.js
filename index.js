var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {


  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
    "<center>  <a href=/Home> Home</a>&nbsp;&nbsp;<a href=/About> About</a>&nbsp;&nbsp;<a href=/Profile> Profile</a></center>"
  );
  var url = req.url;

  if (url === '/') {
    res.write(' <center>Welcome to main</center>');
    res.end();
  }
  else if (url === '/Home') {
    fs.readFile('Home.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/Profile') {
    fs.readFile('Profile.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/About') {
    fs.readFile('About.html', function (err, data) {
      res.end(data)
    })
  }
  else {
    res.write('<center>Welcome to main</center>');
  }
}).listen(3030, function () {

  console.log("server start at http://localhost:3030");
});