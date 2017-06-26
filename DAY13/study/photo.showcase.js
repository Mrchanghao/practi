(function(global, _) {
    'use strict'
    //돔제어를 목적으로 하는 문서객체를 탐색 찾아 변수에 할당 

    var container = _.selector('.photo-showcase-container');
    var showcase = _.selector('.photo-showcase', container);
    var showcase_view = _.selector('img', showcase);
    var indicators = _.selectorAll('.photo-showcase_indicator', container);

    var setPhotoShowcase = function() {
        var indicator_img = _.selector('img', this);
        var index = indicator_img.src.split('=')[1];
        var path = showcase_view.src.split('=') + '=' + index;
        showcase_view.src = path;
        return false;
    };

    for (var i = 0, l = indicators.length; i < l; i++) {
        var indicator = indicators.item(i);
        indicator.onclick = setPhotoShowcase;
    }


})(window, window.FDS);