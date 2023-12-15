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