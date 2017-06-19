// button 요소의 id 값 을 가져온다 


//user clicked on the add button 
// if there is any text inside the item field and the text to the todo list 

document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) addItemTodo(value);
});




function addItemTodo(text) {
    var item = document.createElement('li');
    item.innerHTML = text;
}