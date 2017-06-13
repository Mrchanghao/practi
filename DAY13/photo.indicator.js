(function(global, $) {
    'use strict'


    var container = $.selector('.photo-container');
    var showcase = $.selector('.photo-showcase', container);
    var view = $.selector('img', showcase);
    var indicators = $.selectorAll('.photo-showcase-indicator', container);
    // console.log(indicator);

    // console.log(view);

    var setPhoto = function() {
        //재 변수 할당 
        var indicator_img = $.selector('img', this);
        var index = indicator_img.src.split('=')[1]; //질문 
        var path = view.src.split('=')[0] + '=' + index; //질문 
        view.src = path
            // console.log(indicator_img);
            // console.log(path);

        return false; //질문 
    };
    // console.log(index);

    for (var i = 0, l = indicators.length; i < l; i++) {
        var indicator = indicators.item(i)
        indicator.onclick = setPhoto;
    }


})(window, window.FDS);