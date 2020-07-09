var languages = document.querySelector('.languages');
var blk_lang = document.querySelector('.block__languages');
var opn = document.querySelector('.opn');

languages.addEventListener('mouseover', function() {
	blk_lang.setAttribute('style', 'display: flex;');
});

languages.addEventListener('mouseout', function() {
	blk_lang.setAttribute('style', 'display:none ;');
});

blk_lang.addEventListener('mouseover', function() {
	blk_lang.setAttribute('style', 'display: flex;');
});

blk_lang.addEventListener('mouseout', function() {
	blk_lang.setAttribute('style', 'display: none;');
});

opn.addEventListener('mouseover', function() {
	blk_lang.setAttribute('style', 'display: flex;');
});


var feedback = document.querySelector('.feedback');
var feedback_footer = document.querySelector('.feedback__footer');
var form = document.querySelector('.form');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close__form');

feedback.addEventListener('click', function(event) {
	form.setAttribute('style', 'display: block;');
	overlay.setAttribute('style', 'display: block;');
	event.preventDefault();
});

feedback_footer.addEventListener('click', function(event) {
	form.setAttribute('style', 'display: block;');
	overlay.setAttribute('style', 'display: block;');
	event.preventDefault();
});

close.addEventListener('click', function(event) {
	form.setAttribute('style', 'display: none;');
	overlay.setAttribute('style', 'display: none;');
	event.preventDefault();
});


var b = document.querySelector('.men_mob img');
var c = document.querySelector('.mobile__menu');
var d = document.querySelector('.men_mob_close img');
var plus = document.querySelector('.plus');

b.addEventListener('click', function(event){
	b.setAttribute('style', 'display: none;');
	d.setAttribute('style', 'display: block;');
	c.setAttribute('style', 'display: block;');
	plus.setAttribute('style', 'background: #fff;');
	event.preventDefault();

});

d.addEventListener('click', function(event){
	b.setAttribute('style', 'display: block;');
	d.setAttribute('style', 'display: none;');
	c.setAttribute('style', 'display: none;');
	plus.setAttribute('style', 'background: #F2AA3E;');
	event.preventDefault();
});

var a = document.querySelector('.mobile__menu_feedback');

a.addEventListener('click', function(event) {
	form.setAttribute('style', 'display: block;');
	overlay.setAttribute('style', 'display: block;');
	event.preventDefault();
});

close.addEventListener('click', function(event) {
	form.setAttribute('style', 'display: none;');
	overlay.setAttribute('style', 'display: none;');
	event.preventDefault();
});