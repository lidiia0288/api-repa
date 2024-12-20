import axios from 'axios';
import { TodosPage, ChallengesPage } from "./index";

export class ApiClient {

    constructor(token) {
      this.todosPage = new TodosPage(process.env.BASE_URL, token);
      this.challengesPage = new ChallengesPage(process.env.BASE_URL, token);
    }
  
    static async login() {
      const token = await this.getToken();
      return new ApiClient(token);
    }

    static async getToken() {
      const response = await axios.post(`${process.env.BASE_URL}/challenger`); //npx playwright test api.tests.js
      return response.headers["x-challenger"];
    }
  }