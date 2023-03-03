function triggerDropdownMenu(dropdown) {
    const button = dropdown.querySelectorAll('button')[0];
    const menu = dropdown.querySelectorAll('ul')[0]

    button.addEventListener('click', () => {
        menu.classList.toggle('show');
    })
};

module.exports = triggerDropdownMenu