/**
 * What to do when an item enters the screen
 * If it is in the screen, isIntersecting will be true.
 * Add a class when it is.
 */
const intersectionCallback = (entries) => {
    for (const entry of entries) { // Loop over all elements that either enter or exit the view.
      if (entry.isIntersecting) { // This is true when the element is in view.
        let animation = entry.target.getAttribute('data-animation');
        let delay = entry.target.getAttribute('data-delay');
        entry.target.classList.add(animation); // Add a class.
        delay && entry.target.classList.add('animate__delay-' + delay + 's'); // Add a class.animate__delay-2s
      }
    }
  }
  
  /**
   * Create a observer and use the instersectionCallback as 
   * the instructions for what to do when an element enters
   * or leaves the view
   */
  const observer = new IntersectionObserver(intersectionCallback);
  
  /**
   * Get all .item elements and loop over them.
   * Observe each individual item.
   */
  const items = document.querySelectorAll('.animate__animated');
  for (const item of items) {
    observer.observe(item);
  }