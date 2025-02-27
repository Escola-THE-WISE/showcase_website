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
            pagination: 'm--carousel__pagination-container m--carousel-timeline__pagination-container',
            page      : 'splide__pagination__page m--carousel__pagination m--carousel-timeline__pagination',
        }
      } );
      
    carouselTimeline.mount();

    
    var carousels = document.querySelectorAll('.m--carousel-default');

    carousels.forEach(carousel =>{
        var carouselMount = new Splide( carousel, {
            type: 'loop',
            arrows: boolean = true,
            paginationKeyboard: boolean = true,
            classes: {
                pagination: 'splide__pagination m--carousel__pagination-container',
                page      : 'splide__pagination__page m--carousel__pagination',
                arrows: 'splide__arrows m--carousel__arrow-container',
		        arrow : 'splide__arrow m--carousel__arrow',
		        prev  : 'splide__arrow--prev m--carousel__arrow-prev',
		        next  : 'splide__arrow--next m--carousel__arrow-next',
            }
        });
        carouselMount.mount();
    })
      
    document.querySelectorAll('.m--carousel-timeline__pagination').forEach(pagination =>{
        pagination.addEventListener('click', function(){

            document.querySelectorAll(' ').forEach(itemLista =>{

                if(pagination.classList.contains('is-active')){
                    itemLista.classList.add('is-active');
                }
                else{
                    itemLista.classList.remove('is-active');
                }
            })
        });

    });
} );

