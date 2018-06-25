(function() {
  'use strict'

  let modal = document.querySelector('.modal');
  let btn = document.querySelector('#button');
  let close = document.querySelector('.close');

  btn.addEventListener('click', function() {
    modal.classList.add('foo');
    console.log('check');
  });

  close.addEventListener('click', function() {
    modal.classList.remove('foo');
    console.log('click');
  });


  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('foo');
      console.log('target');
    }
  });

})(window);