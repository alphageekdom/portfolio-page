// Get Full Year
const currentDate = new Date().getFullYear();
document.getElementById('current-year').innerText = currentDate;

// Get the modal
const modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
const images = document.querySelectorAll('.image-container img');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');

images.forEach(function (image) {
  image.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.body.style.overflow = 'hidden';
  });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

// Navbar
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('hamburger-close');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  nav.classList.add('active');
  hamburger.style.display = 'none';
  navbar.classList.add('sticky');
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  hamburger.style.display = 'block';
  nav.classList.remove('active');
  navbar.classList.remove('sticky');
  close.style.display = 'none';
});

// Change navbar background color on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Hide hamburger button when screen width is above 780px
window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
    hamburger.style.display = 'none';
    close.style.display = 'none';
  } else {
    hamburger.style.display = 'block';
  }

  // Remove 'active' class from navbar if it's at the top of the page
  if (window.scrollY === 0) {
    nav.classList.remove('sticky');
    nav.classList.remove('active');
  }
});
