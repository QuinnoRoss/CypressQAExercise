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
        //cy.get('input[type="email"]').should('be.empty').type('velandresq@gmail.com')
        //Tap the continue button
        qaExercisePage.clickContinue()
        //cy.get('div.w-full > button').click()
        //Populating the password
        qaExercisePage.enterPassword('Test12345!!!')
        //cy.get('input[type="password"]').should('be.empty').type('Test12345!!!')
        //Tap the sign-in button
        qaExercisePage.clickSignIn()
        //cy.get('button[aria-label="signInButtonPassword"]').click()
    })

    it('Navigating to the my profile link', function () {
        //Clicking the user icon at the top right screen
        qaExercisePage.clickUserIcon()
        //cy.get('header[role="menu"] > div:nth-child(3) > div.sui-nav-settings > div.sui-relative > button').click()
        //Clicking the My Profile
        qaExercisePage.clickMyProfile()
        //cy.get('div:nth-child(2) > a.sui-cursor-pointer > span.sui-ml-sm').click()
        //URL Verification
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/basic-info')
    })

    it('Editing the contact info and location', function () {
        //Clicking the edit button for contact info
        qaExercisePage.clickEditButtonContactInfo()
        //cy.get('div.contact-info > div > div > button').click()

        const randomizer = () => Cypress._.random(99)
        const id = randomizer()
        const randomText = ` TEST${id}`

        //Middle Name populating text
        qaExercisePage.enterMiddleName(randomText)
        //cy.get("input[placeholder='Middle name (optional)']").clear().type(randomText)
        //Click the save button
        qaExercisePage.getSaveButtonContactInfo()
        // cy.get("button[type='submit']").click()
        //Click the edit button fo location info
        qaExercisePage.clickEditButtonLocationInfo()
        //cy.get('div.border-top > div > div > div.col-lg-2 > button').click()
        //Street Address populating text
        qaExercisePage.enterStreetAddress(randomText)
        //cy.get("input[placeholder='Street address*']").clear().type(randomText)
        //Click the save button
        qaExercisePage.clickSaveButtonLocation()
        //cy.get("div:nth-child(2) > form > div > div > button.sui-font-bold.sui-c-btn-primary").click()
        //Verify success message is displaying
        qaExercisePage.verifySuccessMessageIsVisible()
        //cy.get('.Toastify__toast-body').should('be.visible')
    })

    it(' Adding Primary and Other Languages', function () {
        //Clicking the languages link
        qaExercisePage.clickLanguages()
        //cy.get('div:nth-child(3) > div > a:nth-child(2)').click()
        //URL Verification
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/languages')
        //Click the pencil icon for Primary Language
        qaExercisePage.clickPencilIconForPrimaryLang()
        //cy.get('div.action-row').click()

        //Handling dropdown
        const randomizer = () => Cypress._.random(120, 129)
        const randomID = randomizer()
        qaExercisePage.populateDropdownPrimary(randomID, '{enter}', { force: true })
        qaExercisePage.clickChosenPrimary()
        //cy.get('div:nth-child(1) > div > div > div > div > div > div.sui-c-input-dropdown__value-container').type(randomID, '{enter}', { force: true })
        //cy.get('div[class="sui-c-floating-label-dropdown sui-c-input-dropdown__menu css-1uxsi1k-menu"]').click()

        // Applying the randomizer value to the locator
        // const locatorRandomized = `#react-select-4-option-${randomID}`
        // cy.get(locatorRandomized).click()

        //Clicking Save Button
        //cy.get('.sui-gap-2 > .sui-c-btn-primary').click({ force: true })

        //Clicking the add button for other languages
        qaExercisePage.clickAddButonForOtherLanguages()
        //cy.get('div.col-lg-2 > button.sui-relative').click()

        //Populate dropdown for Other Languages
        qaExercisePage.populateDropdownOther(randomID)

        //ClickChosenOther
        qaExercisePage.clickChosenOther()
        // cy.get('#new-language-form > form > div:nth-child(1) > div > div > div > div > div > div:nth-child(1)').click()
        //     .type(randomID)
        //cy.get('div.sui-c-input-dropdown__menu.css-1uxsi1k-menu > div').click()

        //Click cancel button
        qaExercisePage.clickCancelOther()
    })
    it('Logout functionality', function () {
        //Clicking the user icon at the top right screen
        qaExercisePage.clickUserIcon()
        //Click the logout button
        qaExercisePage.clickLogOutButton()
        //cy.get('div:nth-child(3) > a.sui-cursor-pointer > span.sui-ml-sm').click()

    })


})
