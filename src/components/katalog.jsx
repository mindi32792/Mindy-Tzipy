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
   // פונקציה לפתיחת קובץ PDF
   const openKatalog = () => {
      // אם ה-PDF נמצא בתיקיית public
      window.open("/katalog.pdf", "_blank");
   }
 const openKatalog2 = () => {
      // אם ה-PDF נמצא בתיקיית public
      window.open("/katalog2.pdf", "_blank");
   }

   return <div>
    <Nivut></Nivut>
      {/* <div className="header">
       
      
           <button onClick={()=>nivut(2025)}> 2025</button>
           <button onClick={()=>nivut(2023)}> 2023</button> */}
           
   {/* כפתור לפתיחת הקטלוג */}
      <div className="katalog-container">
         <button className="katalog-button" onClick={openKatalog}>
         קטלוג 2020
         </button>
    <button className="katalog-button" onClick={openKatalog2}>
         קטלוג 2022
         </button>

          {/* אפשרות חלופית - קישור ישיר */}
          {/* <a href="/katalog.pdf" target="_blank" rel="noopener noreferrer" className="katalog-link">
        קטלוג 2020
         </a> */}
      </div>
      {/* <img  className='logo' src="katalog.pdf"  /> */}
      {/* {dialog === true && <LogIn />} */}
      </div>
   // </div>



}