/*! ajax-native.js @ 2017, yamoo9.net */
(function(global) {
    'use strict';
    // 통신 요청 응답을 위한 API 
    //사용자 인터페이스에 업데이트 렌더링 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = callbackCommunication;

    function callbackCommunication() {
        console.log(arguments); //이벤트 객체 
        // return; // 함수 종료 
        //통신상태 확인 
        console.log('xhr 통신상태는?,', xhr.status);

        if (xhr.status === 200 && xhr.readyState === 4) {
            console.log('통신 성공');
            console.log('데이터 URL,:', xhr.responseURL);
            console.log('데이터 유형 :', xhr.responseType);
        }
        // 통신 상태가 fail이면? 
        if (xhr.status === 404) {
            console.log('통신 실패');
        }
    }
    xhr.open('GET', '../DB/people.json');
    xhr.send(null);
})(window);

{
    let xhr = null;
    let print_btn = document.querySelector('.print-ajax-btn')
    console.log(print_btn);
    let data_zone = document.querySelector('.data-zone');
    console.log(data_zone);
    let data_url = '../DB/people.json';
    console.log(data_url);
    let renderAjaxData = () => {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = printAjaxData;
        console.log(printAjaxData);
        print_btn.removeEventListener('click', renderAjaxData, true);
        print_btn.setAttribute('disabled', 'disabled');
    };
    let printAjaxData = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            data_zone.classList.remove('has-text-centered');
            let user_collection = [];
            JSON.parse(xhr.responseText).forEach(function(user, index) {
                user_collection.push({
                    gender: user.gender,
                    email: user.gender === 'femail' ? '여성' : '남성',
                    age: user.age
                });
            });
            console.log(user_collection);
            data_zone.innerHTML = renderTableUserCollection(user_collection);
        }
        // 오류 발생 시 
        else if (xhr.status > 400) {
            data_zone.innerHTML = '통신에 실패';
            data_zone.style.cssText = 'color: #ef1a62';
            window.setTimeout(function() {
                data_zone.removeAttribute('style');
            }, 1400);
        }
        //로딩 중 
        else {
            data_zone.innerHTML = '<span class="fa fa-spinner fa-pulse" aria-label="로딩 중..."></span>';
        }
    };
    let renderDataBinding = xhr => {
        var frag = document.createDocumentFragment();
        var frag_root = document.createElement('div');
        frag.appendChild(frag_root);
        frag_root.innerHTML = xhr.response;
        frag_root.querySelector('.status').textContent = xhr.status;
        frag_root.querySelector('.url').textContent = xhr.responseURL;
        frag_root.querySelector('.type').textContent = xhr.responseType;
        frag_root.querySelector('.response').textContent = xhr.response;
        return frag_root.innerHTML;
    };
    let renderTableUserCollection = collection => {
        let table_template = document.querySelector('#user-table-template').innerHTML;
        table_template = table_template.split('<tbody></tbody>');
        console.log(table_template);
        let content_template = `${table_template[0]}<tbody class="tbody">`;
        collection.forEach(function(user, index) {
            let n = index + 1;
            n = n < 10 ? '0' + n : n;
            content_template += `
   <tr class="tr">
          <td class="td num">${n}</td>
          <td class="td gender">${user.gender}</td>
          <td class="td email">${user.email}</td>
          <td class="td age">${user.age}</td>
          <td class="td etc"></td>
        </tr>
        `;
        })
        content_template += `</tbody>` + table_template[1];
        return content_template;
    };


    print_btn.addEventListener('click', renderAjaxData, true);
}


// 비동기 통신 이벤트 제어 프로그래밍
// ECMAScript 2015 (ES6) 버전 코드 사용