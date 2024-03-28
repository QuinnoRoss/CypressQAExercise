class QAExercisePage{

    getEmail(){
        return('input[type="email"]')
    }

    getContinueButton(){
        return('div.w-full > button')
    }

    getPassword(){
        return('input[type="password"]')
    }

    getSignInButton(){
        return('button[aria-label="signInButtonPassword"]')
    }

    //Navigating to my profile link

    getUserIcon(){
        return('header[role="menu"] > div:nth-child(3) > div.sui-nav-settings > div.sui-relative > button')
    }

    getMyProfile(){
        return('div:nth-child(2) > a.sui-cursor-pointer > span.sui-ml-sm')
    }

    //Editing the contact info and location

    getEditButtonContactInfo(){
        return('div.contact-info > div > div > button')
    }

    getMiddleName(){
        return("input[placeholder='Middle name (optional)']")
    }

    getSaveButtonContactInfo(){
        return("button[type='submit']")
    }

    getEditButtonLocationInfo(){
        return('div.border-top > div > div > div.col-lg-2 > button')
    }

    getStreetAdress(){
        return("input[placeholder='Street address*']")
    }

    getSaveButtonLocation(){
        return("div:nth-child(2) > form > div > div > button.sui-font-bold.sui-c-btn-primary")
    }

    getSuccessMessage(){
        return('.Toastify__toast-body')
    }

    //Adding Primary and Other Languages

    getLanguages(){
        return('div:nth-child(3) > div > a:nth-child(2')
    }

    getPencilIconForPrimaryLang(){
        return('div.action-row')
    }

    getDropdownPrimary(){
        return('div:nth-child(1) > div > div > div > div > div > div.sui-c-input-dropdown__value-container')
    }

    getChosenPrimary(){
        return('div[class="sui-c-floating-label-dropdown sui-c-input-dropdown__menu css-1uxsi1k-menu"]')
    }

    getSaveButtonPrimary(){
        return('.sui-gap-2 > .sui-c-btn-primary')
    }

    getAddButtonForOtherLanguages(){
        return('div.col-lg-2 > button.sui-relative')
    }

    getDropdownOther(){
        return('#new-language-form > form > div:nth-child(1) > div > div > div > div > div > div:nth-child(1)')
    }

    getChosenOther(){
        return('div.sui-c-input-dropdown__menu.css-1uxsi1k-menu > div')
    }

    getCancelOtherLanguage(){
        return('#edit-language-form > form > div.row-auto.figma-input-field-length.pl-0 > div > button.sui-font-bold.sui-c-btn-secondary > span')
    }

    //Logout Functionality

    getLogoutButton(){
        return('div:nth-child(3) > a.sui-cursor-pointer > span.sui-ml-sm')
    }

    //Actions

    enterEmail(emailValue){
        cy.get(this.getEmail()).type(emailValue)
    }

    clickContinue(){
        cy.get(this.getContinueButton()).click()
    }

    enterPassword(passwordValue){
        cy.get(this.getPassword()).type(passwordValue)
    }

    clickSignIn(){
        cy.get(this.getSignInButton()).click()
    }


    //Navigating to my profile link

    clickUserIcon(){
        cy.get(this.getUserIcon()).click()
    }

    clickMyProfile(){
        cy.get(this.getMyProfile()).click()
    }

    //Editing the contact info and location

    clickEditButtonContactInfo(){
        cy.get(this.getEditButtonContactInfo()).click()
    }

    enterMiddleName(middleName){
        cy.get(this.getMiddleName()).clear().type(middleName)
    }

    clickSaveButtonContactInfo(){
        cy.get(this.getSaveButtonContactInfo()).click()
    }

    clickEditButtonLocationInfo(){
        cy.get(this.getEditButtonLocationInfo()).click()
    }

    enterStreetAddress(StreetAddress){
        cy.get(this.getStreetAdress()).clear().type(StreetAddress)
    }

    clickSaveButtonLocation(){
        cy.get(this.getSaveButtonLocation()).click()
    }

    verifySuccessMessageIsVisible(){
        cy.get(this.getSuccessMessage()).should('be.visible')
    }

    //Adding Primary and Other Languages

    clickLanguages(){
        cy.get(this.getLanguages()).click()
    }

    clickPencilIconForPrimaryLang(){
        cy.get(this.getPencilIconForPrimaryLang()).click()
    }

    populateDropdownPrimary(primaryLanguage){
        cy.get(this.getDropdownPrimary()).type(primaryLanguage)
    }

    clickChosenPrimary(){
        cy.get(this.getChosenPrimary()).click()
    }

    clickSaveButtonPrimary(){
        cy.get(this.getSaveButtonPrimary()).click({force:true})
    }

    clickAddButonForOtherLanguages(){
        cy.get(this.getAddButtonForOtherLanguages()).click()
    }

    populateDropdownOther(otherLanguage){
        cy.get(this.getDropdownOther()).click().type(otherLanguage)
    }

    clickChosenOther(){
        cy.get(this.getChosenOther()).click()
    }

    clickCancelOther(){
        cy.get(this.getCancelOtherLanguage()).click({force: true})
    }

    clickLogOutButton(){
        cy.get(this.getLogoutButton()).click()
    }

    
}

export default QAExercisePage

