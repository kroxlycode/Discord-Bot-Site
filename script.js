function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});

link2.addEventListener("click", () => {
  scrollToElement(".header", 1);
});

window.onscroll = function () {
  var yukariCikBtn = document.getElementById("yukariCikBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    yukariCikBtn.style.display = "block";
  } else {
    yukariCikBtn.style.display = "none";
  }
};

function yukariCik() {
  var yukariCikInterval = setInterval(function () {
    var yukariKonum = window.scrollY;
    if (yukariKonum > 0) {
      window.scrollTo(0, yukariKonum - 50);
    } else {
      clearInterval(yukariCikInterval);
    }
  }, 15);
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById('menuIcon');
  const menuOverlay = document.getElementById('Overlay');

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('change');
    if (menuOverlay.style.height === '100%') {
      menuOverlay.style.height = '0%';
    } else {
      menuOverlay.style.height = '100%';
    }
  });
});