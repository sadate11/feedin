$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#scroll-indicator').fadeOut();
     }
    else
     {
      $('#scroll-indicator').fadeIn();
     }
 });