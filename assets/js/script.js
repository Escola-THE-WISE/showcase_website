document.addEventListener( 'DOMContentLoaded', function() {
    
    var carouselTimeline = new Splide( '.m--carousel-timeline', {
        direction: 'ttb',
        height: '100%',
        rewind: true,
        rewindByDrag: true,
        arrows: boolean = false,
        pagination: boolean = true,
        paginationKeyboard: boolean = true,
        classes: {
            pagination: 'splide__pagination m--carousel__pagination',
        },
      } );
      
    carouselTimeline.mount();

    var carousel2025 = new Splide( '.m--carousel-2025', {
        type: 'loop',
        arrows: boolean = true,
        paginationKeyboard: boolean = true,
    });
    carousel2025.mount();
    
  } );