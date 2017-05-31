// 청소기 만들기
var trashProps = {
    power: false,
    strong: 1,
    code: 'pull'
}

function trashMachine(trashProps) {
    this.props = trashProps;
}
trashMachine.prototype.getTrashProps = function() {
    return this.props;
}

trashMachine.prototype.power = function() {
    if (!this.props.power) {
        this.props.power = true;
        return '위위위윙 반복';
    }
    this.props.power = false;
    return '위위우위위ㅣ이이이이....';
}

var trash1 = new trashMachine(trashProps);



// 스타크래프트 유닛 만들기
function Unit() {
    this.speed = 5;
}

Unit.prototype.move = function(x, y) {
    return x + ',' + y + '로 이동한다.';
};

Unit.prototype.moveSpeed = function(x) {
    return this.speed = x;
};
Unit.prototype.attack = function() {
    return '공격한다';
};

// Medic 정의
function Medic(speed) {
    Unit.call(this);
    this.speed = speed;
}

Medic.prototype = new Unit();

Medic.prototype.attack = function() {
    return '대상을 치료한다';
};

// Marine 정의
function Marine(speed) {
    Unit.call(this);
    this.speed = speed;
}

Marine.prototype = new Unit();

Marine.prototype.attack = function() {
    return '소총을 두두두 쏜다';
};

// Firebat 정의
function Firebat(speed) {
    Unit.call(this);
    this.speed = speed;
}

Firebat.prototype = new Unit();
Firebat.prototype.attack = function() {
    return '근거리 공격을 한다';
};

// instace 생성
var medic1 = new Medic(10);
var marine1 = new Marine(5);
var firebat1 = new Firebat(3);