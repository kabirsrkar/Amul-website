// Core configuration
const totalFrames = 240;
const images = [];
let loadedCount = 0;
let targetFrame = 0;
let currentFrame = 0;

// DOM Elements
const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percentage');
const navDots = document.querySelectorAll('.nav-dot');
const sections = document.querySelectorAll('.story-section');
const replayBtn = document.getElementById('replay-btn');
const animationWrapper = document.querySelector('.scroll-animation-wrapper');
const navbar = document.querySelector('.global-navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Pad numbers to 3 digits (e.g. 1 -> 001)
const padIndex = (num) => String(num).padStart(3, '0');

// Generate image path for a given index
const getFramePath = (index) => `frames/ezgif-frame-${padIndex(index)}.jpg`;

// Initialize Canvas dimensions
function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
initCanvas();

// Image preload logic
function preloadImages() {
  return new Promise((resolve) => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        const percent = Math.round((loadedCount / totalFrames) * 100);
        progressBar.style.width = `${percent}%`;
        progressPercent.textContent = percent;

        if (loadedCount === totalFrames) {
          setTimeout(() => {
            hideLoader();
            resolve();
          }, 600);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          hideLoader();
          resolve();
        }
      };
      images.push(img);
    }
  });
}

function hideLoader() {
  loader.style.opacity = 0;
  loader.style.pointerEvents = 'none';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 800);
}

// Draw image with cover behavior (like object-fit: cover)
function drawImageProp(ctx, img, x = 0, y = 0, w = canvas.width, h = canvas.height, offsetX = 0.5, offsetY = 0.5) {
  const iw = img.width;
  const ih = img.height;
  const r = Math.min(w / iw, h / ih);
  let nw = iw * r;
  let nh = ih * r;
  let cx, cy, cw, ch;
  let ar = 1;

  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
  nw *= ar;
  nh *= ar;

  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  ctx.drawImage(
    img, 
    Math.max(0, cx), 
    Math.max(0, cy), 
    Math.min(iw, cw), 
    Math.min(ih, ch), 
    x, 
    y, 
    w, 
    h
  );
}

// Scroll Handling
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  // Toggle navbar background contrast
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Animation frame calculation
  if (!animationWrapper) return;
  const wrapperOffsetTop = animationWrapper.offsetTop;
  const wrapperHeight = animationWrapper.offsetHeight;
  const maxScroll = wrapperHeight - window.innerHeight;
  
  if (maxScroll <= 0) return;

  const progress = (scrollTop - wrapperOffsetTop) / maxScroll;
  const scrollFraction = Math.max(0, Math.min(1, progress));
  
  targetFrame = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));
});

// Linear interpolation (lerp) for smooth frame transitions
const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

// Render Loop
function updateAnimation() {
  currentFrame = lerp(currentFrame, targetFrame, 0.15);
  
  const activeIndex = Math.round(currentFrame);
  
  if (images[activeIndex] && images[activeIndex].complete) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImageProp(ctx, images[activeIndex], 0, 0, canvas.width, canvas.height);
  }
  
  requestAnimationFrame(updateAnimation);
}

// Window resizing
window.addEventListener('resize', () => {
  initCanvas();
  const activeIndex = Math.round(currentFrame);
  if (images[activeIndex] && images[activeIndex].complete) {
    drawImageProp(ctx, images[activeIndex], 0, 0, canvas.width, canvas.height);
  }
});

// Dot Navigation click behavior
navDots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const targetIdx = e.target.getAttribute('data-target');
    const targetSec = document.getElementById(`sec-${targetIdx}`);
    if (targetSec) {
      // scroll to target section with offset
      const topOffset = targetSec.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  });
});

// Navigation dot update helper
function updateNavDots(activeIndex) {
  navDots.forEach(dot => {
    if (dot.getAttribute('data-target') === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Update Active Navbar Link helper
function updateActiveNavLink(activeSec) {
  navLinks.forEach(link => {
    if (link.getAttribute('data-sec') === activeSec) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Intersection Observer for highlighting sections and revealing cards
const observerOptions = {
  root: null,
  rootMargin: '-80px 0px -40% 0px', // Accounts for navbar height
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      if (id.startsWith('sec-')) {
        const idx = id.split('-')[1];
        updateNavDots(idx);
        updateActiveNavLink('story');
        const card = entry.target.querySelector('.story-card');
        if (card) card.classList.add('visible');
      } else {
        updateActiveNavLink(id);
      }
    } else {
      if (id.startsWith('sec-')) {
        const card = entry.target.querySelector('.story-card');
        if (card) card.classList.remove('visible');
      }
    }
  });
}, observerOptions);

// Observe story chapters
sections.forEach(sec => observer.observe(sec));

// Observe product details sections
const benefitsSection = document.getElementById('benefits');
const ingredientsSection = document.getElementById('ingredients');
const testimonialsSection = document.getElementById('testimonials');

if (benefitsSection) observer.observe(benefitsSection);
if (ingredientsSection) observer.observe(ingredientsSection);
if (testimonialsSection) observer.observe(testimonialsSection);

// Replay button logic
if (replayBtn) {
  replayBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Start everything
preloadImages().then(() => {
  if (images[0] && images[0].complete) {
    drawImageProp(ctx, images[0], 0, 0, canvas.width, canvas.height);
  }
  updateAnimation();
});
