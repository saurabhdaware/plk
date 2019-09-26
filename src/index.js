String.prototype.querySelector = function(){
    const result = this
        .trim()
        .replace(/\n/g,"")
        .split(/>/g)
        .map(el =>{

            return {
                innerHTML:el.slice(0,el.indexOf('<')),
                el:el + '>'
            }
        })
    return result;
}