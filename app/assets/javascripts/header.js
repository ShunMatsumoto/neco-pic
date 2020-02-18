$(function () {

  var duration = 200;
      
  $('.index__box__header__menu-list a')
    .on('mouseover', function() {
      $(this).stop(true).animate({
        borderWidth: '7px',
        borderColor: '#888',
      }, duration);
    })
    .on('mouseout', function() {
      $(this).stop(true).animate({
        borderWidth: '0px'
      }, duration)
    });
});