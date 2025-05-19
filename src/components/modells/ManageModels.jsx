//     // import React, { useEffect, useState } from 'react'
//     // import { useSelector, useDispatch } from 'react-redux'

//     // import { getModelThunk} from '../../redux/slices/getModelthunk'
//     // import { addModellThunk } from '../../redux/slices/addModelThunk'
//     // import {DeleteModellThunk}from '../../redux/slices/DeleteModellThunk'
//     // // import { getModelThunk, addModelThunk, updateModelThunk, deleteModelThunk } from '../../redux/slices/getModelthunk'
//     // import { getDetailingModelsThunk } from '../../redux/slices/getDetailingModelsThunk'
//     // // import { getDetailingModelsThunk, addDetailingModelThunk, updateDetailingModelThunk, deleteDetailingModelThunk } from '../../redux/slices/getDetailingModelsThunk'

//     // import '../style/manageModels.css'
//     // import { Maneger } from '../homePage/manegar'

//     // export const ManageModels = () => {
//     //   const dispatch = useDispatch()
//     //   const modells = useSelector(state => state.modellSlice.models)
//     //   const eventDate = useSelector(state => state.schoolsSlice.dateOfEvent)
//     //   const schoolName = useSelector(state => state.schoolsSlice.school.name)
//     //   const detailingModelsFromStore = useSelector(state => state.detailngModelsSlice.detailingModels)

//     //   const [editingModel, setEditingModel] = useState(null)
//     //   const [formData, setFormData] = useState({
//     //     idModel: '',
//     //     kategory: '',
//     //     price: '',
//     //     picture: ''
//     //   })
//     //   const [selectedImage, setSelectedImage] = useState(null);
//     //   const [uploadingImage, setUploadingImage] = useState(false);
//     //   const [showDetailDialog, setShowDetailDialog] = useState(false)
//     //   const [selectedModel, setSelectedModel] = useState(null)
//     //   const [detailingModels, setDetailingModels] = useState([])
//     //   const [detailFormData, setDetailFormData] = useState({
//     //     idModel: '',
//     //     size: '',
//     //     countByDate: 0,
//     //     count: 0
//     //   })
//     //   const [snackbar, setSnackbar] = useState({
//     //     open: false,
//     //     message: '',
//     //     severity: 'success'
//     //   });
//     //   const [editingDetail, setEditingDetail] = useState(null)
//     //   const [addingDetail, setAddingDetail] = useState(false)
//     //   const [showModelForm, setShowModelForm] = useState(false) // רק כשמוסיפים דגם

//     //   useEffect(() => {
//     //     if (modells.length === 0) dispatch(getModelThunk())
//     //   }, [dispatch, modells.length])

//     //   useEffect(() => {
//     //     setDetailingModels(detailingModelsFromStore)
//     //   }, [detailingModelsFromStore])

//     //   // --- Model handlers ---
//     //   const openAddModel = () => {
//     //     setEditingModel(null)
//     //     setFormData({ idModel: '', kategory: '', price: '', picture: '' })
//     //     setShowModelForm(true)
//     //   }

//     //   const openEditModel = (model) => {
//     //     setEditingModel(model)
//     //     setFormData({
//     //       idModel: model.idModel,
//     //       kategory: model.kategory,
//     //       price: model.price,
//     //       picture: model.picture
//     //     })
//     //     setShowModelForm(true)
//     //   }

//     //   const handleModelChange = (e) => {
//     //     const { name, value, files } = e.target
//     //     if (name === 'picture' && files && files[0]) {
//     //       setSelectedImage(files[0]);
//     //       const fileUrl = URL.createObjectURL(files[0])
//     //       setFormData(prev => ({ ...prev, picture: fileUrl }))
//     //     } else {
//     //       setFormData(prev => ({ ...prev, [name]: value }))
//     //     }
//     //   }

//     //   const saveModel = async () => {
//     //    debugger
//     //     const imageUrl = await uploadImage();
//     //     if (!imageUrl) return;
//     //     // Add product with image URL
//     //     const productToAdd = {
//     //       ...formData,
//     //       picture: imageUrl
//     //     };
//     //     if (!formData.idModel || !formData.kategory || !formData.price) {
//     //       alert('אנא מלא את כל השדות של הדגם')
//     //       return
//     //     }

//     //     if (editingModel) {
//     //       // await dispatch(updateModelThunk(formData))
//     //     } else {
//     //       await dispatch(addModellThunk(productToAdd))
//     //     }
//     //     // רענון רשימת הדגמים לאחר שמירה
//     //     await dispatch(getModelThunk())
  
