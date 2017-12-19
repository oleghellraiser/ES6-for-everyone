let mapAny = (arg, func, toArray) => {
    let result = toArray ? [] : {};

    for (let key in arg) {
        result[key] = func(arg[key])
    }
    return result;
}

export default mapAny;