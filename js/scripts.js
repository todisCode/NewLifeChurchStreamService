/*Drop Down Menu Script */

$(function () {
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
})

/*Drop Down Menu Script END*/