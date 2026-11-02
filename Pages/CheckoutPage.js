export class CheckoutPage{

    constructor(page){
        this.page = page;
        this.firstNameInput = page.locator("#first-name");
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.orderConfirmation = page.getByText('Thank you for your order!', { exact: true });


    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
         await this.firstNameInput.fill(firstName);
         await this.lastNameInput.fill(lastName);
         await this.postalCodeInput.fill(postalCode);
    }

    async clickContinueButton(){
        await this.continueButton.click();

    }

    async clickFinishButton(){
        await this.finishButton.click();
    }


}