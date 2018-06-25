var n = 100;
console.log(++n); //후 증가 
// console.log(--n);

var k = 11;
console.log(k = k + 1); //12
console.log(++k); //13


//데이터 유형 검증 

// 각 데이터 유형 별 객체 생성 
var types = {
    'num': 19,
    'str': 'hi',
    'boo': false,
    'fnc': function() {},
    'arr': [],
    'obj': {},
    'nothing': [null, undefined],
    'date': new Date()
};

console.log(Array.isArray(types.arr));
console.log(types.arr);


//-------------------------------
//  constructor
//------------------------
var isString = Object.prototype.toString.call().slice(8, -1).toLowerCase();
// ——————————————————————————————————————
// 2. instanceof
// 클래스(Class)란?       <---> 생성자(Constructor)   <--->  추상적인 설계 도면
// 인스턴스(Instance)란?   <---> 객체(Object)          <---> 실체화된 사물(제품)
//
// 객체 instanceof 생성자
// ——————————————————————————————————————

// instanceof는 객체를 통해 생성자가 맞는지 검증하는 수단
// 원시 데이터 유형은 instanceof 로 검증할 수 없다.
// 원시 데이터는 객체가 아니다.
// 숫자 값, 문자 값, 논리 값, null, undefined

var objString = function objString(types) {
    Object.prototype.toString.call
}

var toString = Object.prototype.toString;

isString = function(obj) {
    return toString.call(obj);
}

// this 키워드 
function windowSize() {
    var width = this.innerWidth;
    var height = this.innerHeight;
    return [height, width];
}
//함수가 객체 내부에 선언되면 함수는 method가 된다.
// this는 method를 가지고 있는 객체를 가리킨다

var car = {
    getModel: function() {
        console.log('model of this car is.. ' + this.car);
    }
};

var vehicle = Object.create(car, {
    'id': {
        value: global_id(),
        enumerable: true
    },
    'model': {
        value: 'ford',
        enumerable: true
    }
})