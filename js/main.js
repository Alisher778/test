$(document).ready(function(){
    // Carouse

    $(".owl-carousel").owlCarousel({items:1, autoplay:true, loop:true});
    

    // ========= Datepicker
   $('.form_datetime').datepicker();
    $('.form_datetime').on('changeDate', function(ev){
        $(this).datepicker('hide');
    });
  
    
    
    

    // ========== Hero area form
    
   $('.finput').inputmask("(999) 999-9999", {showMaskOnHover: false});
    
    $( ".topbut" ).click(function(e) {
     event.preventDefault(e); 
     var movefrom= $('#movefrom').val();
     if($('#movefrom').val().length<5) {$('#movefrom').css('border-color','red'); $('#movefrom').next('div').html('Please enter a valid ZIP code'); var er1='1' } else {$('#movefrom').css('border-color','white'); $('#movefrom').next('div').html(''); var er1='3'};
     if($('#moveto').val().length<5) {$('#moveto').css('border-color','red'); $('#moveto').next('div').html('Please enter a valid ZIP code'); var er2='1' } else {$('#moveto').css('border-color','white'); $('#moveto').next('div').html(''); var er2='3'};
     if($('#movedate').val().length<5) {$('#movedate').css('border-color','red'); $('#movedate').next('div').html('When is you moving date?'); var er3='1' } else {$('#movedate').css('border-color','white'); $('#movedate').next('div').html(''); var er3='3'};
     
     
     var moveto=$('#moveto').val();
     var movedate=$('#movedate').val();
     $('#movedateb').val(movedate);
     $('#movetob').val(moveto);
     $('#movefromb').val(movefrom);
     $('#btn-tracker').val('Hero area button clicked '+window.location.href)
     if(er1>1 && er2>1 && er3>1){$('.form-wrapper').css({opacity: '1', "z-index":9999});}
     
    });


    // ====== Pop-uip Form
    $('.close-btn').click(function(){
      $('.form-wrapper').css({opacity: '0', "z-index":"-1"});
    });

    $('.table-booking-popup').click(function(){
      $('.form-wrapper').css({opacity: '1', "z-index":9999});
       var info = $(this).attr('data-info')
      $('#btn-tracker').val('info '+window.location.href)
    })


   //on input fill focus next input
  $('.modinputs').on('change paste keyup',function(e){
        e.preventDefault()
        var fromZip = $('#movefrom').val();
        var toZip = $('#moveto').val();
        var date = $('#movedate').val();
       
       if(fromZip.length == 5){
         $('#moveto').focus()
       }
       if(toZip.length == 5){
        $('#movedate').focus()
       }
        
    })

  $(document).on("scroll load resize",function(){
   var scrollTop = $(this).scrollTop();
   var width = $(this).width();
   if(width < 768 && width > 400 && scrollTop > 590){
     $('#nav-pop-btn').addClass('show')
   }else{$('#nav-pop-btn').removeClass('show')}

  });

 $('.modinputs').on('click focus',function(){
     var width = $(this).width();
      var scrollPosition = $(this).scrollTop();
   if(width < 480){
     $('body, html').animate({scrollTop: scrollPosition+100},300)
   }

  });



})