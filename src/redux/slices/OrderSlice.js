import { createSlice } from "@reduxjs/toolkit"
import { getOrdersThunk } from "./getOrderThunk"
import { getDetailingOrdersThunk } from "./getDetailingOrderThunk"



const INITIAL_STATE = {
    orders: [],
    eventForSearch: {},
    search: false,
    error: '',
    order:'',
    token:-1,
    status:0,
    detailingOrders:[],
  
}
// const INITIAL_STATE = {
//     user: {username:'',pasword:''},
//     loading: false,
//     error: '',
//     token:-1,
//     status:0
// }
export const OrderSlice = createSlice({
    name: 'orderSlice',
    initialState: INITIAL_STATE,
    reducers: {
        // updatOrder: (state, action) => {
        //     state.order = action.payload
        // }
    },
    extraReducers: (builder) => {
        //add
//         builder.addCase(addEventThunk.pending, (state) => {
    
//             state.loading = true;
//         });
//         builder.addCase(addEventThunk.fulfilled, (state, action) => {
// if( !state.events|| state.events.length===0){
//     state.events=[]
// }
//             state.events.push(action.meta.arg.newEvent)
//             console.log(action.meta.arg.newEvent + " add event");
//             state.loading = false;

//         });
//         builder.addCase(addEventThunk.rejected, (state, action) => {
//             state.error = "Failed to get data";
//             state.loading = false;
//         })
        //getOrder
        builder.addCase(getOrdersThunk.pending, (state) => {
        })

        // builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
        //     state.events = action.payload;
        // })
        builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
            debugger
            state.orders = action.payload;
        })
        builder.addCase(getOrdersThunk.rejected, (state, action) => {
            console.log("action: ", action);
        })
          //getDetailing
          builder.addCase(getDetailingOrdersThunk.pending, (state) => {
        })

        // builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
        //     state.events = action.payload;
        // })
        builder.addCase(getDetailingOrdersThunk.fulfilled, (state, action) => {
            debugger
            state.detailingOrders = action.payload;
        })
        builder.addCase(getDetailingOrdersThunk.rejected, (state, action) => {
            console.log("action: ", action);
        }) 
        //editEvent
        // builder.addCase(editEventThunk.pending, (state) => {
        // })

        // builder.addCase(editEventThunk.fulfilled, (state, action) => {
        //     console.log(action.payload);
        //     let f= state.events.findIndex(x=> x.id===action.meta.arg.newEvent.id)
        //     state.events[f]=action.meta.arg.newEvent
        // })

        // builder.addCase(editEventThunk.rejected, (state, action) => {
        //     console.log("action: ", action);


        // })

//delitEvent
// builder.addCase(deleteEventThunk.pending, (state) => {
// })

// builder.addCase(deleteEventThunk.fulfilled, (state, action) => {
//     debugger
//     let f = state.events.filter(x=> x.id !== action.payload)
//     state.events = f;
// })
// builder.addCase(deleteEventThunk.rejected, (state, action) => {
//     console.log("action: ", action);
// })

//searchEvent
// builder.addCase(searchThunk.pending, (state) => {
// })
// builder.addCase(searchThunk.fulfilled, (state, action) => {
//     state.eventForSearch = action.payload.events;
//     if(state.eventForSearch.length === 0){
//         state.error = 'אין תוצאות מתאימות';
//        }
//        state.search = true;
// })
// builder.addCase(searchThunk.rejected, (state, action) => {
//     console.log("action: ", action);
// })
   }
  })
//   export const { updatOrder } = OrderSlice.actions;
  export const { } = OrderSlice.actions;
//  export default OrderSlice.reducer