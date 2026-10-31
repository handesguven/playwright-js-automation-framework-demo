export class InventoryPage{


    constructor(page){
        this.page = page,
        this.addBackpackButton = page.locator("#add-to-cart-sauce-labs-backpack"),
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]'),
        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack'),
        this.backPackPrice = page.locator('[data-test="inventory-item-price"]').first()
        

    }


    async addBackpackToCart(){
        await this.addBackpackButton.click();
    }

    async removeBackpackButtonFromCart(){
        await this.removeBackpackButton.click();
    }

  async addProductToCart(productName) {
    const productId = productName.toLowerCase().replaceAll(" ", "-");
    await this.page.locator(`#add-to-cart-${productId}`).click();
}

getProductPrice(productName) {
    const productItem = this.page.locator('[data-test="inventory-item"]')
        .filter({ hasText: productName });

    return productItem.locator('[data-test="inventory-item-price"]');
}

     
}