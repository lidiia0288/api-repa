import axios from 'axios';
import { TodosPage, ChallengesPage } from "./index";

export class ApiClient {
    constructor(token) {
      const baseUrl = "https://apichallenges.herokuapp.com";
      this.todosPage = new TodosPage(baseUrl, token);
      this.challengesPage = new ChallengesPage(baseUrl, token);
    }
  
    static async login() {
      const token = await this.getToken();
      return new ApiClient(token);
    }

    static async getToken() {
      const response = await axios.post(
        "https://apichallenges.herokuapp.com/challenger"
      );
      return response.headers["x-challenger"];
    }
  }