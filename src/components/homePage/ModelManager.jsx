

// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'





// import { getModelThunk } from '../../redux/slices/getModelthunk'
// import { getDetailingModelsThunk } from '../../redux/slices/getDetailingModelsThunk'
// import '../style/modell.css'



// export const ModelManager = () => {
//   const dispatch = useDispatch()
//   const modells = useSelector(state => state.modellSlice.models)
//   const detailingModels = useSelector(state => state.detailngModelsSlice.detailingModels)
//   const schoolName = useSelector(state => state.schoolsSlice.school.name)

//   // רק מנהל יכול לראות את הקומפוננטה
//   if (schoolName !== 'maneger') return null

//   // סטייטים לטפסים
//   const [newModel, setNewModel] = useState({
//     idModel: '',
//     price: '',
//     kategory: '',
//     picture: ''
//   })

//   const [newDetailing, setNewDetailing] = useState({
//     idModel: '',
//     count: '',
//     size: ''
//   })

//   const [editModelId, setEditModelId] = useState(null)
//   const [editModelData, setEditModelData] = useState({})

//   const [editDetailingId, setEditDetailingId] = useState(null)
//   const [editDetailingData, setEditDetailingData] = useState({})

//   // טעינת דגמים בהתחלה
//   useEffect(() => {
//     if (!modells || modells.length === 0) {
//       dispatch(getModelThunk())
//     }
//   }, [dispatch, modells])

//   // טעינת פרטי דגם לפי idModel
//   const loadDetailingModels = (idModel) => {
//     dispatch(getDetailingModelsThunk({ id1: idModel }))
//   }

//   // הוספת דגם חדש
//   const handleAddModel = async (e) => {
//     e.preventDefault()
//     if (!newModel.idModel || !newModel.price || !newModel.kategory || !newModel.picture) {
//       alert('אנא מלא את כל שדות הדגם')
//       return
//     }
//     // await dispatch(addModelThunk(newModel))
//     setNewModel({ idModel: '', price: '', kategory: '', picture: '' })
//   }

//   // הוספת פרטי דגם
//   const handleAddDetailing = async (e) => {
//     e.preventDefault()
//     if (!newDetailing.idModel || !newDetailing.count || !newDetailing.size) {
//       alert('אנא מלא את כל שדות פרטי הדגם')
//       return
//     }
//     // await dispatch(addDetailingModelThunk(newDetailing))
//     setNewDetailing({ idModel: '', count: '', size: '' })
//   }

//   // מחיקת דגם
//   const handleDeleteModel = async (idModel) => {
//     if (window.confirm(`האם אתה בטוח שברצונך למחוק את הדגם ${idModel}?`)) {

//     }
//   }

//   // מחיקת פרטי דגם
//   const handleDeleteDetailing = async (id) => {
//     if (window.confirm(`האם אתה בטוח שברצונך למחוק את פרטי הדגם?`)) {

//     }
//   }

//   // התחלת עריכה של דגם
//   const startEditModel = (model) => {
//     setEditModelId(model.idModel)
//     setEditModelData({ ...model })
//   }

//   // שמירת עריכה של דגם
//   const saveEditModel = async () => {
//     // await dispatch(updateModelThunk(editModelData))
//     setEditModelId(null)
//     setEditModelData({})
//   }

//   // התחלת עריכה של פרטי דגם
//   const startEditDetailing = (det) => {
//     setEditDetailingId(det.id)
//     setEditDetailingData({ ...det })
//   }

//   // שמירת עריכה של פרטי דגם
//   const saveEditDetailing = async () => {
//     // await dispatch(updateDetailingModelThunk(editDetailingData))
//     setEditDetailingId(null)
//     setEditDetailingData({})
//   }

//   return (
//     <div className="models-page" style={{ maxWidth: 1200, margin: 'auto', padding: 20 }}>
//       <h2 style={{ marginBottom: 20, color: '#1a1a2e' }}>ניהול דגמים</h2>

//       {/* טופס הוספת דגם */}

//       <form
//         onSubmit={handleAddModel}
//         style={{
//           marginBottom: 30,
//           backgroundColor: '#f8f9fa',
//           padding: 20,
//           borderRadius: 10,
//           boxShadow: '0 0 10px rgba(0,0,0,0.1)'
//         }}
//       >
//         <h3>הוספת דגם חדש</h3>
//         <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
//           <input
//             type="text"
//             placeholder="מספר דגם"
//             value={newModel.idModel}

//             onChange={(e) => setNewModel({ ...newModel, idModel: e.target.value })}
//             required
//             style={{ flex: 1, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//           <input
//             type="number"
//             placeholder="מחיר"
//             value={newModel.price}

