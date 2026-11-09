const box = document.getElementById('autoBox');
const view = document.querySelector('.view');
const home = document.querySelector('.home');
const insert = document.querySelector('.insert');
const layout = document.querySelector('.layout');
const design = document.querySelector('.design');
const homeStyling = document.querySelector('.home-styling');
const viewStyling = document.querySelector('.view-styling');
const insertStyling = document.querySelector('.insert-styling');
const layoutStyling = document.querySelector('.layout-styling');
const designStyling = document.querySelector('.design-styling');
const fontFamily = document.getElementById('fontFamily');
const fontFamilyDropdown = document.querySelector('.font-family-dropdown');

function autoGrow() {
    box.style.height = 'auto';
    box.style.height = box.scrollHeight + 'px';
}

box.addEventListener('input', autoGrow);
window.addEventListener('resize', autoGrow);
autoGrow();

view.addEventListener('click', function() {
    view.style.backgroundColor = 'white';
    viewStyling.style.display = 'block';
    home.style.backgroundColor = 'transparent';
    homeStyling.style.display = 'none';
    insert.style.backgroundColor = 'transparent';
    insertStyling.style.display = 'none';
    layout.style.backgroundColor = 'transparent';
    layoutStyling.style.display = 'none';
    design.style.backgroundColor = 'transparent';
    designStyling.style.display = 'none';
});

home.addEventListener('click', function() {
    view.style.backgroundColor = 'transparent';
    viewStyling.style.display = 'none';
    home.style.backgroundColor = 'white';
    homeStyling.style.display = 'block';
    insert.style.backgroundColor = 'transparent';
    insertStyling.style.display = 'none';
    layout.style.backgroundColor = 'transparent';
    layoutStyling.style.display = 'none';
    design.style.backgroundColor = 'transparent';
    designStyling.style.display = 'none';
});

insert.addEventListener('click', function() {
    view.style.backgroundColor = 'transparent';
    viewStyling.style.display = 'none';
    home.style.backgroundColor = 'transparent';
    homeStyling.style.display = 'none';
    insert.style.backgroundColor = 'white';
    insertStyling.style.display = 'block';
    layout.style.backgroundColor = 'transparent';
    layoutStyling.style.display = 'none';
    design.style.backgroundColor = 'transparent';
    designStyling.style.display = 'none';
});

layout.addEventListener('click', function() {
    view.style.backgroundColor = 'transparent';
    viewStyling.style.display = 'none';
    home.style.backgroundColor = 'transparent';
    homeStyling.style.display = 'none';
    insert.style.backgroundColor = 'transparent';
    insertStyling.style.display = 'none';
    layout.style.backgroundColor = 'white';
    layoutStyling.style.display = 'block';
    design.style.backgroundColor = 'transparent';
    designStyling.style.display = 'none';
});

design.addEventListener('click', function() {
    view.style.backgroundColor = 'transparent';
    viewStyling.style.display = 'none';
    home.style.backgroundColor = 'transparent';
    homeStyling.style.display = 'none';
    insert.style.backgroundColor = 'transparent';
    insertStyling.style.display = 'none';
    layout.style.backgroundColor = 'transparent';
    layoutStyling.style.display = 'none';
    design.style.backgroundColor = 'white';
    designStyling.style.display = 'block';
});

fontFamily.addEventListener('focus', function() {
    fontFamilyDropdown.style.display = 'block';
});

fontFamily.addEventListener('blur', function() {
    fontFamilyDropdown.style.display = 'none';
});