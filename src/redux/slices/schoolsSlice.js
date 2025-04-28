import { createSlice } from "@reduxjs/toolkit"
import { loginThunk } from "./loginthunk"
import { logOnThunk } from "./logOnThunk"


const INITIAL_STATE = {
    schools: [],
    school:'',
    token:-1,
    status:0,
    school:{idSchool:0,name: null,addressSchool: '', phone: ''},
    dateOfEvent:''
}

export const SchoolsSlice = createSlice({
    name: 'schoolsSlice',
    initialState: INITIAL_STATE,
  
    reducers: {
        setEventDate: (state, action) => {
          state.dateOfEvent = action.payload;
        },
        clearEventDate: (state) => {
          state.dateOfEvent = null;
        },
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
        //loginThunk
        builder.addCase(loginThunk.pending, (state) => {
        })

        builder.addCase(loginThunk.fulfilled, (state, action) => {
            debugger
          
        })
        builder.addCase(loginThunk.rejected, (state, action) => {
            console.log("action: ", action);
        })
            //logOnThunk
            
        builder.addCase(logOnThunk.pending, (state) => {
        })
        builder.addCase(logOnThunk.fulfilled, (state, action) => {
            debugger
           state.school = action.payload;
           state.status=5;
        })
        builder.addCase(logOnThunk.rejected, (state, action) => {
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
//   export const { } = SchoolsSlice.actions;
  export const { setEventDate, clearEventDate } = SchoolsSlice.actions;

export default SchoolsSlice.reducer;

//  export default OrderSlice.reducer