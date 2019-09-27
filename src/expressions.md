# Help me building Regular expressions by adding here.

### Pick tag, class and id name:
```js
let attrGetter = /(\w*)?\.?(\w*)#?(\w*)(?:\[(\w*)=["'](\w*)["']\])?/gi;
const [queryString,tagName,className,idName, attr, attrval] = attrGetter.exec(query);
```

### Fetch HTML
-  **Match by tag ('tag')**
```js
/<div>?(.*?)<\/div>/sg
``` 

- **Match by attribute (class, id, any fukin thing) - ('tag.class' | 'tag#id' | 'tag[attribute=value]')**
```js
/<div.*?atrribute="value".*?>(.*?)<\/div>/sg
```
