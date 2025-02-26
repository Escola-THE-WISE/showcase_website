document.addEventListener( 'DOMContentLoaded', function() {
    
    var carouselTimeline = new Splide( '.m--carousel-timeline', {
        direction: 'ttb',
        height: '100%',
        rewind: false,
        rewindByDrag: false,
        arrows: boolean = false,
        pagination: boolean = true,
        paginationKeyboard: boolean = true,
        classes: {
            pagination: 'splide__pagination m--carousel__pagination-container m--carousel-timeline__pagination-container',
            page      : 'splide__pagination__page m--carousel__pagination m--carousel-timeline__pagination',
        }
      } );
      
    carouselTimeline.mount();

    
    var carousels = document.querySelectorAll('.m--carousel-default');

    carousels.forEach(carousel =>{
        var carouselMount = new Splide( carousel, {
            type: 'loop',
            arrows: boolean = false,
            paginationKeyboard: boolean = true,
            classes: {
                pagination: 'splide__pagination m--carousel__pagination-container',
                page      : 'splide__pagination__page m--carousel__pagination',
            }
        });
        carouselMount.mount();
    })
      
    
} );

