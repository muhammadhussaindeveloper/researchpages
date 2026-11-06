const box = document.getElementById('autoBox');
const view = document.querySelector('.view');
const home = document.querySelector('.home');
const insert = document.querySelector('.insert');
const layout = document.querySelector('.layout');
const design = document.querySelector('.design');

function autoGrow() {
    box.style.height = 'auto';
    box.style.height = box.scrollHeight + 'px';
}

box.addEventListener('input', autoGrow);
window.addEventListener('resize', autoGrow);
autoGrow();

function viewTabClick() {
    home.style.border = '1px solid white';
    view.style.border = '1px solid black';
    layout.style.border = '1px solid white';
    design.style.border = '1px solid white';
    insert.style.border = '1px solid white';
}

function homeTabClick() {
    home.style.border = '1px solid black';
    view.style.border = '1px solid white';
    layout.style.border = '1px solid white';
    design.style.border = '1px solid white';
    insert.style.border = '1px solid white';
}

function insertTabClick() {
    home.style.border = '1px solid white';
    view.style.border = '1px solid white';
    layout.style.border = '1px solid white';
    design.style.border = '1px solid white';
    insert.style.border = '1px solid black';
}

function layoutTabClick() {
    home.style.border = '1px solid white';
    view.style.border = '1px solid white';
    layout.style.border = '1px solid black';
    design.style.border = '1px solid white';
    insert.style.border = '1px solid white';
}

function designTabClick() {
    home.style.border = '1px solid white';
    view.style.border = '1px solid white';
    layout.style.border = '1px solid white';
    design.style.border = '1px solid black';
    insert.style.border = '1px solid white';
}

view.addEventListener('click', viewTabClick);
home.addEventListener('click', homeTabClick);
insert.addEventListener('click', insertTabClick);
layout.addEventListener('click', layoutTabClick);
design.addEventListener('click', designTabClick);