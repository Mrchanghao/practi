function makeCounter(init) {
    var count = init;

    function increase() {
        count++;
        console.log(count);
    }
    return increase;
}

var counter1 = makeCounter(0);
var counter2 = makeCounter(10);
counter1();
counter2();

//function closure
function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}


var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

// scope chain 

var globalColor = 'red';

function foo() {
    var fooColor = 'blue';

    function bar() {
        var barColor = 'yellow';

        console.log(barColor);
        console.log(fooColor);
        console.log(globalColor);
    }
    bar();
}
foo();

// 호이스팅 
function foo() {
    a = 2;
    var a;
    console.log(a);
}
foo();