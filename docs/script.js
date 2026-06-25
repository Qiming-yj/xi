// ========== 组长负责：轮播图逻辑（淡入专用JS，匹配淡入CSS） ==========
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const total = items.length;
let index = 0;
let timer;

// 更新激活项
function updateCarousel() {
  items.forEach(item => {
    item.classList.remove('active');
  })
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  })
  items[index].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % total;
  updateCarousel();
}
function prevSlide() {
  index = (index - 1 + total) % total;
  updateCarousel();
}

function autoPlay() {
  timer = setInterval(nextSlide, 4000);
}
function stopPlay() {
  clearInterval(timer);
}

nextBtn.addEventListener('click', () => {
  stopPlay();
  nextSlide();
  autoPlay();
})
prevBtn.addEventListener('click', () => {
  stopPlay();
  prevSlide();
  autoPlay();
})

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    stopPlay();
    index = i;
    updateCarousel();
    autoPlay();
  })
})

const carouselBox = document.querySelector('.carousel');
carouselBox.addEventListener('mouseenter', stopPlay);
carouselBox.addEventListener('mouseleave', autoPlay);

updateCarousel();
autoPlay();

// ==================== 下方卡片跳转代码完全不动 ====================
// 作品卡片点击跳转
document.addEventListener('click', function(e) {
  const card = e.target.closest('.work-card');
  if (card) {
    const page = card.getAttribute('data-page');
    if (page) window.location.href = page;
  }
});

// 卡片鼠标手型
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = '.work-card { cursor: pointer; }';
  document.head.appendChild(style);
});