import { MY_INFO_TAB } from '../locators/sidebarElements';
import { FIRST_NAME_INPUT, LAST_NAME_INPUT, SAVE_BUTTON } from '../locators/personalDetailsElements';
import { SUCCESS_TOAST } from '../locators/notificationElements';

class PersonalDetailsPage {
    openMyInfoTab() {
        cy.get(MY_INFO_TAB).click();
    }

    updateName(firstName, lastName) {
        cy.get(FIRST_NAME_INPUT).clear().type(firstName);
        cy.get(LAST_NAME_INPUT).clear().type(lastName);
        cy.get(SAVE_BUTTON).first().click();
    }

    verifySuccessToast() {
        cy.get(SUCCESS_TOAST).should('be.visible').and('contain', 'Successfully Updated');
    }
}

export default new PersonalDetailsPage();
