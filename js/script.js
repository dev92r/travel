let heading = document.getElementById('main-heading');
let subheading = document.getElementById('main-sub-heading');



window.addEventListener('scroll', function() {
    let value = window.scrollY;
    heading.style.left = value * 2 + 'px';
    subheading.style.left = value * -2 + 'px';
})


const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.sliders');

const appearOptions = {
    threshold:0,
    rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });    

  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });
      