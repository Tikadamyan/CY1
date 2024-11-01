import { USERNAME_INPUT, PASSWORD_INPUT, LOGIN_BUTTON } from '../locators/loginElements';

class LoginPage {
    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    verifyUrl() {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    login(username, password) {
        cy.get(USERNAME_INPUT).type(username);
        cy.get(PASSWORD_INPUT).type(password);
        cy.get(LOGIN_BUTTON).click();
    }

}

export default new LoginPage();

