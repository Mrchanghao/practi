/*! ui/tab.js @ 2017, yamoo9.net */
(function(global) {
    'use strict';

    // Toggle Guide
    document.onkeyup = function(e) {
        if (e.keyCode === 71 && e.shiftKey) {
            document.body.classList.toggle('guide');
        }
    };

})(window);

;
(function(global) {
    'use strict';
    // 참조 변수 선언 
    var document = global.document;
    var foreach = Array.prototype.forEach;
    var comp, tabs, panels;
    // 1st function
    function init() {
        // 컨트롤할 요소노드 참조 
        comp = document.querySelector('.tab-component');
        tabs = document.querySelectorAll('.tab');
        panels = comp.querySelectorAll('.tabpanel');
        bindEvents();
    }

    //이벤트 연결함수 
    function bindEvents() {
        forEach.call(tab, function(tab, index) {
            tab.onclick = changeTabpanel.bind(tab, index);
        });
    }



})(window);