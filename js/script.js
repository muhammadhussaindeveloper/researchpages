const box = document.getElementById('autoBox');

function autoGrow() {
    box.style.height = 'auto';
    box.style.height = box.scrollHeight + 'px';
}

box.addEventListener('input', autoGrow);
window.addEventListener('resize', autoGrow);
autoGrow();