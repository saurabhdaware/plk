
exports.pluckByQuery = (query,html) => {
    // <p>?(.*?)</p>
    let attrGetter = /(\w*)?\.?(\w*)#?(\w*)(?:\[(\w*)=["']?(\w*)["']?\])?/gi;
    let [queryString,tagName,className,idName, attr, attrval] = attrGetter.exec(query);

    let htmlMatcher;
    if(!className && !idName && !attr && tagName){
        htmlMatcher = new RegExp(`<${tagName}>?(.*?)<\/${tagName}>`,'sg');
    }else{
        if(className){
            attr = 'class';
            attrval = className;
        }else if(idName){
            attr = 'id';
            attrval = idName;
        }

        htmlMatcher = new RegExp(`<div.*?${attr}="${attrval}".*?>(.*?)<\/div>`,'sg');
    }

    let matches = [];
    let match = htmlMatcher.exec(html);
    
    while(match){
        matches.push(match[1]);
        match = htmlMatcher.exec(html);
    }

    return matches;
    // return 1;
}