//             onChange={(e) => setNewModel({ ...newModel, price: e.target.value })}
//             required
//             style={{ flex: 1, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//           <input
//             type="text"
//             placeholder="קטגוריה"
//             value={newModel.kategory}

//             onChange={(e) => setNewModel({ ...newModel, kategory: e.target.value })}
//             required
//             style={{ flex: 1, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//           <input
//             type="text"
//             placeholder="קישור לתמונה"
//             value={newModel.picture}

//             onChange={(e) => setNewModel({ ...newModel, picture: e.target.value })}
//             required
//             style={{ flex: 2, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             marginTop: 15,
//             backgroundColor: '#ff2e63',
//             color: 'white',
//             border: 'none',
//             padding: '10px 20px',
//             borderRadius: 30,
//             cursor: 'pointer'
//           }}
//         >
//           הוסף דגם
//         </button>
//       </form>

//       {/* רשימת דגמים */}
//       <div>
//         <h3 style={{ marginBottom: 15 }}>רשימת דגמים</h3>
//         {modells.length === 0 && <p>אין דגמים להצגה</p>}


//         {modells.map((model) => (
//           <div
//             key={model.idModel}
//             style={{
//               marginBottom: 20,
//               padding: 15,
//               backgroundColor: '#fff',
//               borderRadius: 10,
//               boxShadow: '0 0 10px rgba(0,0,0,0.05)',
//               display: 'flex',
//               flexDirection: 'column'
//             }}
//           >
//             {editModelId === model.idModel ? (
//               <>
//                 <input
//                   type="text"
//                   value={editModelData.idModel}

//                   onChange={(e) => setEditModelData({ ...editModelData, idModel: e.target.value })}
//                   disabled
//                   style={{ marginBottom: 8, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//                 />
//                 <input
//                   type="number"
//                   value={editModelData.price}

//                   onChange={(e) => setEditModelData({ ...editModelData, price: e.target.value })}
//                   style={{ marginBottom: 8, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//                 />
//                 <input
//                   type="text"
//                   value={editModelData.kategory}

//                   onChange={(e) => setEditModelData({ ...editModelData, kategory: e.target.value })}
//                   style={{ marginBottom: 8, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//                 />
//                 <input
//                   type="text"
//                   value={editModelData.picture}

//                   onChange={(e) => setEditModelData({ ...editModelData, picture: e.target.value })}
//                   style={{ marginBottom: 8, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//                 />
//                 <div>


//                   <button
//                     onClick={saveEditModel}
//                     style={{
//                       marginRight: 10,
//                       backgroundColor: '#4caf50',
//                       color: 'white',
//                       border: 'none',
//                       padding: '8px 15px',
//                       borderRadius: 20,
//                       cursor: 'pointer'
//                     }}
//                   >
//                     שמור
//                   </button>
//                   <button
//                     onClick={() => setEditModelId(null)}
//                     style={{
//                       backgroundColor: '#ccc',
//                       border: 'none',
//                       padding: '8px 15px',
//                       borderRadius: 20,
//                       cursor: 'pointer'
//                     }}
//                   >
//                     בטל
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>

//                   <img
//                     src={model.picture}
//                     alt={`דגם ${model.idModel}`}
//                     style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 10 }}
//                   />
//                   <div style={{ flexGrow: 1 }}>



//                     <p>
//                       <b>דגם:</b> {model.idModel}
//                     </p>
//                     <p>
//                       <b>קטגוריה:</b> {model.kategory}
//                     </p>
//                     <p>
//                       <b>מחיר:</b> ₪{model.price}
//                     </p>
//                   </div>
//                   <div>


//                     <button
//                       onClick={() => startEditModel(model)}
//                       style={{
//                         marginRight: 10,
//                         backgroundColor: '#ff9800',
//                         color: 'white',
//                         border: 'none',
//                         padding: '8px 15px',
//                         borderRadius: 20,
//                         cursor: 'pointer'
//                       }}
//                     >
//                       ערוך
//                     </button>
//                     <button
//                       onClick={() => handleDeleteModel(model.idModel)}
//                       style={{
//                         backgroundColor: '#f44336',
//                         color: 'white',
//                         border: 'none',
//                         padding: '8px 15px',
//                         borderRadius: 20,
//                         cursor: 'pointer'
//                       }}
//                     >
//                       מחק
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => loadDetailingModels(model.idModel)}
//                   style={{
//                     marginTop: 10,
//                     backgroundColor: '#2196f3',
//                     color: 'white',
//                     border: 'none',
//                     padding: '6px 12px',
//                     borderRadius: 20,
//                     cursor: 'pointer',
//                     alignSelf: 'flex-start'
//                   }}
//                 >
//                   הצג פרטי דגם
//                 </button>
//               </>
//             )}

