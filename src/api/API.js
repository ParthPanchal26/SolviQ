import axios from "axios";

class API {

    constructor(baseURL) {
        this.baseURL = baseURL
    }

    async signIn(email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/users/sign-in`,
                { email, password }, { headers: { 'Content-Type': 'application/json' } });
            return response.data;
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
        }
    }

    async signUp(name, email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/users/sign-up`,
                { name, email, password }, { headers: { 'Content-Type': 'application/json' } });
            return response.data;
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
        }
    }

}

export const api = new API(import.meta.env.VITE_Backend_URI);