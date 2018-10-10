import axios from "axios";

const instance = axios.create({
    baseURL: "",
    timeout: 10000
});
const fetch = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance
                .get(url, { params: data }, config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};
export default fetch;
