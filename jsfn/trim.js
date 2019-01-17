function trim(str) {
    if(typeof str !== "string") return null;
    return str.replace(/^(\s*)|(\s*)$/g, '');
}