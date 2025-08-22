
export function showNav() {

    const navLink = document.querySelector( '.show-nav');
    const nav = document.querySelector( '.top-block__nav');
    const spring = document.querySelector( '.top-block__spring');
    const content = document.querySelector( '.top-block__content');
    const closeLink = document.querySelector( '.nav__close');
    const headerInset = document.querySelector( 'header.inset')
    const html = document.documentElement;

    $(navLink).on('click', function() {
        $(navLink).toggleClass('active');
        $(nav).toggleClass('active');
        $(spring).toggleClass('hidden');
        $(content).toggleClass('hidden');
        $(headerInset).toggleClass('open');
        html.classList.add('no-scroll');
    });
    $(closeLink).on('click', function() {
        $(navLink).removeClass('active');
        $(nav).removeClass('active');
        $(spring).removeClass('hidden');
        $(content).removeClass('hidden');
        $(headerInset).removeClass('open');
        html.classList.remove('no-scroll');
    });

}


export function mainSlider() {
const solutionsSlider = new Swiper('.solutions__slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.solutions__scrollbar',
        draggable: true,
    },
    breakpoints: {
        768: {
            scrollbar: { enabled: false },
            navigation: { enabled: true },
        },
        0: {
            scrollbar: { enabled: true },
            navigation: { enabled: false },
        }
    }
});
}

