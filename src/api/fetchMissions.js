import axios from "axios";

export const fetchMissions = () => {
  return axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log("api response from axios get request: ",res);
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
