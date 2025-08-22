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
const solutionsSlider2 = new Swiper('.reviews__slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.reviews__scrollbar',
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

export function instructionReveal() {
    const items = document.querySelectorAll('.instruction__item');

    items.forEach(item => {
        const text = item.querySelector('.instruction__text');
        const btn = item.querySelector('.instruction__btn');

        item.addEventListener('mouseenter', () => {
            // Сбросить таймер, если был
            clearTimeout(item._revealTimeout);

            // Ждём окончания transition (0.3s)
            item._revealTimeout = setTimeout(() => {
                if (text) {
                    text.style.position = 'relative';
                    text.style.opacity = '1';
                    text.style.transform = 'translateY(0)';
                }
                if (btn) {
                    btn.style.opacity = '1';
                    btn.style.visibility = 'visible';
                }
            }, 300);
        });

        item.addEventListener('mouseleave', () => {
            clearTimeout(item._revealTimeout);
            if (text) {
                 text.style.position = 'absolute';
                text.style.opacity = '0';
                text.style.transform = 'translateY(30px)';
            }
            if (btn) {
                btn.style.opacity = '0';
                btn.style.visibility = 'hidden';
            }
        });
    });
}

