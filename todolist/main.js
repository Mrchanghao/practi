// // data 유형 {
//    title: [식별자, 속성(완료, 진행) }
// }


// add task(title) 
// //모델에 titile 추가 함수 


// remove task(id)

// var newBtn = document.getElementById('btn-add');
// newBtn.onclick = addNewTask();

// function addNewTask() {
//     var listTask = document.createElement('li');
//     listTask.innerText = taskText;

//     var list = document.getElementById('to-do-list');
//     list.appendChild(listTask);
// }


// newBtn.onclick = function() {
//     var inputText = document.getElementById('input-text');
//     var taskText = inputValue;
// }


function addNewTask(list, taskText) {

    var listTask = document.createElement('li');


    var checkBox = document.createElement('input'); //체크 박스 생성  

    checkBox.type = 'checkbox' //체크 박스에 타입값 부여
    checkBox.setAttribute('class', 'check-btn')

    var complete = document.createElement('span');

    complete.innerText = taskText;
    // listTask.innerText = taskText;    
    listTask.appendChild(checkBox);

    listTask.appendChild(complete);
    list.appendChild(listTask);

    var remove = document.createElement('button');
    remove.textContent = '-';
    listTask.appendChild(remove);
    remove.setAttribute('class', "delete-btn")



}
// 
var newBtn = document.getElementById('btn-add');

newBtn.onclick = function() {
    var inputText = document.getElementById('input-text');

    var taskText = inputText.value;


    if (!taskText.trim()) //trim method 

        return false;


    addNewTask(document.getElementById('to-do-list'), taskText);
    inputText.value = "";

};

var removeBtn = document.getElementsByName('remove');
listTask = document.documentElement.querySelectorAll('li');

removeBtn.onclick = function() {
    for (var i = 0; listTask.length; i++) {
        var removeEl = document.getElem
    }
}

// list 삭제 함수 이벤트

// function removeAll() {
//     var listTask = document.querySelectorAll('li');
//     for (var i = 0, l = listTask.length; i < l; i++) {
//         var removeEl = document.getElementsByTagName('li')[i];
//         var container = removeChild.()
//     }
// }