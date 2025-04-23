import { createAsyncThunk } from "@reduxjs/toolkit";


export const getDetailingModelsThunk = createAsyncThunk('getDetailingModelsThunk',

    // async (Id) => {
    //     try {
    //         const response = await fetch(`https://localhost:7042/api/ModellsControllers/GetModels`);
    //                 console.log("response: ", response);
    //                 const data = await response.json();
    //                 console.log("data: ", data);
    //                 return data.events;
    //     }catch(e) {
    //         throw new Error("Failed to find!!!");
    //     }
    // })
   // https://localhost:7042/api/DetailingModelControler/GetDetailingModelsById/${Id}
    
    async (eventId) => {
        try {
            const response = await fetch(`https://localhost:7042/api/DetailingModelControler/GetDetailingModelsById/${eventId}`);
            console.log("response: ", response);
            const data = await response.json();
            console.log("data: ", data);
            return data;
        }catch(e) {
            throw new Error("Failed to find!!!");

        }
    // async (eventId) => {
    //     try {
    //         const response = await fetch(`http://localhost:1234/event/${eventId}`);
    //         console.log("response: ", response);
    //         const data = await response.json();
    //         console.log("data: ", data);
    //         return data.events;
    //     }catch(e) {
    //         throw new Error("Failed to find!!!");

    //     }
    })

    
