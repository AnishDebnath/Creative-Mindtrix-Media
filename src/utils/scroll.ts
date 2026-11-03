export function scrollToId(id: string, offset = 0): void {
  // Ensure body overflow isn't locked by mobile menus
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }

  const tryScroll = () => {
    const el = document.getElementById(id);
    if (!el) return false;

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const targetY = Math.max(0, elementPosition - offset);

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
    return true;
  };

  // Immediate attempt
  if (!tryScroll()) {
    // Retry polling as DOM mounts or transitions finish
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (tryScroll() || attempts >= 25) {
        clearInterval(interval);
      }
    }, 40);
  }
}

