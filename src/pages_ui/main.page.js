import { BasePage } from "./base.page.js";
import * as allure from "allure-js-commons";

export class MainPage extends BasePage {    
    constructor(page) {
        super(page);
        this.quantityProducts = this.page.getByRole('link', { name: '50' });
        this.productCard = this.page.locator('#ec_product_image_effect_4281370');
        this.errorFrame = this.page.locator('#popmake-4406');
        this.errorAlarm = this.page.locator('#bug-popup');
        this.errorText = this.page.locator('.academy-bug-overlay');
    }

    async goToPagination () {
        await allure.step ("Изменить количество товаров на странице", async () => {
        await this.quantityProducts.click();
    });
    }

    async goToProductCard () {
        await allure.step ("Кликнуть на изображение товара", async () => {
        await this.productCard.click();
    });
    }

}