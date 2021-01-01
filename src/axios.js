import axios from "axios";

// const header = await createToken();

const instance = axios.create({
  // baseURL: "http://localhost:47001/api/v1",
  baseURL: "https://whatsapp-server-api.herokuapp.com/api/v1",
  // headers: { Authorization: "Bearer " + token },
});
export default instance;
