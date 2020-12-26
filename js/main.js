// Scroll
$(document).ready(function () {
  $(".scrolling").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
  });
});
// Section-header
let headerMenu = document.getElementById('headerMenu');
let Slist = document.getElementById('list');
let counter = 0;
function openMenu() {
  counter += 1;
  if (counter > 1) {
    Slist.classList.remove('Slist-active');
    headerMenu.classList.remove('menu-active');
    counter = 0;
  } else {
    Slist.classList.add('Slist-active');
    headerMenu.classList.add('menu-active');
  }
}
// Section-4
let line = document.getElementById('line');
let current = 0;
function nextSlide() {
  let widthNow = $('.section-4').width();
  if (widthNow > 1201) {
    current > 671 ? current = -336 : 0;
  } else if (widthNow > 993) {
    current > 1007 ? current = -336 : 0;
  } else if (widthNow < 993) {
    current > 1343 ? current = -336 : 0;
  }
  current+=336;
  line.style.transform = 'translateX(-' + current + 'px)';
}
function prevSlide() {
  let widthNow = $('.section-4').width();
  if (widthNow > 1201) {
    current == 0 ? current = 1008 : 0;
  } else if (widthNow > 993) {
    current == 0 ? current = 1344 : 0;
  } else if (widthNow < 993) {
    current == 0 ? current = 1680 : 0;
  }
  current -= 336;
  line.style.transform = 'translateX(-' + current + 'px)';
}