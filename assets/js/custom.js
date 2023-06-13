const itemsBar = document.querySelectorAll('.hover-shape');
const itemsBarArr = Array.from(itemsBar);

const headbar = document.querySelector('.header_content_pos');
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
          .querySelector('.row.header_content_pos')
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
