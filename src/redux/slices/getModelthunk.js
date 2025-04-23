import { createAsyncThunk } from "@reduxjs/toolkit";


export const getModelThunk = createAsyncThunk('getModelThunk',

    async () => {
        try {
            const response = await fetch(`https://localhost:7042/api/ModellsControllers/GetModels`);
           
            const data = await response.json();
            console.log("data: ", data);
            return data;
        }catch(e) {
            throw new Error("Failed to find!!!");
        }
    })

    
