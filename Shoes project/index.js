/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SWIPER
var swiperImage = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween:150,
    grabCursor: true,
    centeredSlides:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type:'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  })

  let swiperTitle = new Swiper('.home_titles', {
    loop: true,
    spaceBetween:150,
    grabCursor: true,
    centeredSlides:true,
    
  
   
    
  })
 swiperImage.controller.control=swiperTitle
 swiperTitle.controller.control=swiperImage


 /*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)