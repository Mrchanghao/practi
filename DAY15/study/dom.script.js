/*! dom.script.js @ 2017, yamoo9.net */
(function(global, document, $) {
    'use strict';


    function methodOne() {
        var wrapper = $.selector('.wrapper');
        var new_node = $.createEl('h1', 'insertBefore');
        new_node.setAttribute('lang', 'en');
        new_node.setAttribute('class', 'wrapper-headline');
        // 문서의 특정 요소노드에 마운트 되지 않은 상태 
        console.log('new_node', new_node);
        // ~ 앞에 삽입
        // 부모 노드.insertBefore(삽입노드, 부모노드를 통해 찾은 자식노드);
        wrapper.onmouseover = function() {
            // 문서의 특정 요소노드에 마운트 된 상태 
            // this.insertBefore(new_node, $.selector('p', this));
            $.insertBefore(new_node, $.selector('p', this));
            // $.before()

        }
    }


})(window, window.document, window.FDS);