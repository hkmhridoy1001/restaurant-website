 // animate bg add
 $(window).scroll(function(){

    $scrollTop = $(this).scrollTop();
    if($scrollTop > 200){
      $("#menu_nav").addClass('nav_bg');
    }else{
      $("#menu_nav").removeClass('nav_bg');
    }

  });

  //counter up
$('.count').counterUp({
  delay: 30,
  time: 5000
});
