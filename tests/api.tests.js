import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/services/api.client';
import * as allure from "allure-js-commons";

test.describe('API challenge', () => {

  let client;
  let response;

  test.beforeAll(async ({}) => {
    client = await ApiClient.login();
  });

  test("Получить полный список челленджей GET /challenges @API", async ({}) => {
    await allure.step("Отправить запрос challenges", async () => {
    response = await client.challengesPage.getChallenges();
  });

    expect(response.status).toEqual(200);
    expect(response.data.challenges.length).toBe(59);
  });

  test("Получить список заданий GET /todos @API", async ({}) => {
    await allure.step("Отправить запрос todos", async () => {
    response = await client.todosPage.getTodos();
    });
    
    expect(response.status).toBe(200);
  });

  test('Нельзя запросить несуществующий todo GET /todos @API', async ({ request }) => {
    await allure.step("Отправить некорректный запрос todo", async () => {
    response = await client.todosPage.getTodos("todo");
    });

    expect(response.status).toBe(404)
  });

  test('Выбрать определенное задание GET /todos @API', async ({ request }) => {
    await allure.step("Отправить запрос todos и номер задания", async () => {
    response = await client.todosPage.getTodos("todos/1");
    });

  expect(response.status).toBe(200)
  });


  test('Выбрать несуществующее задание GET /todos @API', async ({ request }) => {
    await allure.step("Отправить запрос todos и номер несуществующего задания", async () => {
    response = await client.todosPage.getTodos("todos/1000");
    });
  expect(response.status).toBe(404)
  });
});
