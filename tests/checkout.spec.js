import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage.js';
import { CheckoutPage } from '../Pages/CheckoutPage.js';
import {users, products,information } from '../testData/testData.js'



test.beforeEach(async({page})=>{
    await page.goto("/");
    const loginPage = new LoginPage(page);
    await loginPage.login(users.standard.username,users.standard.password);
    
})
for (const product of products){
test(`User should complete checkout successfully for ${product}`, { tag: '@smoke' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart(product);
    const cartPage = new CartPage(page);
    await cartPage.openCart();
    await cartPage.proceedToCheckout();
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutInformation(information.firstName,information.lastName,information.postalCode);
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();
    await expect(checkoutPage.orderConfirmation).toHaveText("Thank you for your order!");

    
})
}