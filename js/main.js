// Sticky Header
const header = document.querySelector(".header");

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


document.querySelectorAll('nav li').forEach(function(listItem){
  listItem.addEventListener('click', function() {
    const topPosition = document.getElementById(listItem.dataset.page).offsetTop;
    window.scrollTo({
      top: topPosition,
      left: 0,
      behavior: 'smooth'
    })
  })
})

/*
const menuEls = document.querySelectorAll('.main_menu a');

menuEls.forEach ( function(menuEl) {
  menuEl.addEventListner ('click', function() {
    menuEl.classList.add("active");
  });
});
*/

// footer 올해 연도 자동 입력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();