var url = require('url')

var adr = 'http://www.langensari.com/search.php/sayur+wortel18Daging=sapi';
var q = url.parse(adr, true);

console.log("protocol:" + q.protocol)
console.log("hostname:" + q.hostname)
console.log("pathname:" + q.pathname)
console.log("params:" + q.search)

var qdata = q.query;
console.log(qdata)
