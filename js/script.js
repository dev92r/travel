let heading = document.getElementById('main-heading');
let subheading = document.getElementById('main-sub-heading');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    heading.style.left = value * 2 + 'px';
    subheading.style.left = value * -2 + 'px';
})