//             {/* הצגת פרטי דגם מתאימים */}




































//             {detailingModels &&
//               detailingModels.length > 0 &&
//               detailingModels[0].idModel === model.idModel && (
//                 <div
//                   style={{
//                     marginTop: 15,
//                     backgroundColor: '#f0f0f0',
//                     padding: 10,
//                     borderRadius: 10
//                   }}
//                 >
//                   <h4>פרטי דגם</h4>
//                   {detailingModels.map((det) => (
//                     <div
//                       key={det.id}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         marginBottom: 8
//                       }}
//                     >
//                       {editDetailingId === det.id ? (
//                         <>
//                           <input
//                             type="number"
//                             value={editDetailingData.count}
//                             onChange={(e) =>
//                               setEditDetailingData({ ...editDetailingData, count: e.target.value })
//                             }
//                             style={{
//                               width: 80,
//                               marginRight: 10,
//                               padding: 5,
//                               borderRadius: 5,
//                               border: '1px solid #ccc'
//                             }}
//                           />
//                           <input
//                             type="text"
//                             value={editDetailingData.size}
//                             onChange={(e) =>
//                               setEditDetailingData({ ...editDetailingData, size: e.target.value })
//                             }
//                             style={{
//                               width: 80,
//                               marginRight: 10,
//                               padding: 5,
//                               borderRadius: 5,
//                               border: '1px solid #ccc'
//                             }}
//                           />
//                           <button
//                             onClick={saveEditDetailing}
//                             style={{
//                               marginRight: 10,
//                               backgroundColor: '#4caf50',
//                               color: 'white',
//                               border: 'none',
//                               padding: '6px 12px',
//                               borderRadius: 20,
//                               cursor: 'pointer'
//                             }}
//                           >
//                             שמור
//                           </button>
//                           <button
//                             onClick={() => setEditDetailingId(null)}
//                             style={{
//                               backgroundColor: '#ccc',
//                               border: 'none',
//                               padding: '6px 12px',
//                               borderRadius: 20,
//                               cursor: 'pointer'
//                             }}
//                           >
//                             בטל
//                           </button>
//                         </>
//                       ) : (
//                         <>
//                           <span>כמות: {det.count}</span>
//                           <span>מידה: {det.size}</span>
//                           <div>
//                             <button
//                               onClick={() => startEditDetailing(det)}
//                               style={{
//                                 marginRight: 10,
//                                 backgroundColor: '#ff9800',
//                                 color: 'white',
//                                 border: 'none',
//                                 padding: '6px 12px',
//                                 borderRadius: 20,
//                                 cursor: 'pointer'
//                               }}
//                             >
//                               ערוך
//                             </button>
//                             <button
//                               onClick={() => handleDeleteDetailing(det.id)}
//                               style={{
//                                 backgroundColor: '#f44336',
//                                 color: 'white',
//                                 border: 'none',
//                                 padding: '6px 12px',
//                                 borderRadius: 20,
//                                 cursor: 'pointer'
//                               }}
//                             >
//                               מחק
//                             </button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         ))}
//       </div>

//       {/* טופס הוספת פרטי דגם */}

//       <form
//         onSubmit={handleAddDetailing}
//         style={{
//           marginTop: 40,
//           backgroundColor: '#f8f9fa',
//           padding: 20,
//           borderRadius: 10,
//           boxShadow: '0 0 10px rgba(0,0,0,0.1)'
//         }}
//       >
//         <h3>הוספת פרטי דגם</h3>
//         <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
//           <input
//             type="text"
//             placeholder="מספר דגם (idModel)"
//             value={newDetailing.idModel}

//             onChange={(e) => setNewDetailing({ ...newDetailing, idModel: e.target.value })}
//             required
//             style={{ flex: 1, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//           <input
//             type="number"
//             placeholder="כמות"
//             value={newDetailing.count}

//             onChange={(e) => setNewDetailing({ ...newDetailing, count: e.target.value })}
//             required
//             style={{ flex: 1, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//           <input
//             type="text"
//             placeholder="מידה"
//             value={newDetailing.size}

//             onChange={(e) => setNewDetailing({ ...newDetailing, size: e.target.value })}
//             required
//             style={{ flex: 1, padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             marginTop: 15,
//             backgroundColor: '#ff2e63',
//              color: 'white',
//             border: 'none',
//             padding: '10px 20px',
//             borderRadius: 30,
//             cursor: 'pointer'
//           }}
//         >
//           הוסף פרטי דגם
//         </button>
//       </form>
//     </div>
//   )
// }