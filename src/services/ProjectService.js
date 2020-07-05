import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appJHkEW9XSwz6Bsi/Projects"
});

Axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.AIRTABLE_APIKEY}`
};

export default {
  getProjects() {
    return Axios.get();
  }
};
