jQuery(function($) {
  $(document).ready(function() {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // mobile menu {
    $('.menu-button').click(function() {
      $('.menu-content').addClass('visible');
      $('.menu-content').removeClass('hidden');
    });

    $('.menu-content').find('.close').click(function() {
      $('.menu-content').removeClass('visible');
      $('.menu-content').addClass('hidden');
    });

    $('.menu-content').find('a').click(function() {
      $('.menu-content').removeClass('visible');
      $('.menu-content').addClass('hidden');
    });
  });
});
