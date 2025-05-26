const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', function () {
    if (menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuBtn.textContent = 'menu';
    } else {
        menuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
        menuBtn.textContent = 'close';
    }
});

menuOverlay.addEventListener('click', function (e) {
    if (e.target === this) {
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuBtn.textContent = 'menu';
    }
});
