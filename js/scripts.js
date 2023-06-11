$(function () {

  /*Drop Down Menu Script */

  $('nav.menu i').click(function () {
      var el = $(this).parent().find('ul');
      var icone = $(this).parent().find('i');
      if (el.is(':visible') == false) {
          el.slideToggle();
          icone.removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
      } else {
          el.slideUp();
          icone.removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
      }
  })

  /*Drop Down Menu Script END*/


  /* Carrossel */

    var imgShow = 6;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/8) - 1;
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();


    function initSlider(){
        var amt = $('.mini-img-wraper').length * 12.5;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width',amt+'%');
        elSingle.css('width', 12.5 *(100/amt)+'%');
    }

    function navigateSlider(){
            $('[next]').click(function(event){
                var currButtom = event.target.id;
                var currSection = $(this).parent().parent().attr('id', currButtom);
                alert(currSection);
                if(curIndex < maxIndex){
                    curIndex++;
                    var elOff = $('.mini-img-wraper').eq(curIndex*8).offset().left - $('.nav-galeria-wraper').offset().left;
                    $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
                }else{
                    //console.log("Chegamos até o final!");
                }
            });

            $('[prev]').click(function(event){
                alert(event.target.id);
                if(curIndex > 0){
                    curIndex--;
                    var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                    $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
                }else{
                    //console.log("Chegamos até o final!");
                }
            })
    }


    function clickSlider(){
            $('.mini-img-wraper').click(function(){
                $('.mini-img-wraper').css('background-color','transparent');
                $(this).css('background-color','rgb(255,255,255)');
                var img = $(this).children().css('background-image');
            })

            $('.mini-img-wraper').eq(0).click();

    }

    /* Carrossel END */


})

/*$(document).ready(function(){
    $('i').click(function(event){
        alert(event.target.id);
    });
});*/




