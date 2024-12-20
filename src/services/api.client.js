import axios from 'axios';
import { TodosPage, ChallengesPage } from "./index";

const baseUrl = 'https://apichallenges.herokuapp.com';

export class ApiClient {

    constructor(token) {
      this.todosPage = new TodosPage(baseUrl, token);
      this.challengesPage = new ChallengesPage(baseUrl, token);
    }
  
    static async login() {
      const token = await this.getToken();
      return new ApiClient(token);
    }

    static async getToken() {
      const response = await axios.post(`${baseUrl}/challenger`); //npx playwright test api.tests.js
      return response.headers["x-challenger"];
    }
  }