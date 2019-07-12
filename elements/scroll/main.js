$(document).ready(function () {

  $("#nav-menu-container").on("click", "a", function (event) { // <nav id="nav-menu-container">
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$('.nav-menu a').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {


    if ($(this).parents('.nav-menu').length) {
      $('.nav-menu .menu-active').removeClass('menu-active');
      $(this).closest('li').addClass('menu-active');
    }

  }
});