//     //     setEditingModel(null)
//     //     setFormData({ idModel: '', kategory: '', price: '', picture: '' })
//     //     setShowModelForm(false)
//     //   }

//     // const deleteModel = async (idModel) => {
//     //   if (window.confirm('האם אתה בטוח שברצונך למחוק דגם זה?')) {
//     //     const resultAction = await dispatch(DeleteModellThunk(idModel));
//     //     if (DeleteModellThunk.fulfilled.match(resultAction)) {
//     //       // טעינה מחדש של הדגמים לאחר מחיקה מוצלחת
//     //       dispatch(getModelThunk());
//     //     } else {
//     //       alert('אירעה שגיאה במחיקת הדגם');
//     //     }
//     //   }
//     // };
//     //   // --- Detailing handlers ---
//     //   const openDetails = async (model) => {
//     //     await dispatch(getDetailingModelsThunk({ id1: model.idModel, eventDate }))
//     //     setSelectedModel(model)
//     //     setShowDetailDialog(true)
//     //   }

//     //   const closeDetails = () => {
//     //     setShowDetailDialog(false)
//     //     setSelectedModel(null)
//     //     setDetailingModels([])
//     //     setEditingDetail(null)
//     //     setDetailFormData({ idModel: '', size: '', countByDate: 0, count: 0 })
//     //     setAddingDetail(false)
//     //   }

//     //   const openAddDetail = () => {
//     //     setAddingDetail(true)
//     //     setEditingDetail(null)
//     //     setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 })
//     //   }

//     //   const openEditDetail = (detail) => {
//     //     setEditingDetail(detail)
//     //     setAddingDetail(false)
//     //     setDetailFormData({
//     //       idModel: detail.idModel,
//     //       size: detail.size,
//     //       countByDate: detail.countByDate,
//     //       count: detail.count
//     //     })
//     //   }

//     //   const handleDetailChange = (e) => {
//     //     const { name, value } = e.target
//     //     setDetailFormData(prev => ({ ...prev, [name]: name === 'size' ? value : Number(value) }))
//     //   }

//     //   const uploadImage = async () => {
//     //     if (!selectedImage) {
//     //       setSnackbar({
//     //         open: true,
//     //         message: 'אנא בחר תמונה',
//     //         severity: 'warning'
//     //       });
//     //       return null;
//     //     }
  
//     //     setUploadingImage(true);
  
//     //     const formData1 = new FormData();
//     //     formData1.append('file', selectedImage); // שינוי מ-'image' ל-'file'
  
//     //     try {
//     //       // שימוש ב-fetch
//     //       const response = await fetch('https://localhost:7042/api/Img/upload', {
//     //         method: 'POST',
//     //         body: formData1,
//     //       });
  
//     //       if (!response.ok) {
//     //         throw new Error(`שגיאת שרת: ${response.status}`);
//     //       }
  
//     //       const data = await response.json();
//     //       setUploadingImage(false);
  
//     //       setSnackbar({
//     //         open: true,
//     //         message: 'התמונה הועלתה בהצלחה',
//     //         severity: 'success'
//     //       });
      
//     //       return data.imageUrl; // השרת מחזיר את הנתיב בשדה imageUrl
//     //     } catch (error) {
//     //       console.error("שגיאה בהעלאת תמונה:", error);
//     //       setUploadingImage(false);
//     //       setSnackbar({
//     //         open: true,
//     //         message: 'שגיאה בהעלאת התמונה',
//     //         severity: 'error'
//     //       });
//     //       return null;
//     //     }
//     //   };
  
//     //   const saveDetail = () => {
//     //     if (!detailFormData.size || detailFormData.countByDate < 0 || detailFormData.count < 0) {
//     //       alert('אנא מלא את כל השדות של פרטי הדגם בצורה תקינה')
//     //       return
//     //     }
//     //     if (editingDetail) {
//     //       // dispatch(updateDetailingModelThunk(detailFormData))
//     //     } else {
//     //       // dispatch(addDetailingModelThunk(detailFormData))
//     //     }
//     //     // רענון פרטי דגם לאחר שמירה
//     //     dispatch(getDetailingModelsThunk({ id1: selectedModel.idModel, eventDate }))
//     //     setEditingDetail(null)
//     //     setAddingDetail(false)
//     //     setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 })
//     //   }

