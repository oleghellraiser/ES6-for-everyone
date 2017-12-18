let normalizer = (input, shouldNotOverwrite) => {
    let output = {};
    let rec = (obj, object_key) => {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object'
                && Object.keys(obj[key]).length > 0) {
                rec(obj[key], key);
            } else {
                if (shouldNotOverwrite) {
                    output[`${object_key ? object_key : ''}_${key}`] = obj[key];
                } else {
                    output[key] = obj[key];
                }
            }
        }
    };

    rec(input);

    return output;
};

export default normalizer;