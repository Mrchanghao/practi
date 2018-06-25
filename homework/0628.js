(function(global, Store) {
    'use strict';
    var book_db_data = [{
        'name': '북유럽신화',
        'author': '닐 게이먼',
        'publish': '나무의 철학'
    }, {
        'name': '나는 너를 본다',
        'author': '클레어 맥킨토시',
        'publish': '나무의 철학'
    }];
    // Store 객체 생성
    var book_collection = new Store(book_db_data);
    global.book_collection = book_collection;
    global.my_course = new Store();
    // 프로토타입 객체 확장
    Store.prototype.author = 'X-Man';
})(window, window.Store);

// window.addEventListener('load', function() {
//     // html dom 연산 처리  
//     var theSquare = documen.getElementById('square');
//     theSquare.style.background = 'blue';
// })    -------------------> 하위 버전 호환 법 

document.getElementsByTagName('input')[0].setAttribute('value', 'Your name')

var attr = function(o, prop, value) {
    if (!o || !prop) {
        throw '첫번째, 두번째 전달인자는 필수';
    }
    if (o && isElementNode(o)) {
        o = [o];
    }
    // prop 데이터 유형이 객체라면?
    // 객체 속성을 순환항 데이터 처리 
    if (isObject(prop)) {
        //노드리스트 순환 
        each(o, function(item, index) {
                //prop {} 순환 
                each(prop, function(key, value) {
                    // class 속성일 경우 
                    if (key === 'class') {
                        addClass(item, value);
                    }
                    item.setAttribute(key, value);
                })
            })
            //함수 종료 
        return;
    }
    // getter 
    if (!value) {
        return o[o].getAttribute(prop);
    }
    //setter
    else {
        each(o, function(item, index) {
            item,
            setAttribute(prop, value);
        });
    }
};

var removeAttr = function(o, prop) {
    if (!o || !prop) {
        throw '첫번째 두번째 전달인자는 필수';
    }
    // o는 존재 하고 element Node인가 ? 
    if (o && isElementNode(o)) {
        o = [o];
    }
    each(o, function(item) {
        item.removeAttribute(prop);
    });
};

var createElement = function(name) {
    validateError(name, '!string', '요소의 이름을 문자열로 전달해주세요.');
    return document.createElement(name);
};

var div = createElement('div');
div.className = 'items'
div.id = 'all';

function addElement() {
    var orderList = document.getElementById('myList');
    //li요소를 만든 다음 문자노드를 만들어서 li요소에 넣는다 
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('fuck'));
    orderList.insertBefore(li, orderList[0]);
}

document.addEventListener('DOMContentLoaded', activateButtons);

function activateButtons() {
    //버튼에 이벤트 대기자 추가 
    var appendBtn = document.querySelector('#appendButton');
    appendBtn.addEventListener('click', appendNode);

    var addBtn = document.querySelector('#addButton');
    addBtn.addEventListener('click', addNode);
}

function appendNode(e) {
    var listItem = document.getElementsByTagName('li');
    var newListItem = document.createElement('li');
    //새로운 문자노드를 추가 한다 
    newListItem.appendChild(document.createTextNode('mouse Trap'));

    //존재 하는 목록에 4번째 항목으로 추가 
    listItem[2].appendChild(newListItem);
}

function prev(elm) {
    do {
        elm = elm.previouSibling;
    } while (elm && elm.nodeType != 1);
    return elm;
};

var contaienr = $.selector('.container');
var container_lis = $.selectorAll('.li', container);

global.container = container;

$.each(container_lis, function(li) {
    $.attr(li, 'style', 'color: tan');

    li.onlick = function() {
        $.removeAttr(this, 'style');
    }
})

var zoom_button_set = $.selector('.button-set');
var list = $.selector('.list');

// event target 은 이벤트가 진행 중인 자식요소 
// event currentTarget은 이벤트가 연결된 부모요소 

zoom_button_set.onclick = function(e) {
    var buttonn = e.target;
    var current_val = getComputedStyle(list).fontSize;
    current_val = global.parseInt(current_val, 10);

    if (button.classList.contain('zoom-in')) {
        $.attr(list, 'style', 'font-size' + new_val + 'px');

    }
    if (button.classList.contain('zoom-out')) {
        var new_val = current_val - 10;
        $.attr(list, 'style', 'font-size' + new_val + 'px');
    }
};

//함수 값이 아닌, 참조 변수를 설정해야만 제거가 된다 
global.addEvent = function() {
    var _addEvent = null;
    if ('addEventlistener' in EventTarget.prototype) {
        _addEvent = function(el, type, handler, capture) {
            el.addEventListener(type, handler, capture || false);
        }
    }
}