//     //   const deleteDetail = (detail) => {
//     //     if (window.confirm('האם אתה בטוח שברצונך למחוק פרטי דגם זה?')) {
//     //       // dispatch(deleteDetailingModelThunk(detail))
//     //       dispatch(getDetailingModelsThunk({ id1: selectedModel.idModel, eventDate }))
//     //     }
//     //   }

//     //   return (
//     //     <div className="manage-models-container">
//     //       <Maneger></Maneger>
//     //       <h1 className="manage-title">ניהול תלבושות</h1>

//     //       <button className="btn-primary add-model-btn" onClick={openAddModel}>הוסף דגם חדש</button>
//     //       {/* טופס עריכת/הוספת דגם מוצג רק בלחיצה */}
//     //       {showModelForm && (
//     //         <div className="model-form">
//     //           <h2>{editingModel ? 'עריכת דגם' : 'הוספת דגם חדש'}</h2>
//     //           <label>מספר דגם:</label>
//     //           <input
//     //             type="text"
//     //             name="idModel"
//     //             value={formData.idModel}
//     //             onChange={handleModelChange}
//     //             disabled={!!editingModel}
//     //           />
//     //           <label>קטגוריה:</label>
//     //           <input
//     //             type="text"
//     //             name="kategory"
//     //             value={formData.kategory}
//     //             onChange={handleModelChange}
//     //           />
//     //           <label>מחיר:</label>
//     //           <input
//     //             type="number"
//     //             name="price"
//     //             value={formData.price}
//     //             onChange={handleModelChange}
//     //           />
//     //           <label>תמונה:</label>
//     //           <input
//     //             type="file"
//     //             name="picture"
//     //             accept="image/*"
//     //             onChange={handleModelChange}
//     //           />
//     //           {formData.picture && (
//     //             <img src={formData.picture} alt="תמונה לדגם" className="model-image-preview" />
//     //           )}
//     //           <div className="form-buttons">
//     //             <button className="btn-primary" onClick={saveModel}>שמור</button>
//     //             <button className="btn-secondary" onClick={() => setShowModelForm(false)}>ביטול</button>
//     //           </div>
//     //         </div>
//     //       )}

//     //       <div className="models-list">
//     //         {modells.length === 0 && <p>אין תלבושות להצגה</p>}
//     //         {modells.map(model => (
//     //           <div key={model.idModel} className="model-card">
//     //             <div className="model-image" style={{ backgroundImage: `url(${model.picture || '/images/default-model.jpg'})` }} />
//     //             <div className="model-info">
//     //               <h3>דגם: {model.idModel}</h3>
//     //               <p>קטגוריה: {model.kategory}</p>
//     //               <p>מחיר: ₪{model.price}</p>
//     //             </div>
//     //             <div className="model-actions">
//     //               <button className="btn-primary" onClick={() => openEditModel(model)}>עריכה</button>
//     //               <button className="btn-secondary" onClick={() => deleteModel(model.idModel)}>מחיקה</button>
//     //               <button className="btn-primary" onClick={() => openDetails(model)}>פרטי דגם</button>
//     //             </div>
//     //           </div>
//     //         ))}
//     //       </div>

//     //       {showDetailDialog && (
//     //         <dialog open className="detail-dialog">
//     //           <div className="detail-dialog-header">
//     //             <h2>פרטי דגם: {selectedModel?.idModel}</h2>
//     //             <button className="close-btn" onClick={closeDetails}>✖</button>
//     //           </div>

//     //           <div className="detail-dialog-content">
//     //             <div className="detail-list">
//     //               {detailingModels.length === 0 && <p>אין פרטי דגם להצגה</p>}
//     //               {detailingModels.map(detail => (
//     //                 <div key={`${detail.idModel}-${detail.size}`} className="detail-item">
//     //                   <div>
//     //                     <strong>מידה:</strong> {detail.size}
//     //                   </div>
//     //                   <div>
//     //                     <strong>כמות פנויה לתאריך:</strong> {detail.countByDate}
//     //                   </div>
//     //                   <div>
//     //                     <strong>כמות:</strong> {detail.count}
//     //                   </div>
//     //                   <div className="detail-actions">
//     //                     <button className="btn-primary" onClick={() => openEditDetail(detail)}>עריכה</button>
//     //                     <button className="btn-secondary" onClick={() => deleteDetail(detail)}>מחיקה</button>
//     //                   </div>
//     //                 </div>
//     //               ))}
//     //             </div>

