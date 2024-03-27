/// <reference types = "Cypress" />

describe('User login', function () {

    before(function () {
        cy.clearAllCookies()
        cy.visit('https://www.telusinternational.ai/cmp')
    })

    it('Login functionality', function () {
        //Populating the email address
        cy.get('input[type="email"]').should('be.empty').type('velandresq@gmail.com')
        //Tap the continue button
        cy.get('div.w-full > button').click()
        //Populating the password
        cy.get('input[type="password"]').should('be.empty').type('Test12345!!!')
        //Tap the sign-in button
        cy.get('button[aria-label="signInButtonPassword"]').click()
    })

    it('Navigating to the my profile link', function () {
        //Clicking the user icon at the top right screen
        cy.get('header[role="menu"] > div:nth-child(3) > div.sui-nav-settings > div.sui-relative > button').click()
        //Clicking the My Profile
        cy.get('div:nth-child(2) > a.sui-cursor-pointer > span.sui-ml-sm').click()
        //URL Verification
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/basic-info')
    })

    it('Editing the contact info and location', function () {
        //Clicking the edit button for contact info
        cy.get('div.contact-info > div > div > button').click()

        const randomizer = () => Cypress._.random(99)
        const id = randomizer()
        const randomText = ` TEST${id}`

        //Middle Name populating text
        cy.get("input[placeholder='Middle name (optional)']").clear().type(randomText)
        //Click the save button
        cy.get("button[type='submit']").click()
        //Click the edit button fo location info
        cy.get('div.border-top > div > div > div.col-lg-2 > button').click()
        //Street Address populating text
        cy.get("input[placeholder='Street address*']").clear().type(randomText)
        //Click the save button
        cy.get("div:nth-child(2) > form > div > div > button.sui-font-bold.sui-c-btn-primary").click()
        //Verify success message is displaying
        cy.get('.Toastify__toast-body').should('be.visible')
    })

    it(' Adding Primary and Other Languages', function () {
        //Clicking the languages link
        cy.get('div:nth-child(3) > div > a:nth-child(2)').click()
        //URL Verification
        cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/languages')
        //Click the pencil icon for Primary Language
        cy.get('div.action-row').click()
        //Handling dropdown
        const randomizer = () => Cypress._.random(120,129)
        const randomID = randomizer()
        cy.get('div:nth-child(1) > div > div > div > div > div > div.sui-c-input-dropdown__value-container').type(randomID,'{enter}', {force: true})
        cy.get('div[class="sui-c-floating-label-dropdown sui-c-input-dropdown__menu css-1uxsi1k-menu"]').click()
        
        // Applying the randomizer value to the locator
        // const locatorRandomized = `#react-select-4-option-${randomID}`
        // cy.get(locatorRandomized).click()

        //Clicking Save Button
        cy.get('.sui-gap-2 > .sui-c-btn-primary').click()

        //Clicking the add button for other languages
        cy.get('div.col-lg-2 > button.sui-relative').click()

        //Populating values for the add language
        //Current flaw is when the randomID selected is already added?
        //Will use cancel for the mean time

        //Other approach is deleting the recently added language before loging out? 

        cy.get('#new-language-form > form > div:nth-child(1) > div > div > div > div > div > div:nth-child(1)').click()
        .type(randomID)
        cy.get('div.sui-c-input-dropdown__menu.css-1uxsi1k-menu > div').click()
        //Click cancel button
        cy.get('.sui-c-btn-secondary').click()
    })
    it('Logout functionality', function () {
        //Clicking the user icon at the top right screen
        cy.get('header[role="menu"] > div:nth-child(3) > div.sui-nav-settings > div.sui-relative > button').click()
        //Click the logout button
        cy.get('div:nth-child(3) > a.sui-cursor-pointer > span.sui-ml-sm').click()
        
    })


})
