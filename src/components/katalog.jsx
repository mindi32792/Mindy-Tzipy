import './home.css'
import { Orders } from './orders';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LogIn } from './logIn';
import { useNavigate } from 'react-router-dom';
import { payment } from './payment';
import { Nivut } from './nivut';

export const Katalog = () => {
   // const [dialog, setDialog] = useState(false);

   const navigate = useNavigate();
   const nivut=(num)=>{


   }
   
   return <div>
    <Nivut></Nivut>
      <div className="header">
       
      
           <button onClick={()=>nivut(2025)}> 2025</button>
           <button onClick={()=>nivut(2023)}> 2023</button>
           

      </div>
      <img  className='logo' src="katalog.pdf"  />
      {/* {dialog === true && <LogIn />} */}
   </div>


}
