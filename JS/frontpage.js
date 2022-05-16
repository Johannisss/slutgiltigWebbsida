

//tar reda på hur långt ifrån ett element ligger ifrån toppen av webbsidan
function getTopOffset(el) {
  const rect = el.getBoundingClientRect();
  let distanceToTop = rect.top + window.scrollY;
  return distanceToTop
}

//gör så att man inte kan scrolla förbi footern
document.addEventListener('scroll', () => {
  let footerPosition = getTopOffset(document.getElementById("frontpageFooter"));
  let maxScroll = footerPosition - (screen.height - 400);
  if (window.scrollY > maxScroll) {
    window.scrollTo(0, maxScroll);
  }
})