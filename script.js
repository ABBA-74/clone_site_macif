const navLinks = document.querySelectorAll('.nav-link');
const navBottom = document.querySelector('.nav-bottom');
function activeNavLink(e) {
  console.log(e.target);
  navLinks.forEach((el) => el.classList.remove('active'));
  e.target.classList.add('active');
  if ([...navLinks].indexOf(e.target) === 0) {
    navBottom.classList.remove('d-none');
    setTimeout(() => {
      navBottom.classList.add('active');
    }, 200);
    console.log([...navLinks].indexOf(e.target));
  } else {
    navBottom.classList.remove('active');
    navBottom.classList.add('d-none');
  }
}

navLinks.forEach((el) => el.addEventListener('click', activeNavLink));
