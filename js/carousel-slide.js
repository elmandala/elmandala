// Esperar a que se cargue el DOM
$(document).ready(function () {

    // Inicializar el carrusel
    $('.carousel').carousel({
      interval:10000
    });
  
    // Manejar los eventos de clic de los controles
    $('.carousel-control-prev').click(function() {
      $('.carousel').carousel('prev');
    });
  
    $('.carousel-control-next').click(function() {
      $('.carousel').carousel('next');
    });
  
    // Actualizar los indicadores al cambiar de diapositiva
    $('.carousel').on('slid.bs.carousel', function () {
      var currentIndex = $('.carousel-item.active').index() + 1;
      $('.carousel-indicators li').removeClass('active');
      $('.carousel-indicators li:nth-child(' + currentIndex + ')').addClass('active');
    });
  
  });
  