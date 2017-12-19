let composeZ = (...params) => {
    let initialArray = [];
    let result;

    while (params.length > 0) {
        initialArray.push(params.shift());
        let rItem = params.pop();
        rItem && initialArray.push(rItem);
    }
    initialArray.reverse();

    while (initialArray.length > 0) {
        let lItem = initialArray.shift();
        result = result && lItem.bind(this, result) || lItem
    }

    return result && result();
}

export default composeZ;