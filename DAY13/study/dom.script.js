(function(global, _) {
    'use strict';
    var document = global.document;

    // 요소 생성 
    var list = _.createEl('ul');
    var list_item = _.createEl('li');
    var headline = _.createEl('h2', 'new message');
    var list_link = _.createEl('a');
    var list_img = _.createEl('img');

    console.groupCollapsed('요소노드 검증');
    console.log(list);
    console.log(list_item);
    console.log(headline);
    console.log(list_link);
    console.log(list_img);
    console.groupEnd('요소노드 검증');

    var list_link_href = document.createAttribute('href');
    // 생성된 img요소에 src alt 속성 추가 
    var list_img_src = document.createAttribute('src');
    var list_img_alt = document.createAttribute('alt');

    list_link_href.nodeValue = 'http://github.com/yamoo9';
    list_link_alt.nodeValue = '구조물';

    //동적 생성된 속성노드 확인 
    console.groupCollapsed('속성노드 검증');

    console.log('list_link_href:', list_link_href);
    console.log('list_img_src:', list_img_src);
    console.log('list_img_alt:', list_img_alt);
    console.log('list_link_href.nodeType:', list_link_href.nodeType);
    console.log('list_img_src.nodeType:', list_img_src.nodeType);
    console.log('list_img_alt.nodeType:', list_img_alt.nodeType);

    console.groupEnd('속성노드 검증');
    _.appendChild(list, list_item);
    _.appendChild(list_item, headline)
    _.appendChild(list_link, list_img);
    console.log(list);

    list_link.setAttributeNode(list_link_href);
    list_img.setAttributeNode(list_img_alt);
    list_img.setAttributeNode(list_img_src);

}) // (window, window.FDS);
;
(function(global, document, _) {
    'use strict';
    var data = [{
            index: '1068',
            alt: '푸른 빛 탁자'
        },
        {
            index: '1017',
            alt: '광활한 산맥'
        },
        {
            index: '1067',
            alt: '빛이 스며드는 해안 도시 풍경'
        },
        {
            index: '1060',
            alt: '커피 향기 가득한 매장'
        },
        {
            index: '1042',
            alt: '수 놓은 별 빛이 흐른다'
        },
        {
            index: '1039',
            alt: '녹색 산림 위 폭포수'
        },
        {
            index: '1027',
            alt: '우수에 찬 눈빛의 여인'
        },
        {
            index: '1013',
            alt: '하얀 차량 내부에서 전화 통화 중인 여인'
        },
        {
            index: '977',
            alt: '아름다운 버섯과 빛의 향연'
        },
        {
            index: '859',
            alt: '강렬한 인상을 주는 붉은 벽과 노란 대문'
        },
    ];
    var controller = _.selector('.photo-showcase-controller [role=tablist]')

    for (var i = 0, l = data.length; i < l; i++) {
        var item = data[i];
        var index = item.index
        var alt = item.alt;

        var li = _.createEl('li');
        li.setAttribute('role', 'presenttation');

        var a = _.createEl('a');
        a.setAttribute('role', 'tab');
        a.setAttribute('href', '');
        a.setAttribute('class', 'photo-showcase-indicator');

        var img = _.createEl('img');
        img.setAttribute('src', 'https://unsplash.it/100/100?image=' + index);

        _.appendChild(li, a);
        _.appendChild(a, img);
        _.appendChild(controller, li);


        a.index = i;
        a.onclick = changeShowcaseView;

    }

    function changeShowcaseView() {
        // this === 클릭한 a 
        console.log(this, this.index);
        var source = data[this.index];
        var showcase = _.selector('.photo-showcase img');
        showcase.setAttribute('alt', source.alt);
        var showcase_old_src = showcase.getAttribute('src');

        // 방법 1 
        var end_index = showcase_old_src.indexOf('=') + 1;
        var showcase_new_src = showcase_old_src.slice(0, end_index) + source.index;

        //방법2 
        var showcase_new_src = showcase_old_src.replace(/=.+/, function() {
            return '=' + source.index;
        });

        showcase.setAttribute('src', showcase_src);

        return false;
    };
    //문서 객체 참조
    var container = _.selector('.photo-showcase-container');
    var container_active = 'active';
    var indicator_first = _.selector('li:first-child a', controller);
    var indicator_last = _.selector('li:last-child a', controller);

    //focus, blur 이름
    indicator_first.onfocus = function() {
        //container  요소에 활성화 클래스를 추가
        var container_class = container.getAttribute('class');
        container_class += '' + container_active;
        container.setAttribute('class', container_class);
    }
    indicator_last.onblur = function() {
        //container 요소에 활성화 클래스를 제거한다
        var container_class = container.getAttribute('class');
        container_class = container_class.replace(container_active, '').trim();
        container.setAttribute('class', container_class);
    }


})(window, window.document, window.FDS);