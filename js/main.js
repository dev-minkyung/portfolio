// Sticky Header
const header = document.querySelector(".header");

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


// 메인메뉴 Click to scroll
document.querySelectorAll('nav li').forEach(function(listItem){
  listItem.addEventListener('click', function(e) {
    e.preventDefault();
    const topPosition = document.getElementById(listItem.dataset.page).offsetTop;
    window.scrollTo({
      top: topPosition,
      left: 0,
      behavior: 'smooth'
    })
  })
});


// 메인메뉴 스크롤 위치에 따른 클래스 추가
const navMenu = document.querySelectorAll('nav li');
const contents = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  const sct = this.pageYOffset;

  for(var i = 0; i < contents.length; i++){
    if(contents[i].offsetTop <= sct){
      const index = contents[i].getAttribute('data-num');
      for(var a = 0; a < navMenu.length; a++){
        navMenu[a].classList.remove('active');
      }
      navMenu[index].classList.add('active');
    }
  }
});


// 스크롤 나타내기 효과
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .85
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// footer 올해 연도 자동 입력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();