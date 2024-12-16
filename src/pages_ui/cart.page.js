import { BasePage } from "./base.page.js";
import * as allure from "allure-js-commons";

export class CartPage extends BasePage {    
    constructor(page) {
        super(page);
        this.addToCart = page.getByRole('button', { name: 'ADD TO CART' });
        this.changeQuantity = page.getByRole('button', { name: '+' });
        this.updateQuantity = page.getByText('UPDATE');
    }

    async goToCart() {
        await allure.step("Добавить товар в корзину", async () => {
            await this.addToCart.click();
        });
    }

    async goToUpdate() {
        await allure.step("Изменить количество единиц товара в корзине", async () => {
            await this.changeQuantity.dblclick();
            await this.updateQuantity.click();
        });
    }
}