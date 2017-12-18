import { mapAny, composeZ, merge, normalizer, autoCurry } from './src'

let result = mapAny([1, 2, 3], (n) => n + 1, true);
console.log(result);

//===================================

var z = function () {
    return 'yeeeeeeeah';
}

var x = function (f) {
    console.log('1');
    console.log(f());
}

var g = function (f) {
    console.log('2');
    f();
}

var y = function (f) {
    console.log('3');
    f();
}

var f = function (f) {
    console.log('4');
    f();
}

composeZ(f, g, z, x, y);


//===================================

var obj1 = { a: '1', b: '2' };
var obj2 = { b: '5', c: '3' };
result = merge(obj1, obj2);

console.log(result);

//===================================

let input = {
    field: 1,
    obj2: {
        field2: 2,
    },
    field3: 3,
    obj3: {
        obj4: {
            obj5: {},
            field: 4,
        },
    },
}
result = normalizer(input);

console.log(result);

//===================================

var func = (n, m) => n + m;
result = autoCurry(func);
result = autoCurry(result);

console.log(result);