(function(global) {
    'use strict'
    var document = global.document;
    var localStorage = global.localStorage;
    var forEach = Array.prototype.forEach;
    console.log(forEach);
    var JSON = global.JSON;
    var memo_data_id = 'memo-data';
    var app, memo, memo_buttons, memo_title, memo_content, memo_storage, memo_items

    function init() {
        app = document.querySelector('.app');
        memo = app.querySelector('.memo');
        memo_buttons = memo.querySelectorAll('button');
        console.log(memo_buttons);
        memo_title = memo.querySelector('#memo-title');
        memo_items = app.querySelector('.memo-item-container')
        memo_content = memo.querySelector('#memo-content');
        load(memo_data_id);
        render();
        bind();

    };
    console.log(memo);

    function load(id) {
        var loaded_data = localStorage.getItem(id);
        if (!loaded_data) {
            localStorage.setItem(id, JSON.stringify([]));;
            loaded_data = localStorage.getItem(id);
        }
        memo_storage = JSON.parse(loaded_data);
    }
    // console.log(loaded_data);
    function render() {
        var template = '';
        memo_items.innerHTML = '';
        memo_storage.forEach(function(memo, index) {
            template += '<article class="memo-item" column is-3 message is-primary>' +
                '<div class="message-header">' +
                '<h5 class="memo-item-title">' + memo.title + '</h5>' +
                '<button data-remove-index=" ' + memo.id + ' "type="button" class="delete" aria-label="메모 아이템 제거"></button>' +
                '<div>' +
                '<div class="message-body">' +
                '<p class="memo-item-container">' + memo.content + '</p>' +
                '</div>' +
                '</article>';
        })
        memo_items.innerHTML = template;
    }

    function bind() {
        forEach.call(memo_buttons, function(button) {
            button.addEventListener('click', detectButton);
        });
        memo_items.addEventListener('click', removeMemo)
            // console.log(button)
            // console.log(memo_items);
    }

    function detectButton() {
        this.classList.contains('is-save') ? saveMemo() : cancelMemo();
    }

    function removeMemo(ev) {
        var target = ev.target;
        if (!target.localName === 'button' && target.classList.contains('delete')) {
            var remove_id = target.dataset.removeIndex;
            memo_storage.splice(remove_id, 1);
            localStorage.setItem(memo_data_id, JSON.stringify(memo_storage))
            render();
            ev.preventDefault();
        }
    }

    function validateMemo(title, content) {
        if (title.value.trim() === '') {
            global.alert('메모제목 비었음');
            memo_title.focus();
            return true;
        }
        if (content.value.trim() === '') {
            global.alert('내용이 비었음');
            memo_content.focus();
            return true;
        }
        return false;
    }

    function saveMemo() {
        if (validateMemo(memo_title, memo_content)) { return; }
        var memo_item = {
            title: memo_title.value,
            content: memo_content.value,
        };
        memo_storage.push(memo_item);
        var memo_data = JSON.stringify(memo_storage);
        localStorage.setItem(memo_data_id, memo_data);
        cancelMemo();
        render();
    }

    function cancelMemo() {
        memo_title.value = '';
        memo_content.value = '';
    }

    init();


})(window);