import { createAsyncThunk } from "@reduxjs/toolkit";


export const getDetailingOrdersThunk = createAsyncThunk('getDetailingOrdersThunk',

    async (Id) => {
        try {
            const response = await fetch(`https://localhost:7042/api/DetailingOrdersControler/GetDetailingOrdersById/${Id}`);
            console.log("response: ", response);
            const data = await response.json();
            console.log("data: ", data);
            return data;
            
        }catch(e) {
            throw new Error("Failed to find!!!");

        }
    })
