jQuery(document).ready(function( $ ) {
  $( '#my-slider' ).sliderPro({
    width: '100%',             //Ширина слайда.Можно задать в px 500(без кавычек)
    height: '100vh',           //Высота слайда
    arrows: true,             //Стрелки по бокам
    fadeArrows: false,
    buttons: false,            //Точки снизу - пагинация
    waitForLayers: true,
    fade: true,                //Будет ли использоваться затухание
    autoplay: false,            //Автопрокрутка
    autoScaleLayers: false,
    fullScreen: false,            //В правом углу появится кнопка полноэкраннрго режима
  });  
});