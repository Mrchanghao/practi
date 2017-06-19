var type = function(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
console.log('type:', type(123));

var isType = function(data, kind) {
    validateError(kind, '!string', '2번째 전달인자는 문자열이여야 합니다');
    return type(data) === kind;
}
console.log(isType(!null, Boolean));

var validateError = function(data, kind, error_message) {
    data = type(data);
    if (kind.indexof('!') === 0) {
        if (data !== kind.slice(1)) { throw error_message || '두 값이 다르기에 오류 입니다.' }
    } else {
        if (data === kind) { throw error_message || '두 값은 동일하기에 오류입니다'; }
    }
    return '오류는 발생하지 않았습니다'

}

function randomNumber(n) {
    n = n || 2;
    validateError(n, '!number', '숫자값을 전달해 주세요');
    return Math.floor(Math.random() * n);
}

var randomMinMax = function(min, max) {
    validateError(min, number, '숫자주세요');
    validateError(max, number, '숫자주세요');
    max = max - min;
    return Math.round(Math.random() * max) + min;
}

var randomRange = function(n1, n2) {
    var min, max;
    min = Math.min(n1, n2);
    max = Math.max(n1, n2);
    return randomMinMax(min, max);
};

var isNumber = function(data) {
    return isType(data, 'number') && !Number.isNaN(data);
}

var isString = function(data) {
    return isType(data, 'string');
}

var isBoolean = function(data) {
    return isType(data, 'boolean');
}

var isfunction = function(data) {
    return isType(data, 'function');
}

var isObject = function(data) {
    return isType(data, 'object');
}

var isArray = function(data) {
    return isType(data, 'array')
}

var makeArray = function(o) {
    if (!('length' in o)) { return []; }
    return Array.prototype.slice.call(o);
}