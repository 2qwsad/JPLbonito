// Optional navigation enhancement. The page and WhatsApp links work without JavaScript.
const navigationLinks = [...document.querySelectorAll('.main-nav a')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        const isCurrent = link.hash === `#${entry.target.id}`;
        if (isCurrent) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) sectionObserver.observe(section);
  }
}
