document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.getElementById('heroBg');
    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (parallaxBg && !motionPref.matches) {
        window.addEventListener('scroll', () => {
            const viewportOffset = window.pageYOffset;
            requestAnimationFrame(() => {
                parallaxBg.style.transform = `translate3d(0, \${viewportOffset * 0.35}px, 0)`;
            });
        });
    }
});