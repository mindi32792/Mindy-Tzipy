
// // import { useState } from "react";
// // import { useSelector } from "react-redux"
// // import { useNavigate, useParams } from "react-router-dom";
// // import { getDetailingOrdersThunk } from "../redux/slices/getDetailingOrderThunk";
// import { useEffect, useRef } from "react";
// import './showDetailingOrder.css'
// import { useDispatch } from "react-redux";

// export const ShowDetailingOrder=(prop)=>{
//   debugger
//   const {detailingOrders,setd}=prop
//     const refDailog = useRef();
//     const dispatch = useDispatch();
 
//     // const detailingO=useSelector(state=>state.orderSlice.detailingOrders)
  
//     const dispach =async(id) => {
//       // await  dispatch(getDetailingOrdersThunk(id))
      
//     }
//     useEffect(() => {
      
//       // dispach(id)
//       refDailog.current.showModal();
     
//     }, [])
   
//     return <dialog ref={refDailog} className="dialog"> 
//         <div onClick={() => {
//             setd(false)
//             }}>❌</div>
//               {detailingOrders?.map((e) => {
//                         return <div className="">
//                             <label> דגם: {e.idModel} </label>
//                             <label>מידה: {e.size} </label>
//                             <label>כמות: {e.count} </label>
//                         </div>
//                     })}
//     </dialog>
// }

// import { useEffect, useRef } from "react";
// import './showDetailingOrder.css'
// import { useDispatch } from "react-redux";

// export const ShowDetailingOrder = (prop) => {
//     const { detailingOrders, setd } = prop
//     const refDailog = useRef();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         refDailog.current.showModal();
//     }, [])

//     const closeDialog = () => {
//         refDailog.current.close();
//         setd(false);
//     }

//     return (
//         <dialog ref={refDailog} className="details-dialog">
//             <div className="dialog-header">
//                 <h3>פרטי הזמנה</h3>
//                 <button className="close-button" onClick={closeDialog}>✕</button>
//             </div>
            
//             <div className="dialog-content">
//                 <div className="items-grid">
//                     {detailingOrders?.map((e, index) => (
//                         <div key={index} className="order-item">
//                             <div className="item-header">פריט {index + 1}</div>
//                             <div className="item-details">
//                                 <div className="detail-row">
//                                     <span className="detail-label">דגם:</span>
//                                     <span className="detail-value">{e.idModel}</span>
//                                 </div>
//                                 <div className="detail-row">
//                                     <span className="detail-label">מידה:</span>
//                                     <span className="detail-value">{e.size}</span>
//                                 </div>
//                                 <div className="detail-row">
//                                     <span className="detail-label">כמות:</span>
//                                     <span className="detail-value">{e.count}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
            
//             <div className="dialog-footer">
//                 <button className="close-dialog-button" onClick={closeDialog}>סגור</button>
//             </div>
//         </dialog>
//     )}

import { useEffect, useRef } from "react";

import '../style/showDetailingOrder.css'
import { useDispatch } from "react-redux";

export const ShowDetailingOrder = (prop) => {
    const { detailingOrders, setd } = prop
    const refDailog = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        refDailog.current.showModal();
    }, [])

    const closeDialog = () => {
        setd(false);
    }

    return (
        <dialog ref={refDailog} className="details-dialog">
            <div className="dialog-header">
                <h3>פרטי ההזמנה</h3>
                <div className="close-btn" onClick={closeDialog}>❌</div>
            </div>
            
            <div className="dialog-content">
                {detailingOrders?.length > 0 ? (
                    detailingOrders.map((e, index) => (
                        <div key={index} className="item-card">
                            <div className="item-number">פריט {index + 1}</div>
                            <div className="item-info">
                                <label>דגם: <span>{e.idModel}</span></label>
                                <label>מידה: <span>{e.size}</span></label>
                                <label>כמות: <span>{e.count}</span></label>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-items">לא נמצאו פריטים בהזמנה זו</div>
                )}
            </div>
        </dialog>
    );
}