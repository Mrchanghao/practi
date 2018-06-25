/*! main.js @ 2017, yamoo9.net */
((global) => {
    'use strict';

    global.app = new Vue({
        el: '.app',
        data: {
            search: '',
            movies: [
                { '제목': '덩케르크', '장르': '밀리터리' },
                { '제목': '스파이더맨', '장르': '액션' },
                { '제목': '양들의 침묵', '장르': '스릴러' },
                { '제목': '쏘우', '장르': '공포' },
                { '제목': '시스터액트', '장르': '코메디' },
                { '제목': '다이하드', '장르': '액션' },
                { '제목': '센과 치히로의 행방불명', '장르': '애니메이션' },
            ]
        },
        computed: {

        },
        methods: {
            // 사용자 입력에 따라 search 데이터를 변경해주는 메서드
            inputChangeSearch(event) {
                this.search = event.target.value;
            }
        }

    });



})(window);