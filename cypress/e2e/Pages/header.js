import { USER_DROPDOWN } from '../locators/headerElements';

class Header {
    get userDropdownElement() {
        return cy.get(USER_DROPDOWN);
    }

    get dropdownMenu() {
        return cy.get('ul.oxd-dropdown-menu');
    }

    verifyUserDropdown() {
        this.userDropdownElement.should('be.visible').click();

        // Verify that the dropdown menu is visible and contains 'Logout'
        this.dropdownMenu.should('be.visible').and('contain', 'Logout');
    }

    verifyUpdated(username) {
        this.userDropdownElement.should('be.visible').and('contain', username);
    }
}

export default new Header();
