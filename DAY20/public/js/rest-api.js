/*! rest-api.js @ 2017, yamoo9.net */
(function(global, $) {
    'use strict';

    var root = 'http://localhost:3000/student/';


    // $.get(root+'2', function(data, status, xhr) {
    $.get(root, function(data, status, xhr) {
        console.log(data);
    });

    function addStudent(new_student) {
        //new student객체를 문자화 시켜야 한다. 
        return;
        $.post(root, new_student, function(data, status) {
            console.log(status);
            console.log(data);

        });
    }
    global.document.onclick = function() {
        addStudent({
            "name": "곽현지",
            "gender": "female",
            "age": "25",
            "email": "hicpfl@naver.com",
            "hobby": "TV 드라마 시청",
            "school[name]": "고려대",
            "school[grade]": "4",
            "major": "광고학",
            "minor": "작곡",
            "family[]": [
                "아빠",
                "엄마"
            ],
            "id": 7
        })

    }

})(window, window.jQuery);