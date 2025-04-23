import { useEffect, useRef } from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom";
// import { getDetailingOrdersThunk } from "../redux/slices/getDetailingOrderThunk";

import './showDetailingOrder.css'

export const ShowDetailingOrder=(prop)=>{
  debugger
  const {detailingOrders,setd}=prop
    const refDailog = useRef();
    const dispatch = useDispatch();
 
    // const detailingO=useSelector(state=>state.orderSlice.detailingOrders)
  
    const dispach =async(id) => {
      // await  dispatch(getDetailingOrdersThunk(id))
      
    }
    useEffect(() => {
      
      // dispach(id)
      refDailog.current.showModal();
     
    }, [])
   
    return <dialog ref={refDailog} className="dialog"> 
        <div onClick={() => {
            setd(false)
            }}>❌</div>
              {detailingOrders?.map((e) => {
                        return <div className="">
                            <label> דגם: {e.idModel} </label>
                            <label>מידה: {e.size} </label>
                            <label>כמות: {e.count} </label>
                        </div>
                    })}
    </dialog>
}