//     //             {(addingDetail || editingDetail) && (
//     //               <div className="detail-form">
//     //                 <h3>{editingDetail ? 'עריכת פרטי דגם' : 'הוספת פרטי דגם'}</h3>
//     //                 <label>


//     import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { getModelThunk } from '../../redux/slices/getModelthunk'
// import { addModellThunk } from '../../redux/slices/addModelThunk'
// import { DeleteModellThunk } from '../../redux/slices/DeleteModellThunk'
// import { getDetailingModelsThunk } from '../../redux/slices/getDetailingModelsThunk'

// import '../style/manageModels.css'
// import { Maneger } from '../homePage/manegar'

// export const ManageModels = () => {
//   const dispatch = useDispatch()
//   const modells = useSelector(state => state.modellSlice.models)
//   const eventDate = useSelector(state => state.schoolsSlice.dateOfEvent)
//   const schoolName = useSelector(state => state.schoolsSlice.school.name)
//   const detailingModelsFromStore = useSelector(state => state.detailngModelsSlice.detailingModels)

//   const [editingModel, setEditingModel] = useState(null)
//   const [formData, setFormData] = useState({
//     idModel: '',
//     kategory: '',
//     price: '',
//     picture: ''
//   })
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [uploadingImage, setUploadingImage] = useState(false)
//   const [showDetailDialog, setShowDetailDialog] = useState(false)
//   const [selectedModel, setSelectedModel] = useState(null)
//   const [detailingModels, setDetailingModels] = useState([])
//   const [detailFormData, setDetailFormData] = useState({
//     idModel: '',
//     size: '',
//     countByDate: 0,
//     count: 0
//   })
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   })
//   const [editingDetail, setEditingDetail] = useState(null)
//   const [addingDetail, setAddingDetail] = useState(false)
//   const [showModelForm, setShowModelForm] = useState(false) // רק כשמוסיפים דגם

//   useEffect(() => {
//     if (modells.length === 0) dispatch(getModelThunk())
//   }, [dispatch, modells.length])

//   useEffect(() => {
//     setDetailingModels(detailingModelsFromStore)
//   }, [detailingModelsFromStore])

//   // --- Model handlers ---
//   const openAddModel = () => {
//     setEditingModel(null)
//     setFormData({ idModel: '', kategory: '', price: '', picture: '' })
//     setSelectedImage(null)
//     setShowModelForm(true)
//   }

//   const openEditModel = (model) => {
//     setEditingModel(model)
//     setFormData({
//       idModel: model.idModel,
//       kategory: model.kategory,
//       price: model.price,
//       picture: model.picture
//     })
//     setSelectedImage(null)
//     setShowModelForm(true)
//   }

//   const handleModelChange = (e) => {
//     const { name, value, files } = e.target
//     if (name === 'picture' && files && files[0]) {
//       setSelectedImage(files[0])
//       // For preview, create local URL
//       const fileUrl = URL.createObjectURL(files[0])
//       setFormData(prev => ({ ...prev, picture: fileUrl }))
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }))
//     }
//   }

//   const uploadImage = async () => {
//     debugger
//     if (!selectedImage) {
//       setSnackbar({
//         open: true,
//         message: 'אנא בחר תמונה',
//         severity: 'warning'
//       })
//       return null
//     }

//     setUploadingImage(true)

//     const formData1 = new FormData()
//     formData1.append('file', selectedImage) // שם השדה 'file' כפי שהשרת מצפה

//     try {
//       const response = await fetch('https://localhost:7042/api/Img/upload', {
//         method: 'POST',
//         body: formData1,
//       })

//       if (!response.ok) {
//         throw new Error(`שגיאת שרת: ${response.status}`)
//       }

//       const data = await response.json()
//       setUploadingImage(false)

//       setSnackbar({
//         open: true,
//         message: 'התמונה הועלתה בהצלחה',
//         severity: 'success'
//       })

//       return data.imageUrl // השרת מחזיר את הנתיב בשדה imageUrl
//     } catch (error) {
//       console.error("שגיאה בהעלאת תמונה:", error)
//       setUploadingImage(false)
//       setSnackbar({
//         open: true,
//         message: 'שגיאה בהעלאת התמונה',
//         severity: 'error'
//       })
//       return null
//     }
//   }

//   const saveModel = async () => {
//     debugger
//     if (!formData.idModel || !formData.kategory || !formData.price) {
//       alert('אנא מלא את כל השדות של הדגם')
//       return
//     }

