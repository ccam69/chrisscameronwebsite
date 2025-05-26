document.addEventListener('DOMContentLoaded', function () {
    const enterPage = document.querySelector('.enter-page');
    const homepage = document.querySelector('.homepage');
    let inactivityTimer = null;
    const TEN_SECONDS = 20 * 60 * 1000;

    function showHomepage() {
        if (enterPage) enterPage.style.display = 'none';
        if (homepage) homepage.style.display = 'block';
        document.body.style.overflow = 'auto';
        document.body.style.background = '';
        document.body.classList.remove('enter-active');
        resetInactivityTimer();
    }

    function showEnterPage() {
        if (enterPage) enterPage.style.display = 'block';
        if (homepage) homepage.style.display = 'none';
        document.body.style.overflow = 'hidden';
        document.body.classList.add('enter-active');
        clearInactivityTimer();
    }

    function resetInactivityTimer() {
        clearInactivityTimer();
        inactivityTimer = setTimeout(() => {
            showEnterPage();
        }, TEN_SECONDS);
    }

    function clearInactivityTimer() {
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
            inactivityTimer = null;
        }
    }

    // --- NEW: Skip enter-page if sessionStorage flag is set ---
    if (sessionStorage.getItem('skipEnter') === '1') {
        showHomepage();
        sessionStorage.removeItem('skipEnter');
    } else {
        showEnterPage();
    }

    if (enterPage) {
        enterPage.addEventListener('click', function () {
            showHomepage();
        });
    }

    if (homepage) {
        homepage.addEventListener('mousemove', resetInactivityTimer);
        homepage.addEventListener('mousedown', resetInactivityTimer);
        homepage.addEventListener('touchstart', resetInactivityTimer);
        homepage.addEventListener('keydown', resetInactivityTimer);
    }

    const homeMenuLink = document.getElementById('homeMenuLink');
    if (homeMenuLink) {
        homeMenuLink.addEventListener('click', function (e) {
            e.preventDefault();
            showHomepage();
            clearInactivityTimer();
        });
    }
});