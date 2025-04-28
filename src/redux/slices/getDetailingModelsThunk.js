import { createAsyncThunk } from "@reduxjs/toolkit";


export const getDetailingModelsThunk = createAsyncThunk('getDetailingModelsThunk',


    async ({id1,eventDate}) => {
        try {
            debugger
            // https://localhost:7042/api/DetailingModelControler/GetDetailingModelByIdAndDate/30/2025-03-01
            // const response = await fetch(`https://localhost:7042/api/DetailingModelControler/GetDetailingModelsById/${id}`);
            const response = await fetch(`https://localhost:7042/api/DetailingModelControler/GetDetailingModelByIdAndDate/${id1}/${eventDate}`);
            // https://localhost:7042/api/DetailingModelControler/GetDetailingModelByIdAndDate?id=30&date=2025-03-01
            console.log("response: ", response);
            const data = await response.json();
            console.log("data: ", data);
            return data;
        }catch(e) {
            throw new Error("Failed to find!!!");

        }

    })

    
