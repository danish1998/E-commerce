import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjNmMjYxZjdiNjM5NmNmZDc0Yzg2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzQzNjM3OCwiZXhwIjoxNjQzNjk1NTc4fQ.S-2bE4DSPHb9Xpt7d7cJUPAiBpdHhbMIa_MTVAP0aXc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token: `Bearer ${TOKEN}`},
})