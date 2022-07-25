import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGE0NTBiZmZlYWRiNjFkYjc4ZDlhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODcyNTMwOCwiZXhwIjoxNjU4ODExNzA4fQ.pgw7mSHoLJo0H4RZHLvSF6-z92Ro3t5j3vTBL8GmM3o";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});