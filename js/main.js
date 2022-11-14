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