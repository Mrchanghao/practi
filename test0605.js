var getKorAirProps = function() {
    for (var property in KorAir) {
        var props = [];
        if (KorAir.hasOwnProperty(property)) {
            props.push(KorAir[property]);
        }
    }
    return props;
};

var final_result = getKorAirProps(); //['대한민국']
// 넘버2
var m1 = [1, 3, 33, 333];

var m2 = function() {
    if ((m1 && m1.length > 0) || !m1) {
        var m1 = new Array(7);
    }
    return m1.length;
};

function m3() {
    return m2() * m2();
}

var final_result = m3(); //49

// local function 
function innerScopeFn() {
    var l_scope = '지역변수';
    console.log('l_scope:', l_scope); // 지역변수
}

function innerScopeFn() {
    console.log('l_scope:', l_scope); //undefined;
    var l_scope = '지역변수';
}

// 전역 변수 

var g_scope = '전역변수'

//local scope(in function)
function localScope() {
    //함수 안(지역)
    //1. 변수 영역 
    //2. parameters(매개변수) 영역
    //3. 함수를 포함하는 상위 영역 
    // 4 전역 
    //5. reference error 발생 
    console.log('g_scope:', g_scope);

    innerScopeFn();

    function innerScopeFn() {
        console.log('l_scope:', l_scope); //undefined;
        var l_scope = '지역변수';
    }
}


function sum(n1, n2, n3, n4, n5) {
    //전달 된 인자가 몇개인지 모를 때? 
    // 인자를 집합으로 만들면? 
    // 사용자가 전달한 인자들을 집합의 아이템으로 설정해 보세요. 
    var numCollection = [];
    numCollection.push(n1);

    //구문 반복 처리 
    //while, for, do! while 

    var l = numCollection.length;
    var result = 0;
    while (l--) {
        var n = numCollection[l]; //4
        if (!isNumber(n)) { throw '오류' }
        result + n;
    }
    return result;

    if (!isNumber(n1) || !isNumber(n2) || !isNumber(n3) || !isNumber(n4) || !isNumber(n5)) {
        throw '인자는 모두 숫자여야 합니다';
    }
    return n1 + n2 + n3 + n4 + n5;
}

//for문 함수 연습 

function printTodo(list) {
    for (var i = 0; i < list.length; i++) {
        var _do = list[i];
        console.log(_do);
    }
}

printTodo(['영화 관람', '축구 경기', '샤워'])