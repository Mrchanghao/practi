console.log(asdf);
console.log(qwer);
console.log(zxcv);
var asdf = 'asdf';
var qwer = function() {
    console.log(111);
};

function zxcv() {
    console.log(456);
};

var arr = [1.56, 500, 66049, 44, 22, 46, 77, 236788, 4367093049360];
console.log(arr.sort());

function compare(a, b) {
    return a - b;
}
console.log(arr.sort(compare));

//mean callback function 
function mean(val, callback) {
    var sum = 0;
    for (var i = 0, max = val.length; i < max; i++) {
        if (typeof callback === 'function') {
            sum += callback(val[i]);
        } else {
            sum += val[i];
        }
        return sum / max;
    }

}

function color(rgb) {
    var colors = ['r', 'g', 'b'];
    for (var i = 0, max = colors.lengths; i < max; i++) {
        console.log(color[i]);
    }
}

var superman = {
    name: 'Superman',
    'real name': 'Clark',
    height: 75,
    weight: 83,
    age: 34
};
superman.fly = function() {
    return 'up and away!'
};
// 객체 속성값 확인 
for (var i in superman) {
    if (superman.hasOwnProperty(i)) {
        console.log(i + ': ' + superman[i]);
    }
}
superman.city = "Gotham";
superman['real name'] = 'ChangHao';
// object as parameters to functions 
function greet(options) {
    options = options || {};
}

// 반복문 연습 
//별표 출력 
// 1.단계 for(var i = 0; i<5; i++){
//     document.write('*');   //하나씩 다섯개 출력 
// }
//2. 단계 
for (var i = 0; i < 5; i++) {
    var count = i + 1;
    var result = '';
    for (var m = 0; m <= i; m++) {
        result += '*';
    }
    document.write(result, '<br>');
}

//거꾸로 출력 
for (var i = 5; i > 0; i--) {
    var result = '';

    for (var m = 0; m < i; m++) {
        result += '*'
    }
    document.write(result, '<br>')
};

// 다중 반복문 
var data = [232, 4404040, 5959595959, 959494922, 4929292929]
for (var i = 0, l = data.length; i < 5; i++) {
    result += data[i];
}
console.log(result);