import axios from "axios";
const apikey = process.env.VUE_APP_AIRTABLE_APIKEY;

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appJHkEW9XSwz6Bsi/Projects"
});

Axios.defaults.headers.common = {
  Authorization: `Bearer ${apikey}`
};

export default {
  getProjects() {
    return Axios.get();
  }
};
