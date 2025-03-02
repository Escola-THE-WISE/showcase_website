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

    document.querySelectorAll("ul.m--carousel-timeline__pagination-container li").forEach(li => {
        li.classList.add("m--carousel-timeline__pagination-item");
    });

    paginations = document.querySelectorAll('.m--carousel-timeline__pagination')

    paginations.forEach((pagination, index) => {
        pagination.addEventListener('click', function() {
    
            // Remover 'is-active' de todos os itens da lista
            document.querySelectorAll('.m--carousel-timeline__pagination-item').forEach(item => {
                item.classList.remove('is-active');
            });
    
            // Se o botão de paginação clicado tem 'is-active', aplicar ao item correspondente
            if (pagination.classList.contains('is-active')) {
                document.querySelectorAll('.m--carousel-timeline__pagination-item')[index].classList.add('is-active');
            }
    
            // Selecionar o container da timeline
            const carouselTimeline = document.querySelector(".m--carousel-timeline__pagination-container");
    
            if (carouselTimeline) {
                // Calcula a posição baseada no índice: começa em 33% e aumenta 33% por índice
                const translateValue = -33 * (index - 1);
    
                // Aplica a transformação no eixo Y
                carouselTimeline.style.transform = `translateY(${translateValue}%)`;
                carouselTimeline.style.transition = "transform 0.3s ease-in-out"; // Suaviza a transição
            }
        });
    });
} );

