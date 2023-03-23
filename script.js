const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
});
