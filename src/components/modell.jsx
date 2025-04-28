import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { getModelThunk } from "../redux/slices/getModelthunk";
import { Nivut } from "./nivut";
import './modell.css'
import { getDetailingModelsThunk } from "../redux/slices/getDetailingModelsThunk";
import { ShowDetailingModel } from "./showDetaillingModel";
export const Modell = () => {
  const [dialog, setDialog] = useState(false)
  const [picture1, setPicture1] = useState()
  const modells = useSelector(state => state.modellSlice.models)
  
  const eventDate = useSelector(state => state.schoolsSlice.dateOfEvent)

  // const detailsModel=useSelector(state=>state.detailngModelsSlice.detailsModel)
  const detailsModel = useSelector(state => state.detailngModelsSlice.detailingModels)
  const dispatch = useDispatch();
  console.log(modells);
  useEffect(() => {
    if (modells.length == 0) getModels()
  }, [])
  const showDetails = async (id1, picture) => {
    debugger
    await dispatch(getDetailingModelsThunk({id1,eventDate}));
    setDialog(true)
    setPicture1(picture)
  }
  const getModels = async () => {
    await dispatch(getModelThunk());
  }
  useEffect(() => {
    if (detailsModel.length > 0) {
      // alert("הזמנות לדגם זה:",detailsModel.Count+" "+detailsModel.idModel)
      // alert(detailsModel.idModel,detailsModel.count)
    }
  }, [detailsModel])
  return <div>
    <Nivut></Nivut>

    {/* <img  className='item' src="ילדה של פעם.jpg"  />
<img  className='item' src="נעליים.jpg"  />
<img  className='item' src="חייל אנגלי.jpg"  /> */}
    <div className="aba">
      {modells && modells.length > 0 && modells.map((e) => {

        return <div className="model">
          <lable >דגם: {e.idModel}</lable>
          <br />
          <lable >קטגוריה: {e.kategory}</lable>
          <br />
          <lable >מחיר: {e.price}</lable>
          <br />
          <img className='item' src={`${e.picture}`} />
          <br />
          <button onClick={() => showDetails(e.idModel, e.picture)}>details</button>
        </div>

      })}

    </div>
    {dialog === true && <ShowDetailingModel detailingModel={detailsModel} setd={setDialog} picture={picture1} />}
  </div>

}
