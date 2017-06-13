function wElements(a) {
    var result = [],
        i, n;
    for (i = 0, n = a.length; i < n; i++) {
        result[i] = function() { return a[i]; }
    }
    return result;
}
var wrapped = wElements([1, 2, 3, 4, 5, 6]);
var Fn = wrapped[3];
Fn();
console.log(Fn());


// 객체 메서드 함수 

var hello = function(name) {
    return 'hello' + ' ' + name;

}

console.log(hello('me'));

var obj = {
        hello1: function() {
            return 'bye' + ' ' + this.list;
        },
        list: ['이창호', '송아', '한권']
    }
    // 객체 내 어레이 값으로 어떻게 이동하는 가? 
console.log(obj.hello1());

var obj2 = {
    hello1: obj.hello1,
    list: '지연'
}

console.log(obj2.hello1());
// arguments
function sum() {
    var result = 0;
    console.log(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sum()); // argument.length = 0
console.log(sum(1, 2)); // argument.length = 2

function square(num) {
    // your code here

    var result = num * num;
    return result;
}

console.log(square(34));

// 함수 
var firstChild = function() {
    var _firstChild = null;
    if ('firstElementChild' in Element.prototype) {
        _firstChild = function(el_node) {
            validateElNode(el_node);
            return el_node._firstElementChild;
        }
    } else {
        _firstChild = function(el_node) {
            validateElNode(el_node);
            return el_node.children[0];
        }
    }
}