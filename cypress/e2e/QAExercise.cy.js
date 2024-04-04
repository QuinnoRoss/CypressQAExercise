/// <reference types = "Cypress" />

import QAExercisePage from "./pages/qaExercisePage"

describe('User login', function () {

    before(function () {
        cy.clearAllCookies()
        cy.visit('https://www.telusinternational.ai/cmp')
    })

    const qaExercisePage = new QAExercisePage()

    it('Login functionality', function () {
        //Populating the email address
        qaExercisePage.enterEmail('velandresq@gmail.com')
        //Tap the continue button
        qaExercisePage.clickContinue()
        //Populating the password
        qaExercisePage.enterPassword('Test12345!!!!!')
        //Tap the sign-in button
        qaExercisePage.clickSignIn()
    })

    it('Navigating to the my profile link', function () {
        //Clicking the user icon at the top right screen
        qaExercisePage.clickUserIcon()
        //Clicking the My Profile
        qaExercisePage.clickMyProfile()
        //URL Verification
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/basic-info')
    })

    it('Editing the contact info and location', function () {
        //Clicking the edit button for contact info
        qaExercisePage.clickEditButtonContactInfo()

        const randomizer = () => Cypress._.random(99)
        const id = randomizer()
        const randomText = ` TEST${id}`

        //Middle Name populating text
        qaExercisePage.enterMiddleName(randomText)
        //Click the save button
        qaExercisePage.clickSaveButtonContactInfo()


        //Verify that the middle name is updated
        cy.get('div.row.pb-2 > div > div').invoke('text').then((text) => {
            expect(text).to.contain(randomText);
        });

        //Click the edit button fo location info
        qaExercisePage.clickEditButtonLocationInfo()
        //Street Address populating text
        qaExercisePage.enterStreetAddress(randomText)
        //Click the save button
        qaExercisePage.clickSaveButtonLocation()
        //Verify success message is displaying

        //Verify that the location is updated
          cy.get('div.col-auto.ml-7 > span').invoke('text').then((text) => {
            expect(text).to.contain(randomText);
        });
        qaExercisePage.verifySuccessMessageIsVisible()

    })

    it(' Adding Primary and Other Languages', function () {
        //Clicking the languages link
        qaExercisePage.clickLanguages()
        //URL Verification
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/languages')
        //Click the pencil icon for Primary Language
        qaExercisePage.clickPencilIconForPrimaryLang()

        //Handling dropdown
        const randomizer = () => Cypress._.random(120, 129)
        const randomID = randomizer()
        qaExercisePage.populateDropdownPrimary(randomID, '{enter}', { force: true })
        qaExercisePage.clickChosenPrimary()

        //Clicking the add button for other languages
        qaExercisePage.clickAddButonForOtherLanguages()

        //Populate dropdown for Other Languages
        qaExercisePage.populateDropdownOther(randomID)

        //ClickChosenOther
        qaExercisePage.clickChosenOther()
        //Click cancel button
        qaExercisePage.clickCancelOther()
    })
    it('Logout functionality', function () {
        //Clicking the user icon at the top right screen
        qaExercisePage.clickUserIcon()
        //Click the logout button
        qaExercisePage.clickLogOutButton()


    })


})
