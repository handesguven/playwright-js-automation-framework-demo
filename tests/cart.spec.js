import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage.js';


const username = 'standard_user';
const password = 'secret_sauce';

const products = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt"
];



test.beforeEach(async({page})=>{
  await page.goto("/");
  const loginPage = new LoginPage(page);
  await loginPage.login(username,password);

}) 
for (const product of products){

test(`User should add ${product} to cart`, {tag: "@smoke"}, async({page})=>{

    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    await inventoryPage.addProductToCart(product);
    await expect(inventoryPage.cartBadge).toHaveText("1");
    await cartPage.openCart();
    await expect(cartPage.getProductName(product)).toHaveText(product);
});

test(`Verify ${product} price matches between Inventory and Cart`,async({page})=>{

    const cartPage = new CartPage(page);
    const inventoryPage = new InventoryPage(page);
    const inventoryPrice = await inventoryPage.getProductPrice(product).textContent();
    await inventoryPage.addProductToCart(product);
    await cartPage.openCart();

    //expected => Inventory price , actual => Cart price
    await expect(cartPage.getProductPrice(product)).toHaveText(inventoryPrice.trim());
})
}

test ("User should remove backpack from cart.",async({page})=>{
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.removeBackpackButtonFromCart();
    await expect(inventoryPage.cartBadge).toBeHidden();

});

test("User should add multiple products to cart.", {tag: '@regression'},async({page})=>{
    const cartPage = new CartPage(page);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart(products[0]);
    await inventoryPage.addProductToCart(products[1]);
    await expect(inventoryPage.cartBadge).toHaveText("2");
    await cartPage.openCart();
    await expect (cartPage.getProductName(products[0])).toHaveText(products[0]);
    await expect (cartPage.getProductName(products[1])).toHaveText(products[1]);
})

