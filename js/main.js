(function(){
  var burger = document.querySelector('.page--burger');

  function toggleState(item, stateOne, stateTwo){
    var ele = document.querySelector(item);
    ele.setAttribute('data-state', ele.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
  }

  burger.addEventListener('click', function(){
    toggleState('.page--main-nav ul', open, closed);
  })

})()
