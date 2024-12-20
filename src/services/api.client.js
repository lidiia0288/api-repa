import axios from 'axios';
import { TodosPage, ChallengesPage } from "./index";

export class ApiClient {

  static baseUrl = process.env.BASE_URL;

    constructor(token) {
      this.todosPage = new TodosPage(ApiClient.baseUrl, token);
      this.challengesPage = new ChallengesPage(ApiClient.baseUrl, token);
    }
  
    static async login() {
      const token = await this.getToken();
      return new ApiClient(token);
    }

    static async getToken() {
      const response = await axios.post(`${ApiClient.baseUrl}/challenger`); //npx playwright test api.tests.js
      return response.headers["x-challenger"];
    }
  }