//     let imageUrl = formData.picture
//     if (selectedImage) {
//       const uploadedUrl = await uploadImage()
//       if (!uploadedUrl) return
//       imageUrl = uploadedUrl
//     }

//     const productToAdd = {
//       ...formData,
//       picture: imageUrl
//     }

//     if (editingModel) {
//       // כאן ניתן להוסיף קריאה לעדכון דגם, לדוגמה:
//       // await dispatch(updateModelThunk(productToAdd))
//     } else {
//       await dispatch(addModellThunk(productToAdd))
//     }

//     await dispatch(getModelThunk())

//     setEditingModel(null)
//     setFormData({ idModel: '', kategory: '', price: '', picture: '' })
//     setSelectedImage(null)
//     setShowModelForm(false)
//   }

//   const deleteModel = async (idModel) => {
//     if (window.confirm('האם אתה בטוח שברצונך למחוק דגם זה?')) {
//       const resultAction = await dispatch(DeleteModellThunk(idModel))
//       if (DeleteModellThunk.fulfilled.match(resultAction)) {
//         await dispatch(getModelThunk())
//       } else {
//         alert('אירעה שגיאה במחיקת הדגם')
//       }
//     }
//   }

//   // --- Detailing handlers ---
//   const openDetails = async (model) => {
//     await dispatch(getDetailingModelsThunk({ id1: model.idModel, eventDate }))
//     setSelectedModel(model)
//     setShowDetailDialog(true)
//   }

//   const closeDetails = () => {
//     setShowDetailDialog(false)
//     setSelectedModel(null)
//     setDetailingModels([])
//     setEditingDetail(null)
//     setDetailFormData({ idModel: '', size: '', countByDate: 0, count: 0 })
//     setAddingDetail(false)
//   }

//   const openAddDetail = () => {
//     setAddingDetail(true)
//     setEditingDetail(null)
//     setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 })
//   }

//   const openEditDetail = (detail) => {
//     setEditingDetail(detail)
//     setAddingDetail(false)
//     setDetailFormData({
//       idModel: detail.idModel,
//       size: detail.size,
//       countByDate: detail.countByDate,
//       count: detail.count
//     })
//   }

//   const handleDetailChange = (e) => {
//     const { name, value } = e.target
//     setDetailFormData(prev => ({ ...prev, [name]: name === 'size' ? value : Number(value) }))
//   }

//   const saveDetail = () => {
//     if (!detailFormData.size || detailFormData.countByDate < 0 || detailFormData.count < 0) {
//       alert('אנא מלא את כל השדות של פרטי הדגם בצורה תקינה')
//       return
//     }
//     if (editingDetail) {
//       // dispatch(updateDetailingModelThunk(detailFormData))
//     } else {
//       // dispatch(addDetailingModelThunk(detailFormData))
//     }
//     dispatch(getDetailingModelsThunk({ id1: selectedModel.idModel, eventDate }))
//     setEditingDetail(null)
//     setAddingDetail(false)
//     setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 })
//   }

//   const deleteDetail = (detail) => {
//     if (window.confirm('האם אתה בטוח שברצונך למחוק פרטי דגם זה?')) {
//       // dispatch(deleteDetailingModelThunk(detail))
//       dispatch(getDetailingModelsThunk({ id1: selectedModel.idModel, eventDate }))
//     }
//   }

//   return (
//     <div className="manage-models-container">
//       <Maneger></Maneger>
//       <h1 className="manage-title">ניהול תלבושות</h1>

//       <button className="btn-primary add-model-btn" onClick={openAddModel}>הוסף דגם חדש</button>
//       {showModelForm && (
//         <div className="model-form">
//           <h2>{editingModel ? 'עריכת דגם' : 'הוספת דגם חדש'}</h2>
//           <label>מספר דגם:</label>
//           <input
//             type="text"
//             name="idModel"
//             value={formData.idModel}
//             onChange={handleModelChange}
//             disabled={!!editingModel}
//           />
//           <label>קטגוריה:</label>
//           <input
//             type="text"
//             name="kategory"
//             value={formData.kategory}
//             onChange={handleModelChange}
//           />
//           <label>מחיר:</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleModelChange}
//           />
//           <label>תמונה:</label>
//           <input
//             type="file"
//             name="picture"
//             accept="image/*"
//             onChange={handleModelChange}
//           />
//           {formData.picture && (
//             <img src={formData.picture} alt="תמונה לדגם" className="model-image-preview" />
//           )}
//           <div className="form-buttons">
//             <button className="btn-primary" onClick={saveModel} disabled={uploadingImage}>
//               {uploadingImage ? 'מעלה תמונה...' : 'שמור'}
//              שמור
//             </button>
//             <button className="btn-secondary" onClick={() => setShowModelForm(false)}>ביטול</button>
//           </div>
//         </div>
//       )}

