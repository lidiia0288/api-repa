import axios from "axios";

export class ChallengesPage {
  constructor(token) {
    this.token = token;
  }

  async request(method, endpoint, data = null, headers = {}) {
    try {
      const response = await axios({
        method,
        url: `${process.env.BASE_URL}/${endpoint}`,
        data,
        headers: {
          "x-challenger": this.token,
          ...headers,
        },
      });
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
      throw error;
    }
  }

  getChallenges(endpoint = "challenges", accept = "application/json") {
    return this.request("GET", endpoint, null, {
      Accept: accept,
    });
  }
}