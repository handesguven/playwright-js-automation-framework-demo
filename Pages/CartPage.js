export class CartPage{


    constructor(page){
        this.page = page,
        this.productName = page.getByText('Sauce Labs Backpack', { exact: true }),
        this.cartLink = page.locator("[data-test='shopping-cart-link']")
    }
    

    getProductName(productName) {
    return this.page.getByText(productName, { exact: true });
    }

    async openCart(){
        await this.cartLink.click();

    }

    getProductPrice(productName) {
    const cartItem = this.page.locator('[data-test="inventory-item"]')
        .filter({ hasText: productName });

    return cartItem.locator('[data-test="inventory-item-price"]');
}

}