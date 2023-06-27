import axios from "axios"

const token = "1231819181fda1sdf18as1fw3f5s"

export const pokeAxios = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})

export const clientAxios = axios.create({
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})