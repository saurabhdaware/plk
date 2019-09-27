
exports.querySelector = (query,html) => {
    // <p>?(.*?)</p>
    const reg = new RegExp(`<${query}>?(.*?)<\/${query}>`,'sg');
    let matches = [];
    let match = reg.exec(html);
    while(match){
        matches.push(match[1]);
        match = reg.exec(html);
    }

    return matches;
}

