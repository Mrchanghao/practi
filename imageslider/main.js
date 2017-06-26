window.onload = function() {
    'use strict';

    // data 선택
    var filters = document.getElementsByClassName('filter');
    var items = document.getElementsByClassName('item');
    var itemLen = items.length - 1;
    var shuffleGrid = document.getElementsByClassName('shuffle-grid')[0];
    var shuffleGridWidth = shuffleGrid.clinetWidth;
    var shuffleGridHeight = shuffleGrid.clientHeight;
    var itemsPerRow = Math.floor(shuffleGridWidth / items[0].clientWidth);
    var itemHeight = items[0].clientHeight;
    var itemMarginTop = 10;
    var target, categories, topTemp, leftTemp, passedTemp = [];

}