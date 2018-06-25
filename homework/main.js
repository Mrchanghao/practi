(function(global, document, $) {
    'use strict'
    //리스트 아이템들 찾아서 변수에 할당 
    var listTarget = $.selector('li');
    // 이벤트 바인딩 
    for (var i = 0, l = listTarget.length; i < l; ++i) {
        listItem = listTarget.item(i);
        listItem.onclick = activeList;
    }



})(window, window.document, window.FDS);