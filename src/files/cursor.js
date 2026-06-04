(function () {
    var overlay = document.createElement('img');
    overlay.id = 'cursor-overlay';
    overlay.src = '/Assets/utility/cursor-hover-interactive.png';
    overlay.alt = '';
    document.body.appendChild(overlay);

    function onMove(e) {
        overlay.style.left = e.clientX + 'px';
        overlay.style.top = e.clientY + 'px';
    }

    function activate() {
        overlay.classList.add('visible');
        document.addEventListener('mousemove', onMove);
    }

    function deactivate() {
        overlay.classList.remove('visible');
        document.removeEventListener('mousemove', onMove);
    }

    document.querySelectorAll('.cursor-hover-interactive').forEach(function (el) {
        el.addEventListener('mouseenter', activate);
        el.addEventListener('mouseleave', deactivate);
    });
}());
