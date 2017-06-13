function mystery() {
    var secret = 6;

    function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    }
    return mystery2;
}

var hidden = mystery();
var result = hidden(3);


console.log('내가 생각한 값:', 54);
console.log('실제 결과값:', result);

// closure2 

function mystery(input) {

}

// closure3.
function mystery(input) {
    var secret = 4;
    input += 2;

    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}

function mystery3(param) {
    function mystery4(bonus) {
        return param(6) + bonus;
    }
    return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
// 몬스터 셋트 

//1.
function warningMaker(monster) {
    return function() {
        alert('Beware there have been ' + monster + ' sight seeing in Seoul')
    }
}

//2.
var orkAlert = warningMaker('ork');
orkAlert();

//3. 
function warningMaker(monster) {
    return function(num, sight) {
        alert('Beware there have been ' + monster + ' sight seeing in Seoul' + num + 'have been spotted at the ' + sight)
    }
}

//4. 

greenHulkAlert = (6, '광하문');
snowYettiAlert = (1, '남산')

//5.


//6. 
function warningMaker(monster) {
    var count = 0;
    var zone = [];
    return function(num, sight) {
        count++;
        var list = "";
        zone.push(location);
        for (var i = 0, l = zone.length; i < l; i++) {
            list += zone[i] + '\n'
        }
        zone.join('\n')
        alert(monster + num + count + zone + location + list)
    }
}

var redOrk = warningMaker('redOrk');
redOrk(2, '강남');

//7. 

function warningMaker(monster) {
    var count = 0;
    var zone = [];
    return function(num, sight) {
        count++;
        var list = "";
        zone.push([num, location]);
        for (var i = 0, l = zone.length; i < l; i++) {
            list += zone[i][1] + zone[i][0] + '\n'

        }
        zone.join('\n')
        alert(monster + num + count + zone + location + list)
    }
}

function star(n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            for (var k = 0; k < (i * 2); k++) {
                result += '*';
                result += '\n'
            }
            for (i = 5; i >= 1; i--) {
                for (j = 5; j > i; j--) {

                }
            }
        }
    }
    return result;
}

function compareIntegers(a, b) {
    if (a > b) {
        return 'greater'
    } else if (a < b) {
        return 'less'
    } else {
        return 'equal'
    }
}

function logicalNor(a, b) {
    return (a === false && b === false) ? true : false;
}

function sumMatrix(A, B) {
    var answer = Array();
    var arrayA = [i, j];
    var arrayB = [k, l];
    var sumMatrix = 0;
    var sum = (arrayA + arrayB).Array

    return answer;
}

for (var i = 0; i < arrayA.length; i++) {
    sum.push(arrayA[i] + arrayB[i]);
}