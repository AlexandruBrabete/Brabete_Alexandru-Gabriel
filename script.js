//Funcție pentru SlideShow (reduce toate imaginiile la una, urmând să le afișeze progresiv

function startSlideShow() {
  var images = document.querySelectorAll('#monitorizareResurse .image-container img');
  var currentIndex = 0;

  setInterval(function () {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 3000);
}
