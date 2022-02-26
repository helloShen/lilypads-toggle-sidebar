function lilypadsToggleSidebarInit() {
    const sidebar = document.querySelector('.lilypads-toggle-sidebar');
    const menu = document.querySelector('.lilypads-toggle-sidebar i.menu');
    menu.addEventListener('click', () => {
        sidebar.classList.toggle('hide');
    });
}

export const lilypadsToggleSidebar = {
    init: lilypadsToggleSidebarInit
};

