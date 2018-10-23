//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.header__btn').click(function() {
  $('.header__menu').slideToggle();
});
