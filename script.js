// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-grid img, .gallery-grid video').forEach(media => {
  media.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    if (media.tagName === 'IMG') {
      lightboxImg.src = media.src;
      lightboxImg.style.display = 'block';
      lightboxVideo.style.display = 'none';
    } else {
      lightboxVideo.src = media.querySelector('source').src;
      lightboxVideo.style.display = 'block';
      lightboxImg.style.display = 'none';
    }
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxVideo.pause();
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
  }
});

// Filter Gallery
const filters = document.querySelectorAll('.filter');
const galleryItems = document.querySelectorAll('.gallery-grid img, .gallery-grid video');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    galleryItems.forEach(item => {
      item.style.display = filter === 'all' || item.dataset.type === filter ? 'block' : 'none';
    });
  });
});

// Scroll Animation
const sections = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
