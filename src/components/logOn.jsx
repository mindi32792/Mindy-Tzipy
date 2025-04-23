import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
 import { useSelector } from "react-redux"
import "./logOn.css"
import { loginThunk } from "../redux/slices/loginthunk";
import { Nivut } from "./nivut";
export const LogOn = () => {
  const [flagN, setFlagFN] = useState(false);
  const [flagA, setFlagA] = useState(false);
  const [newSchool, setNewSchool] = useState({ idSchool:0, name: '',addressSchool: '', phone: '' });

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const status=useSelector(state=>state.schoolsSlice.status)

  const save = ()=> {
    dispatch(loginThunk(newSchool))
    navigate(`/home`)
  }
  
  return <>
  
  <div className="formContainer">
  <label className="aa">יש להירשם למערכת</label>
  <br />
  <br />
    <label className="formLabel">שם מוסד</label>
    <br />
    <input   className="formInput"  type="text" placeholder="שם מוסד" onChange={(e) => {
      setNewSchool({ ...newSchool, name: e.target.value })
      if (e.target.value !== "") {
        setFlagFN(true)
      }
      else
        setFlagFN(false)
    }} />
    <br />

    <label className="formLabel">כתובת מוסד</label>
    <br />
    <input   className="formInput"  type="text" placeholder="כתובת מוסד" onChange={(e) => {
      setNewSchool({ ...newSchool, addressSchool: e.target.value })
      if (e.target.value !== "") {
        setFlagA(true)
      }
      else
      setFlagA(false)
    }} />
    <br />
    <label  className="formLabel"> טלפון</label>
    <br />
    <input  className="formInput"  type="text" placeholder="טלפון" onChange={(e) => {
      setNewSchool({ ...newSchool, phone: e.target.value })

    }} />
    <br />
   
<button className="formButton"  disabled={!flagN || !flagA } onClick={()=>save()}>רישום</button>
  {/* {status===5  &&  navigate(`/home`)} */}
  </div>
  </>

}