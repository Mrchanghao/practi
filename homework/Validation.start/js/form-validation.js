/*! vue.form.js © yamoo9.net, 2017 */ ;
(function(global, Vue) {
    'use strict';
    //스코프 내에서 사용할 지역 변수 설정 

    var document = global.document,
        demo, form_container, btn_expand, btn_fold, user_contact
        //초기화 함수 
    function init() {
        demo = document.querySelector('.demo');
        form_container = document.querySelector('form-container');
        btn_expand = form_container.querySelector('btn-expand');
        btn_fold = form_container.querySelector('btn-fold');
        user_contact = form_container.querySelector('#user_contact');
        //이벤트 바인딩 
        bindEvents();
    }

    // bindEvents 함수 정의 
    function bindEvents() {
        btn_expand.onclick = expandForm
        btn_fold.onclick = foldForm;
        user_contact.onsubmit = formValidationAndTransfer;
    }

    function expandForm() {
        demo.classList.add('show-form-overlay');
        form_container.classList.add('expand');
    };

    function foldForm() {
        demo.classList.remove('show-form-overlay');
        form_container.classList.remove('expand');
    };

    function formValidationAndTransfer(e) {
        // 이벤트의 주인 
        var form = e.target;
        // var name_value = form.
    }



})(window, window.Vue);