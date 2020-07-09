$(function() {
	$('.slider__product').slick({
	  autoplay: true,
 	  autoplaySpeed: 3000,
  	infinite: true,
  	speed: 1000,
  	fade: true,
  	cssEase: 'linear',
  	responsive: [
    {
      breakpoint: 768,
      settings: {
      	fade: false,
  		infinite: true,
        slidesToShow: 1,
        centerMode: false,
        cssEase: 'ease'
      }
    }
    
    ]
	});
	$('.mobile__slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		infinite: true,
  		dots: true,
  		autoplaySpeed: 3000,
  		autoplay: true,
  		speed: 1000
	});
  $('.statistics_slider_footer').slick({
      infinite: true,
      slidesToShow: 1,
      cssEase: 'linear',
      autoplaySpeed: 0,
      autoplay: true,
      pauseOnHover: false,
      speed: 7000
  });
  $('.statistics_slider').slick({
      infinite: true,
      slidesToShow: 1,
      cssEase: 'linear',
      autoplaySpeed: 0,
      autoplay: true,
      pauseOnHover: false, 
      speed: 7000
  });

  $(window).scroll(function(){
      if ($(this).scrollTop() > 700) {
          $('.fixed_menu').addClass('fixed_m');
      } else {
          $('.fixed_menu').removeClass('fixed_m');
      }
  });

    var jqBar = $('#statistics'); // селектор для вашего блока
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) { 
            jqBarStatus = false;
             //выполнение скрипта jqbar с определенными параметрами 
            const OUT = document.querySelector('.statistics__digit');
            var a = 0;
            setTimeout(function timer() {
              OUT.textContent = a;
              if( a < 71286 ) {
              a+=97;
              setTimeout(timer, 0.00001);
              } else {
              a+=2;
              setTimeout(timer, 3000);
            }
          }, 0); // 1s
        }
    });
});

var b = document.querySelector('.men_mob img');
var d = document.querySelector('.men_mob_close img');
var log = document.querySelector('.logo img');
b.addEventListener('click', function(){
	log.setAttribute('src', 'img/logo_orange.png');
});
d.addEventListener('click', function(){
	log.setAttribute('src', 'img/logo.png');

});

// MOBILE
var lang = document.querySelector('.lang');
var blk = document.querySelector('.blk');
var opnn = document.querySelector('.opnn');
lang.addEventListener('mouseover', function() {
  blk.setAttribute('style', 'display: flex;');
});
lang.addEventListener('mouseout', function() {
  blk.setAttribute('style', 'display:none ;');
});
blk.addEventListener('mouseover', function() {
  blk.setAttribute('style', 'display: flex;');
});
blk.addEventListener('mouseout', function() {
  blk.setAttribute('style', 'display: none;');
});
opnn.addEventListener('mouseover', function() {
  blk.setAttribute('style', 'display: flex;');
});
// MOBILE EXIT

// MOBILE MENU
var k = document.querySelector('.m_m');
var v = document.querySelector('.mn img');
var f = document.querySelector('.mn_close img');

v.addEventListener('click', function(event){
  v.setAttribute('style', 'display: none;');
  f.setAttribute('style', 'display: block;');
  k.setAttribute('style', 'display: block;');
  event.preventDefault();
});

f.addEventListener('click', function(event){
  v.setAttribute('style', 'display: block;');
  f.setAttribute('style', 'display: none;');
  k.setAttribute('style', 'display: none;');
  event.preventDefault();
});
// MOBILE MENU EXIT

// MOBILE FEEDBACK
var formm = document.querySelector('.formm');
var over = document.querySelector('.over');
var p = document.querySelector('.mmf');
var w = document.querySelector('.scw');
var exit = document.querySelector('.exit');

p.addEventListener('click', function(event) {
  formm.setAttribute('style', 'display: block;');
  over.setAttribute('style', 'display: block;');
  event.preventDefault();
});
w.addEventListener('click', function(event) {
  formm.setAttribute('style', 'display: block;');
  over.setAttribute('style', 'display: block;');
  event.preventDefault();
});
exit.addEventListener('click', function(event) {
  formm.setAttribute('style', 'display: none;');
  over.setAttribute('style', 'display: none;');
  event.preventDefault();
});
// MOBILE FEEDBACK EXIT