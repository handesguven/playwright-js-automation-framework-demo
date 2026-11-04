import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { CartPage } from '../Pages/CartPage';


export const test = base.extend({

    loginPage: async ({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({page},use) =>{
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
        checkoutPage: async ({page},use) =>{
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);

    },
        cartPage: async ({page},use) =>{
        const cartPage = new CartPage(page);
        await use(cartPage);

}
});

