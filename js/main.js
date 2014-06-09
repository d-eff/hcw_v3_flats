window.onload = function(){

var helper = document.querySelector('.page--main-nav-helper'),
    nav = document.querySelector('.page--main-nav');


  helper.addEventListener('click', function(e){
    e.preventDefault();
    toggleState('.page--main-nav', 'state', 'open', 'closed');
  });
}


  function toggleState(item, attr, stateOne, stateTwo){
    var ele = document.querySelector(item),
        dattr = "data-" + attr;
    ele.setAttribute(dattr, ele.getAttribute(dattr) === stateOne ? stateTwo : stateOne);
  }


  
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
    var currState = nav.getAttribute('data-position');
    if(currentHeight <= headerBottom){
      if(currState !== 'normal'){
        nav.setAttribute('data-position', 'normal');
        header.style.margin = "0";
      }
    } else {
      if(currState !== 'fixed'){
        nav.setAttribute('data-position', 'fixed');
        if(window.innerWidth >= 800){
          header.style.margin = "0 0 120px 0";
        
        }
      }
      if(window.pageYOffset < currentHeight){
        nav.style.webkitTransform = 'none';
      } else {
        nav.style.webkitTransform = 'translateY(-'+nav.offsetHeight+'px)';
      }
    }
    currentHeight = window.pageYOffset;
  }

