import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';


const username = 'standard_user';
const password = 'secret_sauce';   

test.describe("Login Functionality",()=>{

    test.beforeEach(async({page})=>{
  await page.goto("/");
}) 

test("User should login successfully with valid credentials.",{tag : ["@smoke","@regression"]}, async ({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.login(username,password);

    await expect(page).toHaveURL(/inventory\.html/); //Regular expression (Regex)

});



test("User should not login with invalid password.",{tag:"@regression"}, async ({page})=>{

    const invalidPassword = "12345Hande";
    const loginPage = new LoginPage(page);
    await loginPage.login(username,invalidPassword);
    
    //assertion

    await expect(loginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");


});

test("User should not login with empty username", async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.login("",password);

    await expect(loginPage.errorMessage).toHaveText("Epic sadface: Username is required");


});



test("User should not login with empty password", async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.login(username,"");

    await expect(loginPage.errorMessage).toHaveText("Epic sadface: Password is required");


});



})