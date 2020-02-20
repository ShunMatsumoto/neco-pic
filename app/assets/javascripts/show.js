$(function () {

  var duration = 150;

  $('.user-show__box__contents__content ul li')
    .on('mouseover', function() {
      $(this).find('.downer-btn').stop(true).animate({
        opacity: 0,
        top: '-100px'
      }, duration);
  })
    .on('mouseover', function() {
      $(this).find('.user-show__box__contents__content__btns').stop(true).animate({
        // opacity: 1,
        top: '0px'
      }, duration);
  })
    .on('mouseleave', function() {
      $(this).find('.user-show__box__contents__content__btns').stop(true).animate({
        // opacity: 0,
        top: '-100px'
      }, duration);
  })
    .on('mouseover', function() {
      $(this).find('.downer-btn').stop(true).animate({
        opacity: 1,
        top: '0px'
      }, duration);
  })
});