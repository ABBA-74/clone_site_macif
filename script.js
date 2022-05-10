const navLinks = document.querySelectorAll('.nav-link');

function activeNavLink(e) {
  console.log(e.target);
  navLinks.forEach((el) => el.classList.remove('active'));
  e.target.classList.add('active');
}

navLinks.forEach((el) => el.addEventListener('click', activeNavLink));