//       <div className="models-list">
//         {modells.length === 0 && <p>אין תלבושות להצגה</p>}
//         {modells.map(model => (
//           <div key={model.idModel} className="model-card">
//             <div className="model-image" style={{ backgroundImage: `url(https://localhost:7042/img/${model.picture})` }} />
//             <div className="model-info">
//               <h3>דגם: {model.idModel}</h3>
//               <p>קטגוריה: {model.kategory}</p>
//               <p>מחיר: ₪{model.price}</p>
//             </div>
//             <div className="model-actions">
//               <button className="btn-primary" onClick={() => openEditModel(model)}>עריכה</button>
//               <button className="btn-secondary" onClick={() => deleteModel(model.idModel)}>מחיקה</button>
//               <button className="btn-primary" onClick={() => openDetails(model)}>פרטי דגם</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showDetailDialog && (
//         <dialog open className="detail-dialog">
//           <div className="detail-dialog-header">
//             <h2>פרטי דגם: {selectedModel?.idModel}</h2>
//             <button className="close-btn" onClick={closeDetails}>✖</button>
//           </div>

//           <div className="detail-dialog-content">
//             <div className="detail-list">
//               {detailingModels.length === 0 && <p>אין פרטי דגם להצגה</p>}
//               {detailingModels.map(detail => (
//                 <div key={`${detail.idModel}-${detail.size}`} className="detail-item">
//                   <div>
//                     <strong>מידה:</strong> {detail.size}
//                   </div>
//                   <div>
//                     <strong>כמות פנויה לתאריך:</strong> {detail.countByDate}
//                   </div>
//                   <div>
//                     <strong>כמות:</strong> {detail.count}
//                   </div>
//                   <div className="detail-actions">
//                     <button className="btn-primary" onClick={() => openEditDetail(detail)}>עריכה</button>
//                     <button className="btn-secondary" onClick={() => deleteDetail(detail)}>מחיקה</button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {(addingDetail || editingDetail) && (
//               <div className="detail-form">
//                 <h3>{editingDetail ? 'עריכת פרטי דגם' : 'הוספת פרטי דגם'}</h3>
//                 <label>מידה:</label>
//                 <input
//                   type="text"
//                   name="size"
//                   value={detailFormData.size}
//                   onChange={handleDetailChange}
//                 />
//                 <label>כמות פנויה לתאריך:</label>
//                 <input
//                   type="number"
//                   name="countByDate"
//                   min="0"
//                   value={detailFormData.countByDate}
//                   onChange={handleDetailChange}
//                 />
//                 <label>כמות:</label>
//                 <input
//                   type="number"
//                   name="count"
//                   min="0"
//                   value={detailFormData.count}
//                   onChange={handleDetailChange}
//                 />
//                 <div className="form-buttons">
//                   <button className="btn-primary" onClick={saveDetail}>שמור</button>
//                   <button className="btn-secondary" onClick={() => {
//                     setEditingDetail(null)
//                     setAddingDetail(false)
//                     setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 })
//                   }}>ביטול</button>
//                 </div>
//               </div>
//             )}

//             {!addingDetail && !editingDetail && (
//               <button className="btn-primary add-detail-btn" onClick={openAddDetail}>הוסף פרטי דגם</button>
//             )}
//           </div>
//         </dialog>
//       )}
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getModelThunk } from '../../redux/slices/getModelthunk';
import { getDetailingModelsThunk } from '../../redux/slices/getDetailingModelsThunk';
import { ShowDetailingModel } from './showDetaillingModel';
import { updateModelThunk } from '../../redux/slices/updateModelThunk';
import '../style/manageModels.css';
import { addModellThunk } from '../../redux/slices/addModelThunk';
import { Maneger } from '../homePage/manegar'

