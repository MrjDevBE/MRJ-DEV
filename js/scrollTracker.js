let observer;
let layoutIdleTimeout;
let isMouseOverNavbar = false;

if (window.isNavbarPinned === undefined) {
    window.isNavbarPinned = false;
}

export function setNavbarPinState(pinnedState) {
    window.isNavbarPinned = pinnedState;

    const topRow = document.querySelector(".top-row");
    if (!topRow) return;

    if (window.isNavbarPinned) {
        clearTimeout(layoutIdleTimeout);
        topRow.classList.remove("top-row-hidden");
    } else {
        clearTimeout(layoutIdleTimeout);
        layoutIdleTimeout = setTimeout(() => {
            if (!isMouseOverNavbar) {
                topRow.classList.add("top-row-hidden");
            }
        }, 800);
    }
}

export function initScrollObserver() {
    const sections = document.querySelectorAll(".scroll-section");
    const options = { root: null, rootMargin: "0px", threshold: 0.4 };

    if (observer) observer.disconnect();

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetColor = entry.target.getAttribute("data-bg");
                document.documentElement.style.setProperty('--bg-current', targetColor);
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
}

export function initNavbarAutohide() {
    clearTimeout(layoutIdleTimeout);

    const topRow = document.querySelector(".top-row");
    if (!topRow) return;

    if (window.isNavbarPinned) {
        topRow.classList.remove("top-row-hidden");
        return;
    }

    const resetIdleTimer = () => {
        if (window.isNavbarPinned) return;

        clearTimeout(layoutIdleTimeout);

        const currentTopRow = document.querySelector(".top-row");
        if (!currentTopRow) return;

        currentTopRow.classList.remove("top-row-hidden");

        layoutIdleTimeout = setTimeout(() => {
            if (!isMouseOverNavbar && !window.isNavbarPinned && currentTopRow) {
                currentTopRow.classList.add("top-row-hidden");
            }
        }, 800);
    };

    if (window._globalResetTimer) {
        document.removeEventListener("mousemove", window._globalResetTimer);
        document.removeEventListener("mousedown", window._globalResetTimer);
        document.removeEventListener("keydown", window._globalResetTimer);
        document.removeEventListener("touchstart", window._globalResetTimer);
        window.removeEventListener("scroll", window._globalResetTimer);
    }

    document.addEventListener("mousemove", resetIdleTimer, { passive: true });
    document.addEventListener("mousedown", resetIdleTimer, { passive: true });
    document.addEventListener("keydown", resetIdleTimer, { passive: true });
    document.addEventListener("touchstart", resetIdleTimer, { passive: true });
    window.addEventListener("scroll", resetIdleTimer, { passive: true });

    topRow.removeEventListener("mouseenter", window._navEnter);
    topRow.removeEventListener("mouseleave", window._navLeave);

    window._navEnter = () => {
        isMouseOverNavbar = true;
        const t = document.querySelector(".top-row");
        if (t) t.classList.remove("top-row-hidden");
        clearTimeout(layoutIdleTimeout);
    };

    window._navLeave = () => {
        isMouseOverNavbar = false;
        resetIdleTimer();
    };

    topRow.addEventListener("mouseenter", window._navEnter);
    topRow.addEventListener("mouseleave", window._navLeave);

    window._globalResetTimer = resetIdleTimer;
    resetIdleTimer();
}

export function destroyScrollObserver() {
    if (observer) observer.disconnect();
    clearTimeout(layoutIdleTimeout);
}

window.setNavbarPinState = setNavbarPinState;
window.initNavbarAutohide = initNavbarAutohide;