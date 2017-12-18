var autoCarry = (func) => {
    if (func && func.length === 1) {
        let result = func.call(this, Math.floor(Math.random()*100));
        return result;
    } else {
        let carriedFunc = func.bind(this, Math.floor(Math.random()*100));
        return carriedFunc;
    }
};

export default autoCarry;