import { test } from '../fixtures/baseTest.js';
import { expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage.js';
import { CheckoutPage } from '../Pages/CheckoutPage.js';
import {users, products,information,negativeCheckoutData } from '../testData/testData.js'



test.beforeEach(async({page,loginPage})=>{
    await page.goto("/");
    await loginPage.login(users.standard.username,users.standard.password);
    
})
for (const product of products){
test(`User should complete checkout successfully for ${product}`, { tag: '@smoke' }, async ({inventoryPage,cartPage,checkoutPage }) => {
    await inventoryPage.addProductToCart(product);
    await cartPage.openCartAndCheckout();
    await checkoutPage.fillCheckoutInformation(information.firstName,information.lastName,information.postalCode);
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();
    await expect(checkoutPage.orderConfirmation).toHaveText("Thank you for your order!");

    
})
}
test.describe('Negative Checkout Validation', () => {

    test.beforeEach(async ({inventoryPage,cartPage }) => {
        await inventoryPage.addProductToCart(products[0]);
        await cartPage.openCartAndCheckout();
    });

    for ( const data of negativeCheckoutData){

    test(`Checkout validation: ${data.scenario}`, {tag: '@regression'}, async ({ checkoutPage }) => {
    await checkoutPage.fillCheckoutInformation(data.firstName,data.lastName,data.postalCode);
    await checkoutPage.clickContinueButton();
    await expect(checkoutPage.errorMessage).toHaveText(data.expectedError); 

    });
}
});


