var firstName = document.getElementById('firstName');


// firstName.onclick = function(e) {
//     // console.log('clicked e', e.target.id);
//     // e.target.style.background = 'green';
//     // firstName.style.background = 'yellow';
//     console.log(this.id);
//     this.style.background = "yellow";

// };

// var fiirstName = document.getElementById('firstName');

firstName.addEventListener('click', function(e) {
    console.log('clicked in the ' + e.target.id + ' field');
    e.target.style.background = 'gray';
});

document.getElementById('disclamier').addEventListener('click', function(e) {
    e.target.style.fontWeight = 'bold';
    e.stopPropagation();
});

document.getElementById('welcome-content').addEventListener('click', function(e) {
    e.target.style.visibility = "hidden";
})

function mouseOverhandler(e) {
    e.target.style.border = '2px solid red';
    // e.stopPropagation();
}

function mouseOutrhandler(e) {
    this.style.border = '0px';
    // e.stopPropagation();
}

var all = document.getElementsByTagName('*');
for (var i = 0, l = all.length; i < l; i++) {
    all[i].addEventListener('mouseover', mouseOverhandler);
    all[i].addEventListener('mouseout', mouseOutrhandler);

};

function clickHandler(e) {
    console.log('handled at ' + e.currentTarget.id);
    console.log('emmitted by ' + e.target.id);
}

var navbar = document.getElementById('navbar');
navbar.addEventListener('click', clickHandler);



var list = document.querySelectorAll('li:nth-child(2n+1)');
for (var i = 0, l = list.length; i < l; i++) {
    list[i].setAttribute('style', 'background-color: #ffeeee');
}

// var div = document.getElementById('welcome');

// var paras = div.getElementsByTagName('p');

// var newPara = document.createElement('p');

// if (paras[0]) {
//     div.insertBefore(newPara, paras[0]);
// } else {
//     div.appendChild(newPara)
// }

function mouseHandler(e) {
    this.style.background = (e.type === 'mouseover') ? '#eee' : '#fff';
}

var div = document.getElementById('welcome');
div.addEventListener('mouseover', mouseHandler);
div.addEventListener('mouseout', mouseHandler);