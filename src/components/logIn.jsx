// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux"
// import "./logIn.css"
// import { logOnThunk } from "../redux/slices/logOnThunk";
// import { Nivut } from "./nivut";
// export const LogIn = () => {
//   const [flagN, setFlagFN] = useState(false);
//   const [schoolName, setSchoolName] = useState();
//   const [flagDate, setFlagDate] = useState(false);
//   const [dateOfEvent, setDateOfEvent] = useState();

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const school = useSelector(state => state.schoolsSlice.school)
//   const eventDate = useSelector(state => state.schoolsSlice.dateOfEvent)

 
// useEffect(()=>{
//   debugger
// check1()
// },[school.name])
//   const check1 =  () => {
//     debugger
//     if (school.name == "") {
//       navigate(`/logon`)
//     }
//     if(school.name != ""|| school.name!=null)
//       navigate(`/home`)
//   }
//   const check =  () => {
//     debugger
//     dispatch(logOnThunk(schoolName))
   
//   }
//   // const showDetails = async (id1, picture) => {
//   //   await dispatch(getDetailingModelsThunk(id1));
//   //   setDialog(true)
//   //   setPicture1(picture)
//   // }
//   return <>

//     <div className="formContainer">
//       <label className="formLabel">שם מוסד</label>
//       <br />
//       <input className="formInput" type="text" placeholder="שם מוסד" onChange={(e) => {
//         setSchoolName(e.target.value)
//         if (e.target.value !== "") {
//           setFlagFN(true)
//         }
//         else
//           setFlagFN(false)
//       }} />


//       <label className="formLabel">תאריך אירוע</label>
//       <br />
//       <input className="formInput" type="date" placeholder="תאריך אירוע" onChange={(e) => {
//         setDateOfEvent(e.target.value)
//         if (e.target.value !== "") {
//           setFlagDate(true)
//         }
//         else
//           setFlagDate(false)
//       }} />
//       <br />

//       <button className="formButton" disabled={!flagN || !flagDate} onClick={() => check()}>היכנס</button>
//       {/* {status===5  &&  navigate(`/home`)} */}
//     </div>
//   </>

// }
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux"
// import "./logIn.css"
// import { logOnThunk } from "../redux/slices/logOnThunk";
// import { setEventDate } from "../redux/slices/schoolsSlice";


// export const LogIn = () => {
//   const [flagN, setFlagFN] = useState(false);
//   const [schoolName, setSchoolName] = useState("");
//   const [flagDate, setFlagDate] = useState(false);
//   const [dateOfEvent, setDateOfEvent] = useState("");
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const school = useSelector(state => state.schoolsSlice.school);
//   const eventDate = useSelector(state => state.schoolsSlice.dateOfEvent);
  
//   // בדיקה אם המשתמש כבר מחובר, אם כן - ניווט לדף הבית
//   useEffect(() => {
//     debugger
//     if (school && school.name && school.name.trim() !== "") {
//       navigate('/home');
//     }
   
//   }, [school, navigate]);
  
//   const handleLogin = () => {
//     // שליחת פעולת התחברות
//     dispatch(logOnThunk(schoolName))
//       .then((result) => {
//         // בדיקה אם ההתחברות הצליחה
//         if (result.payload && result.payload.name) {
//           navigate('/home');
//         }
//         else{
//           navigate('/logon');
//         }
//       });
//   }
  
//   return (
//     <div className="formContainer">
//       <label className="formLabel">שם מוסד</label>
//       <br />
//       <input 
//         className="formInput" 
//         type="text" 
//         placeholder="שם מוסד" 
//         value={schoolName}
//         onChange={(e) => {
//           setSchoolName(e.target.value);
//           setFlagFN(e.target.value.trim() !== "");
//         }} 
//       />
      
//       <label className="formLabel">תאריך אירוע</label>
//       <br />
//       <input 
//         className="formInput" 
//         type="date" 
//         placeholder="תאריך אירוע" 
//         value={dateOfEvent}
//         onChange={(e) => {
//           setDateOfEvent(e.target.value);
//           setFlagDate(e.target.value !== "");
//         }} 
//       />
//       <br />
      
//       <button 
//         className="formButton" 
//         disabled={!flagN || !flagDate} 
//         onClick={handleLogin}
//       >
//         היכנס
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./logIn.css";
import { logOnThunk } from "../redux/slices/logOnThunk";
import { setEventDate } from "../redux/slices/schoolsSlice";

export const LogIn = () => {
  const [flagN, setFlagFN] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [flagDate, setFlagDate] = useState(false);
  const [dateOfEvent, setDateOfEvent] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const school = useSelector(state => state.schoolsSlice.school);
  const savedEventDate = useSelector(state => state.schoolsSlice.eventDate);
  
  // בדיקה אם המשתמש כבר מחובר, אם כן - ניווט לדף הבית
  useEffect(() => {
    if (school && school.name && school.name.trim() !== "") {
      navigate('/home');
    }
    
    // אם יש תאריך שמור, נשתמש בו
    if (savedEventDate) {
      setDateOfEvent(savedEventDate);
      setFlagDate(true);
    }
  }, [school, navigate, savedEventDate]);
  
  const handleLogin = () => {
    // שמירת התאריך ב-Redux
    dispatch(setEventDate(dateOfEvent));
    
    // שליחת פעולת התחברות
    dispatch(logOnThunk(schoolName))
      .then((result) => {
        // בדיקה אם ההתחברות הצליחה
        if (result.payload && result.payload.name) {
          navigate('/home');
        }
        else {
          navigate('/logon');
        }
      });
  }
  
  return (
    <div className="formContainer">
      <label className="formLabel">שם מוסד</label>
      <br />
      <input 
        className="formInput" 
        type="text" 
        placeholder="שם מוסד" 
        value={schoolName}
        onChange={(e) => {
          setSchoolName(e.target.value);
          setFlagFN(e.target.value.trim() !== "");
        }} 
      />
      
      <label className="formLabel">תאריך אירוע</label>
      <br />
      <input 
        className="formInput" 
        type="date" 
        placeholder="תאריך אירוע" 
        value={dateOfEvent}
        onChange={(e) => {
          setDateOfEvent(e.target.value);
          setFlagDate(e.target.value !== "");
        }} 
      />
      <br />
      
      <button 
        className="formButton" 
        disabled={!flagN || !flagDate} 
        onClick={handleLogin}
      >
        היכנס
      </button>
    </div>
  );
}
