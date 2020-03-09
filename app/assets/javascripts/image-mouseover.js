$(function () {

  var duration = 350;

  $('.contents .content')
    .on('mouseover', function() {
      $(this).find('span').stop(true).animate({
        opacity: 1
      }, duration);
      $(this).find('p').stop(true).animate({
        opacity: 1,
        left: '0%'
      }, duration);
    })
    .on('mouseout', function() {
      $(this).find('span').stop(true).animate({
        opacity: 0
      }, duration);
      $(this).find('p').stop(true).animate({
        opacity: 0,
        left: '-100%'
      }, duration);
    })

    .on('mouseover', function () {
      $(this).stop(true).animate({
        top: '-50px'
      }, duration);
    })
    .on('mouseout', function () {
      $(this).stop(true).animate({
        top: '0px'
      }, duration);
    });
});