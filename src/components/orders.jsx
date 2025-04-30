
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { getOrdersThunk } from "../redux/slices/getOrderThunk";
import { useNavigate } from "react-router-dom";
import './orders.css'
import { Home } from "./home";
import { Nivut } from "./nivut";
import { useEffect, useState } from "react";
import { getDetailingOrdersThunk } from "../redux/slices/getDetailingOrderThunk";
import { DetailingOrder, ShowDetailingOrder } from "./showDetailingOrder";
import { Maneger } from "./manegar";
export const Orders = () => {

    const orders = useSelector(state => state.orderSlice.orders)
    const detailingO=useSelector(state=>state.orderSlice.detailingOrders)
    const schoolName = useSelector(state => state.schoolsSlice.school.name)

    const [dialog,setDialog]=useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async() => {
      await  dispatch(getOrdersThunk())
    }
    const show =async(id) => {
        await  dispatch(getDetailingOrdersThunk(id))
        setDialog(true)
      }
    useEffect(() => {
        console.log("gggggggggggggggggggg",detailingO);
    }, [detailingO])
 
    return (
        <div >
          {schoolName=="maneger" && <Maneger></Maneger> || <Nivut></Nivut>}

            {/* <button className="buttonGet" onClick={() => getOrders()}>
                הצגת כל ההזמנות
            </button> */}
            <table>
                <thead>
                    <th>מספר הזמנה   </th>
                    <th>קוד מוסד   </th>
                    <th>איש קשר   </th>
                    <th>טלפון   </th>
                    <th>כתובת אירוע   </th>
                    <th>תאריך הזמנה   </th>
                    <th>תאריך אירוע   </th>
                    <th>מחיר לתשלום   </th>
                    <th>פרטי ההזמנה   </th>
                </thead>
                <tbody>

                    {orders?.map((e) => {
                        return <tr className="">
                            <th>{e.idOrder}</th>
                            <th>{e.idSchool}</th>
                            <th>{e.contact}</th>
                            <th>{e.phoneContact}</th>
                            <th>{e.provisionAddress}</th>
                            <th>{e.dateOfOrdder}</th>
                            <th>{e.dateOfEvent}</th>
                            <th>{e.costPrice}</th>
                            <th><button onClick={()=>show(e.idOrder)}>details</button></th>
                        </tr>
                    })}
                </tbody>
            </table>
            {dialog === true && <ShowDetailingOrder  detailingOrders={detailingO} setd={setDialog}  />}
        </div>
    );
}
