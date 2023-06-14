const itemsBar = document.querySelectorAll('.hover-shape');
const itemsBarArr = Array.from(itemsBar);

const headbar = document.querySelector('.header-content-single');
itemsBarArr.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    itemsBarArr.forEach((item) => {
      gsap.to(item, 0.25, { y: '0px', ease: 'back(2)' });
    });

    gsap.to('.nav-item-shape', 0.5, {
      left:
        item.getBoundingClientRect().left +
        item.getBoundingClientRect().width / 2 -
        document
          .querySelector('.row.header-content-single')
          .getBoundingClientRect().left,
      ease: 'back.out(2)',
    });
    gsap.to(item, 0.5, { y: '-5px', ease: 'back.out(4)' });
  });
  headbar.addEventListener('mouseleave', function () {
    gsap.to(item, 0.5, { y: '0', ease: 'back.out(4)' });
  });
});

headbar.addEventListener('mouseleave', function () {
  gsap.to('.nav-item-shape', 0.5, {
    left: '50%',
    ease: 'back.out(2)',
  });
});

// slider js
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
