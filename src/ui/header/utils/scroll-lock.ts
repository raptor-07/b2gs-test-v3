let scrollPosition = 0;

export function lockScroll() {
  // Save current scroll position
  scrollPosition = window.scrollY;

  // Add styles to prevent scrolling
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
}

export function unlockScroll() {
  // Remove styles and restore scroll position
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");
  document.body.style.removeProperty("width");
  
  window.scrollTo(0, scrollPosition);
}
