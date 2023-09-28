import axios from "axios";

const commonConfig = {
    headers: {
        "Content-type": "application/json",
        Accept: "applicatioon/json"
    }
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig
    })
};
