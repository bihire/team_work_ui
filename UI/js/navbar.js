// $('.menu-toggle').click(function () {

//     $('.site-nav').toggleClass('site-nav--open', 500);
//     $(this).toggleClass('open');

// })
var el = document.querySelector('.menu-toggle');

el.onclick = function () {
    var el1 = document.querySelector('.site-nav');

    el1.classList.toggle('site-nav--open')
    el.classList.toggle('open')
}