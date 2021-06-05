window.addEventListener('DOMContentLoaded', function() {
  
  document.body.classList.remove('no-js');
  
  document.querySelector('#burger').addEventListener('click', function() {
    document.body.classList.toggle('menu-active');
  })
  
  const mySwiperEl = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  
  
  
  // ________Accordion_______
  $( function() {
      $( "#accordion" ).accordion({
        collapsible: true,
      });
  });
})