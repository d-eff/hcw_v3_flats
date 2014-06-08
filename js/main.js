  var burger = document.querySelector('.page--burger');

  function toggleState(item, stateOne, stateTwo){
    var ele = document.querySelector(item);
    ele.setAttribute('data-state', ele.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
  }

  burger.addEventListener('click', function(){
    toggleState('.page--main-nav ul', open, closed);
  })


  
  //onscroll
  //
  //if page height <= header bottom
  //  header state = normal
  //else
  //  header state = fixed, translateY(-height)
  //  check scroll dir -- window.pageYOffset > stored height, 
  //    state=down
  //  else
  //    state=up, show this bitch
  //
  //pageheight = window.pageYOffset

  var currentHeight = window.pageYOffset,
      header = document.querySelector('.page--site-header'),
      headerBottom = header.offsetTop + header.offsetHeight,
      nav = document.querySelector('.page--main-nav');

  window.addEventListener('scroll', scrollUlate);

  function scrollUlate(){
    console.log("SCROLLULATE!");
    var currState = nav.getAttribute('data-state');
    if(currentHeight <= headerBottom){
      if(currState !== 'normal'){
        nav.setAttribute('data-state', 'normal');
        header.style.margin = "0";
      }
    } else {
      if(currState !== 'fixed'){
        nav.setAttribute('data-state', 'fixed');
        header.style.margin = "0 0 120px 0";
      }
      if(window.pageYOffset < currentHeight){
        nav.style.webkitTransform = 'translateY(0px)';
      } else {
        nav.style.webkitTransform = 'translateY(-'+nav.offsetHeight+'px)';
      }
    }
    currentHeight = window.pageYOffset;
  }

