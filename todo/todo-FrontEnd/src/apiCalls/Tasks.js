import axiosInstance from "./AxiosInstance";
import axios from "axios";

import React from 'react'

const BaseURL = "http://localhost:4000/api/tasks";
export const GetAllTasks = async()=>{
    console.log('GetAllTasks called')
    try {
        const response = await axios.get(`${BaseURL}/all`);
        console.log(`Get all Tasks API response ${response}`);
        return response;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export const AddTask = async(payload) => {
    try {
        const response = await axios.post(`${BaseURL}/add`, payload);
        console.log(`add task api response ${response}`)
        return response;
    } catch (error) {
        return error
    }
}