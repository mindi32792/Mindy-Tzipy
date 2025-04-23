import './home.css'
import { Orders } from './orders';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LogIn } from './logIn';
import { useNavigate } from 'react-router-dom';
import { payment } from './payment';

export const Nivut = () => {
   // const [dialog, setDialog] = useState(false);

   const navigate = useNavigate();

   const goToModel = () => {
      navigate(`/Model`)
   }
   const goToOrders = () => {
      navigate(`/Orders`)
   }
   // const login = () => {
   //    // setDialog(true)
   //    navigate(`/logIn`)
   // }
   const payment = () => {
      navigate(`/payment`)
   }
   return <div>
      <div className="header">
         <div className='navigate' onClick={() => goToModel()}>תלבושות</div>
         <div className='navigate' onClick={() => goToOrders()}>הזמנות</div>
         {/* <div className='navigate' onClick={() => login()}> רישום </div> */}
         <div className='navigate' onClick={() => payment()}> תשלום </div>
      </div>
      {/* <img  className='logo' src="logo.jpg"  /> */}
      {/* {dialog === true && <LogIn />} */}
   </div>


}
