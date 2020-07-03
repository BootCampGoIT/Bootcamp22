import { homePage } from '../pages/homePage.js'
import { profilePage } from '../pages/profilePage.js';
import { productsPage } from '../pages/productsPage.js'

export const navigation = () => {
    const navigation = document.querySelector('.navigation');//ul
    const activeLink = navigation.querySelector('.navigationLink a');
    const content = document.querySelector('.content');//div
    activeLink.classList.add('activeNavigationLink');//firstElement of ul
    getContent(activeLink);

    const setActiveLink = (e) => {
        e.preventDefault();
        if (e.target.nodeName === "A" && e.target.dataset.navlink) {
            const activeLink = navigation.querySelector('.activeNavigationLink');
            (activeLink) && activeLink.classList.remove('activeNavigationLink');
            e.target.classList.add('activeNavigationLink');
            getContent(e.target);
        } else return
    }

    function getContent(link) {
        const activeLink = link.dataset.navlink;
        switch (activeLink) {
            case "Home":
                homePage(content);
                break;
            case "Products":
                productsPage(content)
                break;
            case "Profile":
                profilePage(content);
                break;
            case "Cart":
                content.innerHTML = '';
                break;
            default:
                homePage(content);
                break;
        }
    }
    console.dir(navigation.children);
    navigation.addEventListener('click', setActiveLink);
}

