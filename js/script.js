$(document).ready(function() {
   $('.burger').on('click', function(){
      $('nav').toggleClass('nav-active');
      $('.burger').toggleClass('toggle-burger');
   });
});

// toggle & responsive Navigation
// const navSlide = () => {
//    const burger = document.querySelector('.burger') ;
//    const navList = document.querySelector('nav');

//    burger.addEventListener('click',() => {
//       navList.classList.toggle("nav-active");
//       burger.classList.toggle("toggle-burger");
//    });
// };

// navSlide();



// clear form before unload 
window.onbeforeunload = () => {
   for (const form of document.getElementsByTagName("form")) {
      form.reset();
   }
}

