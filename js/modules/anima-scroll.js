export default function scrollAnimation(){
  const sections = document.querySelectorAll('.js-scroll')
  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;
  sections[0].classList.add('ativo')
  
  function animaScroll(){
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if(sectionTop < 0){
        section.classList.add('ativo')
      }
    })
  }
  window.addEventListener('scroll', animaScroll)
  }}
  
  scrollAnimation();