// prototype 과 this 의 응용?

var is_open = true;

if (is_open) {
    var is_close = false;
}

//  console.log(is_close) -----> false 

is_open = !is_open;


// 뮤직플레이어 상태 조건문 

if (music_player === play) {
    console.log('play');
} else if (music_play === pause) {
    console.log('pause');
} else if (music_play === stop) {
    console.log('stop');
} else {
    console.log('unknown');
}

var state_manager = [{

}]