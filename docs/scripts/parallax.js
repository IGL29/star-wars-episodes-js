export function setParallax () {
  const backgroundParallax = document.querySelector('.parallax');

  document.addEventListener('mousemove', (e) => {
    let offsetX = (e.clientX / window.innerWidth * 20) - 15;
    let offsetY = (e.clientY / window.innerHeight * 10) - 5;
  
    backgroundParallax.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
  })
}