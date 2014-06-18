window.onload = function(){

var helper = document.querySelector('.page--main-nav-helper'),
    navWrap = document.querySelector('.page--main-nav'),
    currentHeight = window.pageYOffset,
    header = document.querySelector('.page--site-header'),
    headerBottom = header.offsetTop + header.offsetHeight,
    navBody = document.querySelector('.page--main-nav'),
    parentLinks = document.querySelectorAll('.page--main-nav-parent-link'); 

  window.addEventListener('scroll', function(){
    scrollUlate(navWrap, currentHeight, header, headerBottom);
    currentHeight = window.pageYOffset;
  });

  helper.addEventListener('click', function(e){
    e.preventDefault();
    var navUl = document.querySelector('.page--main-nav ul');
    toggleState(navUl, 'state', 'open', 'closed');
  });
  
  for(var x = 0; x < parentLinks.length; ++x){
    (function(x){
      parentLinks[x].addEventListener('click', function(e){
        if(window.innerWidth < 800){
          e.preventDefault();
          toggleState(e.target.nextElementSibling, 'state', 'open', 'closed');
        }
      });
    })(x);
  }
}



function toggleState(ele, attr, stateOne, stateTwo){
  var dattr = 'data-' + attr;
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
//    state=up, show it
//
//pageheight = window.pageYOffset

function scrollUlate(nav, currentHeight, header, headerBottom){
  var currState = nav.getAttribute('data-position');
  if(currentHeight <= headerBottom){
    if(currState !== 'normal'){
      nav.setAttribute('data-position', 'normal');
      header.style.margin = '0';
    }
  } else {
    if(currState !== 'fixed'){
      nav.setAttribute('data-position', 'fixed');
      if(window.innerWidth >= 800){
        header.style.margin = '0 0 120px 0';

      }
    }
    if(window.pageYOffset < currentHeight){
      nav.style.webkitTransform = 'none';
      nav.style.mozTransform = 'none';
      nav.style.msTransform = 'none';
      nav.style.oTransform = 'none';
      nav.style.transform = 'none';
    } else {
      nav.style.webkitTransform = 'translateY(-'+nav.offsetHeight+'px)';
      nav.style.mozTransform = 'translateY(-'+nav.offsetHeight+'px)';
      nav.style.msTransform = 'translateY(-'+nav.offsetHeight+'px)';
      nav.style.oTransform = 'translateY(-'+nav.offsetHeight+'px)';
      nav.style.transform = 'translateY(-'+nav.offsetHeight+'px)';
    }
  }
}

