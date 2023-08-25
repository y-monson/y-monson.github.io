const toggles = document.querySelectorAll('.btn-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})