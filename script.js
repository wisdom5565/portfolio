'use strict';
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior : 'smooth' })
}

// 스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

console.log(navbarHeight);
document.addEventListener('scroll', () => {
    // console.log('이벤트 발생');
    // console.log(window.scrollY);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--bold');
    } else {
        navbar.classList.remove('navbar--bold');
    }
});

// 스크롤에 따른 메뉴바 고정
const navbarMenu = document.querySelector('.navbar-menu');
navbarMenu.addEventListener('click', (e) => {
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    // console.log(link);
    scrollIntoView(link);
} )

// 연락주세요 버튼 스크롤
const contactBtn = document.querySelector('.home-contact');

contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// 화살표 버튼
const arrow = document.querySelector('.arrow-up');
const home = document.querySelector('.home-container');
const homeHeight = home.getBoundingClientRect().height;



document.addEventListener('scroll', () =>{   
    if(window.scrollY > homeHeight/2) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible')
    }
    home.style.opacity = 1- window.scrollY / homeHeight;
})

arrow.addEventListener('click', () => {
    scrollIntoView('#home');
})


