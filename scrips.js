//todo: slider ảnh
const showSubNavs = document.querySelectorAll('.showsubnav');
const subNav = document.querySelector('.subnav');
// console.log(subNav);

function addOpen () {
    subNav.classList.add('open');
};

function removeOpen () {
    subNav.classList.remove('open');
};

for (const showSubNav of showSubNavs) {
    showSubNav.addEventListener('mouseover', addOpen);
};

for (const showSubNav of showSubNavs) {
    showSubNav.addEventListener('mouseout', removeOpen);
}

//todo slider dot

const sliderShow = document.querySelector('.slider__slideshow');
const sliderImgs = document.querySelectorAll('.slider__img');
const dots = document.querySelector('.slider__dots');
const dot = dots.querySelectorAll('.slider__dot');
const sliderImgWidth = sliderImgs[0].offsetWidth;
let index = 0;

//todo automatic slideshow

[...dot].forEach((item) =>
    item.addEventListener('click', function (e) {
        let dotindexx = parseInt(e.target.dataset.dotindex)
        index = dotindexx;
        [...dot].forEach((el) => el.classList.remove('active'));
        sliderShow.style = `transform: translateX(${-1 * index * sliderImgWidth - 1}px);
                            transition-duration: 200ms;`;
    })
);

setInterval(function () {
    [...dot].forEach((el) => el.classList.remove('active'));
    dot[index].classList.add('active');
    sliderShow.style = `transform: translateX(${-1 * index * sliderImgWidth - 1}px);
                        transition-duration: 200ms;`;
    index++;
    console.log(index)
    if (index >= 6)
    index = 0;
}, 2500);

// todo can thiệp js vào @media screen
let imgNews = document.querySelectorAll('.content__main--each-img');
let imgSliders = document.querySelectorAll('.slider__main--img');
let x = window.matchMedia("(max-width: 649px)");


function removeHeight(x) {
    if (x.matches) { // If media query matches
        for (const imgSlider of imgSliders) {
            imgSlider.style.removeProperty('height');
        }
    }
}

// removeHeight(x) // Call listener function at run time
// x.addListener(removeHeight) // Attach listener function on state changes

// todo hiện menu mobile
$(document).ready(function() {
    $('.topbar__mobile-btn, .topbar__mobile--background').click(function() {
        $('.topbar__mobile-btn').toggleClass("shownav");
        $('.topbar__mobile--background').toggleClass('slide--box');
        $('.topbar__mobile--slide-box').toggleClass('slide--box');
    })
});


