import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  baseURL:
    "https://pd-europe-west4-api-v1.elevatus.io/api/candidate/v1/company?sub_domain=demo",
});

export default instance;
