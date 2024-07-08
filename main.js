const openMenu = () => {
    document.getElementsByTagName('header')[0].style.height = '12rem';
    document.getElementsByTagName('header')[0].style.flexWrap = 'wrap';
    for (let dropdownMenuItem of document.getElementsByClassName('dropdown-menu-item')) {
        dropdownMenuItem.style.display = 'block';
        dropdownMenuItem.style.padding = '0.5rem 1rem';
        dropdownMenuItem.style.textDecoration = 'none';
    };
    document.getElementById('dropdown-menu-items').style.width = '100%';
    document.getElementById('dropdown-menu-items').style.display = 'block';
}

const closeMenu = () => {
    document.getElementsByTagName('header')[0].style.height = '';
    document.getElementsByTagName('header')[0].style.flexWrap = '';
    for (let dropdownMenuItem of document.getElementsByClassName('dropdown-menu-item')) {
        dropdownMenuItem.style.display = '';
        dropdownMenuItem.style.padding = '0.5rem 1rem';
        dropdownMenuItem.style.textDecoration = 'none';
    };
    document.getElementById('dropdown-menu-items').style.width = '100%';
    document.getElementById('dropdown-menu-items').style.display = '';
}

const dropdownMenuIcon = document.getElementById('dropdown-menu-icon');

dropdownMenuIcon.addEventListener('click', openMenu);
document.getElementsByTagName('main')[0].addEventListener('click', closeMenu);
for (let dropdownMenuItem of document.getElementsByClassName('dropdown-menu-item')) {
    dropdownMenuItem.addEventListener('click', closeMenu);
}