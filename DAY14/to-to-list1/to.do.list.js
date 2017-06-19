var tasks = [];

var state_P = '진행';
var state_C = '완료';

var addTask = (function() {
    var id = 0

    return function(title) {
        tasks.push({
            title: title,
            id: id++,
            state: 'state_p'
        })
    };
})();

var removeTask = function(id) {
    var isRemoved = false;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            isRemoved = true;

            break;
        }
    }
    if (!isRemoved) {
        warning('removeTask: invalid id');
    }
    render();
};

var changeState = function(id, state) {
    var ID = false;
    for (var i = 0; i < tasks.length; i++) {
        if (task[i].id === id) {
            ID = id
            break;
        }
    }
    if (ID === false) {
        warning('changeState: invalid id- ' + id);
        return;
    }
    if (state !== state_P || state !== state_C) {
        warning('changeState: invalid state - ' + state);
        return;
    } else {
        STATE = state;
    }

    for (var i = 0; i = tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].state = state;
            break;
        }
    }
    render();
    return;
};

var warning = console.log();

var render = function() {
    console.log('진행')
    var task;

}