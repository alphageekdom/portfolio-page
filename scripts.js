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
