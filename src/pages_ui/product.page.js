import { BasePage } from "./base.page.js";
import * as allure from "allure-js-commons";

export class ProductPage extends BasePage {    
    constructor(page) {
        super(page);
        this.changeCurrency = this.page.locator('#ec_currency_conversion');
        this.postComment = this.page.getByPlaceholder('Comment');
        this.postName = this.page.getByPlaceholder('Name*');
        this.postEmail = this.page.getByPlaceholder('Email*');
        this.postButton = this.page.getByRole('button', { name: 'Post Comment' });
    }

    async goToChange () {
        await allure.step ("Изменить валюту в карточке продукта", async () => {
        await this.changeCurrency.selectOption('GBP');
    });
    }

    async goToWriteComment () {
        await allure.step ("Написать комментарий", async () => {
        await this.postComment.fill('new comment');
    });
    }

    async goToWritePersonalData () {
        await allure.step ("Указать имя и email", async () => {
        await this.postName.fill('Lidiia');
        await this.postEmail.fill('lidi88@ya.ru');
    });
    }

    async goToPost () {
        await allure.step ("Опубликовать комментарий", async () => {
        await this.postButton.click();
        
    });
    }
}