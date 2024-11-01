import LoginPage from '../Pages/loginPage';
import PersonalDetailsPage from '../Pages/personalDetailsPage';
import Header from '../Pages/header';

describe('DemoBlaze URL and Login Test', () => {
    it('Should load the correct page URL and perform login', () => {
        LoginPage.navigate();
        LoginPage.verifyUrl();
        LoginPage.login('Admin', 'admin123');
        Header.verifyUserDropdown();
        PersonalDetailsPage.openMyInfoTab();
        PersonalDetailsPage.updateName('panda', 'sanda');
        PersonalDetailsPage.verifySuccessToast();
        cy.reload();
        Header.verifyUpdated('panda sanda'); 
    });
});

