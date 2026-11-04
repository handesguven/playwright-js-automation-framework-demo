import { test } from '../fixtures/baseTest.js';
import { expect } from '@playwright/test';
import { users } from '../testData/testData.js';
 

test.describe("Login Functionality",()=>{

    test.beforeEach(async({page})=>{
  await page.goto("/");
}) 

test("User should login successfully with valid credentials.",{tag : ["@smoke","@regression"]}, async ({page,loginPage})=>{
    await loginPage.login(users.standard.username,users.standard.password);

    await expect(page).toHaveURL(/inventory\.html/); //Regular expression (Regex)

});



test("User should not login with invalid password.",{tag:"@regression"}, async ({loginPage})=>{

    const invalidPassword = "12345Hande";
    await loginPage.login(users.standard.username,invalidPassword);
    
    //assertion

    await expect(loginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");


});

test("User should not login with empty username", async({loginPage})=>{

    await loginPage.login("",users.standard.password);

    await expect(loginPage.errorMessage).toHaveText("Epic sadface: Username is required");


});



test("User should not login with empty password", async({loginPage})=>{

    await loginPage.login(users.standard.username,"");

    await expect(loginPage.errorMessage).toHaveText("Epic sadface: Password is required");


});



})