import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
 import { useSelector } from "react-redux"
import "./logIn.css"
import { logOnThunk } from "../redux/slices/logOnThunk";
import { Nivut } from "./nivut";
export const LogIn = () => {
  const [flagN, setFlagFN] = useState(false);
  const [schoolName, setSchoolName] = useState();
  const [flagDate, setFlagDate] = useState(false);
  const [dateOfEvent, setDateOfEvent] = useState();

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const school=useSelector(state=>state.schoolsSlice.school)
 const check = async ()=> {
    debugger
    dispat()
    if(school.name==""){
       navigate(`/logon`)
    }
  else
  navigate(`/home`)
  }
  const dispat=async ()=>{

    await dispatch(logOnThunk(schoolName))

  }
  // const showDetails = async (id1, picture) => {
  //   await dispatch(getDetailingModelsThunk(id1));
  //   setDialog(true)
  //   setPicture1(picture)
  // }
  return <>

  <div className="formContainer">
    <label className="formLabel">שם מוסד</label>
    <br />
    <input   className="formInput"  type="text" placeholder="שם מוסד" onChange={(e) => {
      setSchoolName(e.target.value)
      if (e.target.value !== "") {
        setFlagFN(true)
      }
      else
        setFlagFN(false)
    }} />


<label className="formLabel">תאריך אירוע</label>
    <br />
 <input   className="formInput"  type="date" placeholder="תאריך אירוע" onChange={(e) => {
   setDateOfEvent(e.target.value)
      if (e.target.value!== "") {
        setFlagDate(true)
      }
      else
      setFlagDate(false)
    }}  />


    
    <br />

  
<button className="formButton"  disabled={!flagN  || !flagDate} onClick={()=>check()}>היכנס</button>
  {/* {status===5  &&  navigate(`/home`)} */}
  </div>
  </>

}