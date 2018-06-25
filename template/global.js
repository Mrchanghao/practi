(function(global, $) {
    'use strict';
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = printAjaxData;
    var data_url = '/peopple.json'
    xhr.open('GET', data_url, true);
    xhr.send(null);

    var printAjaxData = function() {
        if (xhr.status === 200 && xhr.readyState === 4) {
            var user_collection = [];
            JSON.parse(xhr.responseText).forEach(function(user, index) {
                user_collection.push({
                    gender: user.gender === 'female' ? '여성' : '남성',
                    email: user.email
                })
            })
        }
    }



    let list_template = document.querySelector('#list-view').innerHTML;

    list_template = list_template.split('<ul></ul>');
    let content_template = list_template[0] + ' ' + '<ul>';
    collection.forEach(function(user, index) {
        let n = index + 1;
        n = n < 10 ? '0' + n : n;
        content_template += `
    <li class="num">${n}</li>
    <li class="name">${user.name}</li>
    <li class="gender">${user.gender}</li>
    `;
    })
    content_template += '</ul>' + list_template[1];
    return content_template;
})(window);