const SCROLL_DURATION_MS = 800;
const SCROLL_OFFSET_PX = 80;

let activeAnimationFrame: number | null = null;

function easeInOutCubic(progress: number) {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  }

  return 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function stopActiveScroll() {
  if (activeAnimationFrame === null) {
    return;
  }

  window.cancelAnimationFrame(activeAnimationFrame);
  activeAnimationFrame = null;
}

function animateScrollTo(targetY: number, duration: number) {
  stopActiveScroll();

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = window.performance.now();

  const tick = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      activeAnimationFrame = window.requestAnimationFrame(tick);
      return;
    }

    activeAnimationFrame = null;
  };

  activeAnimationFrame = window.requestAnimationFrame(tick);
}

export function scrollToHash(hash: string, reducedMotion: boolean) {
  if (!hash.startsWith("#")) {
    return false;
  }

  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const targetY = Math.max(
    0,
    window.scrollY + target.getBoundingClientRect().top - SCROLL_OFFSET_PX
  );

  if (reducedMotion) {
    stopActiveScroll();
    window.scrollTo(0, targetY);
    return true;
  }

  animateScrollTo(targetY, SCROLL_DURATION_MS);
  return true;
}
