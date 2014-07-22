//设置一下nav的动画
var strerch = function(){
  var sTop=document.documentElement.scrollTop+document.body.scrollTop;  
  if(sTop > 0){
    $('#nav').removeClass('maximum');
    $('#nav').addClass('minimum');
  }
  else{
    $('#nav').removeClass('minimum');
    $('#nav').addClass('maximum');
  }
}
window.onmousewheel = strerch;