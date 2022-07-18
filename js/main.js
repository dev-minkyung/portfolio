// Sticky Header
const header = document.querySelector(".header");

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


// footer 올해 연도 자동 입력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();