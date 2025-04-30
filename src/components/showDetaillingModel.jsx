import { useEffect, useRef, useState } from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom";
// import { getDetailingOrdersThunk } from "../redux/slices/getDetailingOrderThunk";

import './showDetailingOrder.css'

export const ShowDetailingModel=(prop)=>{
  debugger
  const {detailingModel,setd,picture}=prop
    const refDailog = useRef();
    const dispatch = useDispatch();
    const [arr, setArr] = useState([]);
    const [detailing, setDetailing] = useState([]);
    // const detailingO=useSelector(state=>state.orderSlice.detailingOrders)
    const [newItem, setNewItem] = useState({idModel:0,count:0,size:0}); 
    const dispach =async(id) => {
      // await  dispatch(getDetailingOrdersThunk(id))
      // const [newSchool, setNewSchool] = useState({ idSchool:0, name: '',addressSchool: '', phone: '' });
    }
    useEffect(() => {
      
      // dispach(id)
      refDailog.current.showModal();
     
    }, [])
   
    const saveDegem=(count,model,size)=>{
      debugger
      setNewItem({idModel:model,count:count,size:size})
      setDetailing(newItem)
    }
    return <dialog ref={refDailog} className="dialog"> 
        <div onClick={() => {
            setd(false)
            }}>❌</div>
              {detailingModel?.map((e) => {
                        return <div className=""> 
                            <label>דגם: {e.idModel} </label>
                            <label>מידה: {e.size} </label>
                            <label> כמות פנויה לתאריך שלך : {e.countByDate} </label>
                            <label>כמות : {e.count} </label>  
                            <input className="count" type="number"  placeholder="כמות" onChange={(e1)=>saveDegem(e1.target.value,e.idModel,e.size)}></input> 
                                       
  </div>
                    })}
                    {/* onClick={()=>setNewItem()} */}
               <button  >הוסף לסל</button>     
              <img  className='item' src={`${picture}`}/>       
    </dialog>
}