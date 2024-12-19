import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import {App} from '../src/pages_ui/app.page'

const url = 'https://academybugs.com/find-bugs/';
const productUrl = 'https://academybugs.com/store/flamingo-tshirt/';
const mistakeFrame = 'In this bug';
const mistakeAlarm = 'What did you find out';
const mistakeText = 'You found a crash bug';
let app;


test('Проверить пагинацию на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToPagination();
 
  await app.mainPage.errorText.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorText).toContainText(mistakeText);

});

test('Проверить отображение товара на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToProductCard();

  await app.mainPage.errorAlarm.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorAlarm).toContainText(mistakeAlarm);
});

test('Выбрать валюту в карточке товара', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToChange();
  
  await app.mainPage.errorFrame.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorFrame).toContainText(mistakeFrame);
});


test('Опубликовать отзыв на странице продукта', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToWriteComment();
  await app.productPage.goToWritePersonalData();
  await app.productPage.goToPost();

  await app.mainPage.errorAlarm.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorAlarm).toContainText(mistakeAlarm);
});

test('Выбрать количество товара в карточке', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.cartPage.goToCart();
  await app.cartPage.goToUpdate();
  
  await app.mainPage.errorFrame.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorFrame).toContainText(mistakeFrame);
});