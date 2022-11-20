$('.reviews2__slider').slick({
  centerMode: true,
  slidesToShow: 3,
  variableWidth: true,
  arrows: false,
  centerMode: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});
$(function(){
  $("#form__phone").mask("+7 (999) 999-99-99");
});


function headerNav() {
  const btn = document.querySelector('.header__burger');
  const headerWrapper = document.querySelector('.main2__up-wrapper');

  btn.addEventListener('click', ()=> {
    headerWrapper.classList.toggle('show')
    btn.classList.toggle('active')
  })

}
headerNav()


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    // when window width is >= 640px
    780: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const swiperPopup = new Swiper('.popup-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slideClass: 'popup-slide',
  wrapperClass: 'popup-wrapper',

  // Navigation arrows
  navigation: {
    nextEl: '.popup-button-next',
    prevEl: '.popup-button-prev',
  },

 
});


function gallery() {
  const roomItems = document.querySelectorAll('.swiper-slide');
  const roomSlide = document.querySelectorAll('.rooms-popup');
  const closePopup = document.querySelectorAll('.close');
  roomItems.forEach(item => {
    item.addEventListener('click', (e )=> {

        let currentBtn = item;
        console.log(currentBtn);
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
     
        if( ! currentBtn.classList.contains('active') ) {
            roomSlide.forEach(function(item) {
                item.classList.remove('active');
            });
            
            roomSlide.forEach(function(item) {
                item.classList.remove('active');
            });
    
            closePopup.forEach(e => {
              e.addEventListener('click' ,()=> {
                currentTab.classList.remove('active')
              })
            })
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    })
  })
}
gallery()