export const ManageModels = () => {
  const dispatch = useDispatch();
  const modells = useSelector(state => state.modellSlice.models);
  const eventDate = useSelector(state => state.schoolsSlice.dateOfEvent);
  const schoolName = useSelector(state => state.schoolsSlice.school.name);
  const detailingModelsFromStore = useSelector(state => state.detailngModelsSlice.detailingModels);

  const [editingModel, setEditingModel] = useState(null);
  const [formData, setFormData] = useState({
    idModel: '',
    kategory: '',
    price: '',
    picture: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [detailingModels, setDetailingModels] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [editingDetail, setEditingDetail] = useState(null);
  const [addingDetail, setAddingDetail] = useState(false);
  const [detailFormData, setDetailFormData] = useState({
    idModel: '',
    size: '',
    countByDate: 0,
    count: 0
  });
  const [showModelForm, setShowModelForm] = useState(false); // רק כשמוסיפים דגם

  useEffect(() => {
    if (modells.length === 0) dispatch(getModelThunk());
  }, [dispatch, modells.length]);

  useEffect(() => {
    setDetailingModels(detailingModelsFromStore);
  }, [detailingModelsFromStore]);

  const openAddModel = () => {
    setEditingModel(null);
    setFormData({ idModel: '', kategory: '', price: '', picture: '' });
    setSelectedImage(null);
    setShowModelForm(true);
  };

  const openEditModel = (model) => {
    setEditingModel(model);
    setFormData({
      idModel: model.idModel,
      kategory: model.kategory,
      price: model.price,
      picture: model.picture
    });
    setSelectedImage(null);
    setShowModelForm(true);
  };

  const handleModelChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture' && files && files[0]) {
      setSelectedImage(files[0]);
      const fileUrl = URL.createObjectURL(files[0]);
      setFormData(prev => ({ ...prev, picture: fileUrl }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      setSnackbar({
        open: true,
        message: 'אנא בחר תמונה',
        severity: 'warning'
      });
      return null;
    }

    setUploadingImage(true);

    const formData1 = new FormData();
    formData1.append('file', selectedImage);

    try {
      const response = await fetch('https://localhost:7042/api/Img/upload', {
        method: 'POST',
        body: formData1,
      });

      if (!response.ok) {
        throw new Error(`שגיאת שרת: ${response.status}`);
      }

      const data = await response.json();
      setUploadingImage(false);

      setSnackbar({
        open: true,
        message: 'התמונה הועלתה בהצלחה',
        severity: 'success'
      });

      return data.imageUrl;
    } catch (error) {
      console.error("שגיאה בהעלאת תמונה:", error);
      setUploadingImage(false);
      setSnackbar({
        open: true,
        message: 'שגיאה בהעלאת התמונה',
        severity: 'error'
      });
      return null;
    }
  };

  const saveModel = async () => {
    if (!formData.idModel || !formData.kategory || !formData.price) {
      alert('אנא מלא את כל השדות של הדגם');
      return;
    }

    let imageUrl = formData.picture;
    if (selectedImage) {
      const uploadedUrl = await uploadImage();
      if (!uploadedUrl) return;
      imageUrl = uploadedUrl;
    }

    const productToAdd = {
      ...formData,
      picture: imageUrl
    };

    if (editingModel) {
      // כאן ניתן להוסיף קריאה לעדכון דגם, לדוגמה:
      await dispatch(updateModelThunk(productToAdd));
    } else {
      // כאן ניתן להוסיף קריאה להוספת דגם, לדוגמה:
       await dispatch(addModellThunk(productToAdd));
    }

    await dispatch(getModelThunk());

    setEditingModel(null);
    setFormData({ idModel: '', kategory: '', price: '', picture: '' });
    setSelectedImage(null);
    setShowModelForm(false);
  };

  const deleteModel = async (idModel) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק דגם זה?')) {
      // const resultAction = await dispatch(DeleteModellThunk(idModel));
      // if (DeleteModellThunk.fulfilled.match(resultAction)) {
      //   await dispatch(getModelThunk());
      // } else {
      //   alert('אירעה שגיאה במחיקת הדגם');
      // }
    }
  };

  const openDetails = async (model) => {
    await dispatch(getDetailingModelsThunk({ id1: model.idModel, eventDate }));
    setSelectedModel(model);
    setShowDetailDialog(true);
  };

  const closeDetails = () => {
    setShowDetailDialog(false);
    setSelectedModel(null);
    setDetailingModels([]);
    setEditingDetail(null);
    setDetailFormData({ idModel: '', size: '', countByDate: 0, count: 0 });
    setAddingDetail(false);
  };

  const openAddDetail = () => {
    setAddingDetail(true);
    setEditingDetail(null);
    setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 });
  };

  const openEditDetail = (detail) => {
    setEditingDetail(detail);
    setAddingDetail(false);
    setDetailFormData({
      idModel: detail.idModel,
      size: detail.size,
      countByDate: detail.countByDate,
      count: detail.count
    });
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetailFormData(prev => ({ ...prev, [name]: name === 'size' ? value : Number(value) }));
  };

  const saveDetail = () => {
    if (!detailFormData.size || detailFormData.countByDate < 0 || detailFormData.count < 0) {
      alert('אנא מלא את כל השדות של פרטי הדגם בצורה תקינה');
      return;
    }
    if (editingDetail) {
      // dispatch(updateDetailingModelThunk(detailFormData));
    } else {
      // dispatch(addDetailingModelThunk(detailFormData));
    }
    dispatch(getDetailingModelsThunk({ id1: selectedModel.idModel, eventDate }));
    setEditingDetail(null);
    setAddingDetail(false);
    setDetailFormData({ idModel: selectedModel.idModel, size: '', countByDate: 0, count: 0 });
  };

  const deleteDetail = (detail) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק פרטי דגם זה?')) {
      // dispatch(deleteDetailingModelThunk(detail));
      dispatch(getDetailingModelsThunk({ id1: selectedModel.idModel, eventDate }));
    }
  };

  return (
    <div className="manage-models-container">
      {/* מנהל */}
      <Maneger></Maneger>

      <h1 className="manage-title">ניהול תלבושות</h1>

      <button className="btn-primary add-model-btn" onClick={openAddModel}>הוסף דגם חדש</button>

      {showModelForm && (
        <div className="model-form">
          <h2>{editingModel ? 'עריכת דגם' : 'הוספת דגם חדש'}</h2>
          <label>מספר דגם:</label>
          <input
            type="text"
            name="idModel"
            value={formData.idModel}
            onChange={handleModelChange}
            disabled={!!editingModel}
          />
          <label>קטגוריה:</label>
          <input
            type="text"
            name="kategory"
            value={formData.kategory}
            onChange={handleModelChange}
          />
          <label>מחיר:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleModelChange}
          />
          <label>תמונה:</label>
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleModelChange}
          />
          {formData.picture && (
            <img src={formData.picture} alt="תמונה לדגם" className="model-image-preview" />
          )}
          <div className="form-buttons">
            <button className="btn-primary" onClick={saveModel} disabled={uploadingImage}>
              {uploadingImage ? 'מעלה תמונה...' : 'שמור'}
            </button>
            <button className="btn-secondary" onClick={() => setShowModelForm(false)}>ביטול</button>
          </div>
        </div>
      )}

      <div className="models-list">
        {modells.length === 0 && <p>אין תלבושות להצגה</p>}
        {modells.map(model => (
          <div key={model.idModel} className="model-card">
            <div className="model-image" style={{ backgroundImage: `url(https://localhost:7042/img/${model.picture})` }} />
            <div className="model-info">
              <h3>דגם: {model.idModel}</h3>
              <p>קטגוריה: {model.kategory}</p>
              <p>מחיר: ₪{model.price}</p>
            </div>
            <div className="model-actions">
              <button className="btn-primary" onClick={() => openEditModel(model)}>עריכה</button>
              <button className="btn-secondary" onClick={() => deleteModel(model.idModel)}>מחיקה</button>
              <button className="btn-primary" onClick={() => openDetails(model)}>פרטי דגם</button>
            </div>
          </div>
        ))}
      </div>

      {showDetailDialog && (
  <>
    <div className="dialog-backdrop" onClick={closeDetails}></div>
    <dialog open className="detail-dialog">
      <div className="dialog-header">
        <h2>פרטי דגם: {selectedModel?.idModel}</h2>
        <button className="close-button" onClick={closeDetails}>✖</button>
      </div>
      <div className="dialog-content">
          <div className="detail-list">
             {detailingModels.length === 0 && <p>אין פרטי דגם להצגה</p>}
                 {detailingModels.map(detail => (
                    <div key={`${detail.idModel}-${detail.size}`} className="detail-item">
                      <div>
                        <strong>מידה:</strong> {detail.size}
                      </div>
          
                      <div>
                        <strong> כמות במלאי:</strong> {detail.count}
                      </div>
                      <div className="detail-actions">
                        <button className="btn-primary" onClick={() => openEditDetail(detail)}>עריכה</button>
                        <button className="btn-secondary" onClick={() => deleteDetail(detail)}>מחיקה</button>
                      </div>
                    </div>
                  ))}
                </div>
      </div>
    </dialog>
  </>
)}
    </div>
  );
};
