function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const viewVideoLinks = document.querySelectorAll('.view-video');

  viewVideoLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const godContainer = event.target.closest('.god');
      const image = godContainer.querySelector('.god-img');
      const videoContainer = godContainer.querySelector('.video-container');

      image.style.display = 'none';
      videoContainer.style.display = 'block';

      video.play();
    });
  });
});