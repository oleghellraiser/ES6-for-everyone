let merge = (...params) => {
    let obj3 = {};
    for (let item of params){
        for (let key in item) {
            obj3[key] = item[key];
        }
    }
    return obj3;
}

export default merge;