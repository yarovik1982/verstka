const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop:true,
  grid: {
    rows: 2,
  },
  spaceBetween: 15,
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    
    769: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    }
  }
});

const filter = () => {
  const btns = document.querySelectorAll('.filter-btn')

  btns.forEach(btn => {
     btn.addEventListener('click', e => {
        const current = e.target
        btns.forEach(btn => {
           btn.classList.remove('filter-btn--active')
           current.classList.add('filter-btn--active')
        })
     })
  })
}
filter()