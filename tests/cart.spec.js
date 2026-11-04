import { test } from '../fixtures/baseTest.js';
import { expect } from '@playwright/test';
import {users, products } from '../testData/testData.js'


test.beforeEach(async({page,loginPage})=>{
  await page.goto("/");
  await loginPage.login(users.standard.username,users.standard.password);

}) 
for (const product of products){

test(`User should add ${product} to cart`, {tag: "@smoke"}, async({inventoryPage,cartPage})=>{
    await inventoryPage.addProductToCart(product);
    await expect(inventoryPage.cartBadge).toHaveText("1");
    await cartPage.openCart();
    await expect(cartPage.getProductName(product)).toHaveText(product);
});

test(`Verify ${product} price matches between Inventory and Cart`,async({inventoryPage,cartPage})=>{
    const inventoryPrice = await inventoryPage.getProductPrice(product).textContent();
    await inventoryPage.addProductToCart(product);
    await cartPage.openCart();

    //expected => Inventory price , actual => Cart price
    await expect(cartPage.getProductPrice(product)).toHaveText(inventoryPrice.trim());
})
}

test ("User should remove backpack from cart.",async({inventoryPage})=>{
    await inventoryPage.addBackpackToCart();
    await inventoryPage.removeBackpackButtonFromCart();
    await expect(inventoryPage.cartBadge).toBeHidden();

});

test("User should add multiple products to cart.", {tag: '@regression'},async({inventoryPage,cartPage})=>{
    await inventoryPage.addProductToCart(products[0]);
    await inventoryPage.addProductToCart(products[1]);
    await expect(inventoryPage.cartBadge).toHaveText("2");
    await cartPage.openCart();
    await expect (cartPage.getProductName(products[0])).toHaveText(products[0]);
    await expect (cartPage.getProductName(products[1])).toHaveText(products[1]);
})

