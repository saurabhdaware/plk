# Pluck (plk)
Query over your scrapped html with native js query syntax simply using `plk.byQuery('div.content')`

Umm.. You're too early **D:** 


**This is not ready to be used yet. You can contact me on my [twitter@saurabhcodes](https://twitter.com/saurabhcodes) for any help with contributions.**

## Usage
```js
plk.byQuery(cssQuery, htmlContent);
```

## Example
```js
const plk = require('plk');
const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <div class="content">
      <div class="blue">
        <p>This is some paragraph inside div tag.</p>
      </div>
      <div class="green">
        <p>This is some paragraph inside mewdiv tag.</p>
      </div>
    </div>
  </body>
</html>`;

console.log(plk.byQuery('p',html));
```

Outputs:
```js
[ 'This is some paragraph inside div tag.', 'This is some paragraph inside mewdiv tag.' ]
```