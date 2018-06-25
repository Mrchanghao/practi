/*! ajax-using-lib.js @ 2017, yamoo9.net */
(function(global, $) {
    'use strict';

    var json = global.JSON;

    // Ajax 통신 사용
    $.get('/DB/user.json', function(data) {
        $.each($.parse(data), function(key, value) {

            if (key === 'results') {
                var list_view_template = document.querySelector('#list-view-template'),
                    innerHTML;

                list_view_template = list_view_template.split('<ul></ul>');

                var content_template = list_view_template[0]
                $.each(value, function(item, index) {
                    var src = item.picture.medium;
                    var email = item.email;
                    var name = item.name;
                    var user_collection = [];
                    user_collection.push({
                        name: item.name,
                        src: item.picture.medium,
                        email: item.email
                    });

                });
            }
        });

    });

})(window, window.FDS);