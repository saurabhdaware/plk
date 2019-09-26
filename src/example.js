const dom = require('./index.js');
const html = `<html>
<head>
</head>
<body>
    <a class="cool" href="something">Link1</a>
    <a class="not-cool" href="yeah">COol</a>
</body>
</html>`

console.log(html.querySelector('a.cool'));