// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"

// import './calendar.css'
// // import { loct } from "../../redux/slices/user/userSlice";
// import { useNavigate } from "react-router-dom";
// import { ShowDetailingOrder } from "./showDetailingOrder";
// import { getDetailingOrdersThunk } from "../redux/slices/getDetailingOrderThunk";
// import { getOrdersThunk } from "../redux/slices/getOrderThunk";
// import { Nivut } from "./nivut";
// import { Maneger } from "./manegar";

// export const Calendar = () => {


//     const [months, setMonths] = useState(0);
//     const [week, setWeek] = useState([]);
//     const[monthOver, setMonthOver] = useState();
//     const [day, setDay] = useState(0);
//     const [isMonth, setIsMonth] = useState(false);
//     const [dialog,setDialog]=useState(false)
//     const orders = useSelector(state => state.orderSlice.orders)
//     const detailingO=useSelector(state=>state.orderSlice.detailingOrders)

//     // const classes = useSelector(state => state.flights.classes);

//     const date = new Date()
//     const dates = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]
//     const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const schoolName = useSelector(state => state.schoolsSlice.school.name)

//     const dispatch = useDispatch();
//     const dateTimeMonth = (m) => {
//         //d = ראשון בחודש
//         //d2 = ראשון בשבוע של d
//         let localWeek = [];
//         let s = date.toLocaleDateString()
//         let d = new Date(s)
//         let n = date.getDate();
//         d.setDate(((date.getDate() - n) + 1))
//         d.setMonth(d.getMonth() + m + months);
//         setMonthOver(d);
//         let ss = d.toLocaleDateString();
//         let d2 = new Date(ss);
//         let dayOfWeek = d.getDay()
//         d2.setDate(d.getDate() - dayOfWeek)
//         while (d2.getDate() !== 1 || d2.getMonth() === d.getMonth()) {

//             localWeek.push(d2.toLocaleDateString());
//             setWeek(localWeek);
//             d2.setDate(d2.getDate() + 1);
//         }
//         d2.setDate(d2.getDate() - 1);

//         if (d2.getDay() !== 6) {
//             while (d2.getDay() !== 6) {
//                 d2.setDate(d2.getDate() + 1);
//                 localWeek.push(d2.toLocaleDateString());
//                 setWeek(localWeek);
//             }
//         }
//         setMonths(months + m)
//     }
//     const getOrders = async() => {
//         await  dispatch(getOrdersThunk())
//       }
//     const show =async(id) => {
//         await  dispatch(getDetailingOrdersThunk(id))
//         setDialog(true)
//       }

//     useEffect(() => {
//         setIsMonth(true);
//         dateTimeMonth(0);
//         getOrders();
//         // dispatch(loct("/calendar"));
//     }, [])

//     const navigate = useNavigate();
//     return <div className="main">  
//         {schoolName=="maneger" && <Maneger></Maneger> || <Nivut></Nivut>}

   
//         <div className="nextMonth">
//         <div onClick={() => dateTimeMonth(0 - months)} className="btn">מעבר לחודש</div>
//         <div onClick={() => dateTimeMonth(1)} className="btn">◀</div>
//         <div onClick={() => dateTimeMonth(-1)} className="btn">▶</div>
//         </div>
//         <div className="calen">

//             <div className="dadOfDay">
                
//                 {dates.map(d => <div className="daysName">
//                     {d}
//                 </div>)}
//             </div>
//             <div className="dadDays">
//                 {week.map(d => <div
//                     className={`${d === date.toLocaleDateString() ? "today" : "day"}  ${isMonth && parseInt(d.substring(0, 2)) !== monthOver.getMonth() + 1 ? "monthDay" : ""} `}>
//                   <div className="fSize" >{d}</div>
//                     {orders?.length > 0 && orders.map(o =>{return <div
//                                         className={`${new Date(o.dateOfEvent).toLocaleDateString() === d ? "dateOfEvent" : ""} `}>
                                            
//                     {new Date(o.dateOfEvent).toLocaleDateString() === d && <button onClick={()=>show(o.idOrder)}>details</button>}
//                     </div>})}
                        
                  
//                 </div>)}

//             </div>

//         </div>
//         {dialog === true && <ShowDetailingOrder  detailingOrders={detailingO} setd={setDialog}  />}
//     </div>
// }



// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import './calendar.css';
// import { useNavigate } from "react-router-dom";
// import { ShowDetailingOrder } from "./showDetailingOrder";
// import { getDetailingOrdersThunk } from "../redux/slices/getDetailingOrderThunk";
// import { getOrdersThunk } from "../redux/slices/getOrderThunk";
// import { Nivut } from "./nivut";
// import { Maneger } from "./manegar";

// export const Calendar = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [view, setView] = useState('month'); // 'month' or 'week'
//     const [selectedEvent, setSelectedEvent] = useState(null);
//     const [showEventModal, setShowEventModal] = useState(false);
    
//     const orders = useSelector(state => state.orderSlice.orders);
//     const detailingO = useSelector(state => state.orderSlice.detailingOrders);
//     const schoolName = useSelector(state => state.schoolsSlice.school.name);
    
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     // Day names in Hebrew
//     const dayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    
//     // Month names in English and Hebrew
//     const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const monthNamesHe = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

//     // Get orders from API
//     const getOrders = async() => {
//         await dispatch(getOrdersThunk());
//     };

//     // Show event details
//     const showEventDetails = async(id) => {
//         await dispatch(getDetailingOrdersThunk(id));
//         setSelectedEvent(id);
//         setShowEventModal(true);
//     };

//     // Navigate to previous month/week
//     const goToPrevious = () => {
//         const newDate = new Date(currentDate);
//         if (view === 'month') {
//             newDate.setMonth(newDate.getMonth() - 1);
//         } else {
//             newDate.setDate(newDate.getDate() - 7);
//         }
//         setCurrentDate(newDate);
//     };

//     // Navigate to next month/week
//     const goToNext = () => {
//         const newDate = new Date(currentDate);
//         if (view === 'month') {
//             newDate.setMonth(newDate.getMonth() + 1);
//         } else {
//             newDate.setDate(newDate.getDate() + 7);
//         }
//         setCurrentDate(newDate);
//     };

//     // Go to today
//     const goToToday = () => {
//         setCurrentDate(new Date());
//     };

//     // Generate days for monthly view
//     const generateMonthDays = () => {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();
        
//         // First day of the month
//         const firstDay = new Date(year, month, 1);
//         // Last day of the month
//         const lastDay = new Date(year, month + 1, 0);
        
//         // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
//         const firstDayOfWeek = firstDay.getDay();
        
//         // Calculate days from previous month to show
//         const daysFromPrevMonth = firstDayOfWeek;
        
//         // Calculate total days to show (previous month + current month + next month)
//         const totalDays = daysFromPrevMonth + lastDay.getDate();
//         // Ensure we complete the last week if needed
//         const daysFromNextMonth = 7 - (totalDays % 7 || 7);
        
//         const allDays = [];
        
//         // Add days from previous month
//         const prevMonth = new Date(year, month, 0);
//         const prevMonthDays = prevMonth.getDate();
        
//         for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
//             allDays.push({
//                 date: new Date(year, month - 1, i),
//                 isCurrentMonth: false,
//                 isToday: false
//             });
//         }
        
//         // Add days from current month
//         const today = new Date();
//         for (let i = 1; i <= lastDay.getDate(); i++) {
//             const date = new Date(year, month, i);
//             allDays.push({
//                 date,
//                 isCurrentMonth: true,
//                 isToday: date.toDateString() === today.toDateString()
//             });
//         }
        
//         // Add days from next month
//         for (let i = 1; i <= daysFromNextMonth; i++) {
//             allDays.push({
//                 date: new Date(year, month + 1, i),
//                 isCurrentMonth: false,
//                 isToday: false
//             });
//         }
        
//         return allDays;
//     };

// //     // Generate days for weekly view
//     const generateWeekDays = () => {
//         const weekDays = [];
//         const startOfWeek = new Date(currentDate);
        
//         // Adjust to start of week (Sunday)
//         const dayOfWeek = startOfWeek.getDay();
//         startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);
        
//         // Generate 7 days starting from Sunday
//         for (let i = 0; i < 7; i++) {
//             const date = new Date(startOfWeek);
//             date.setDate(startOfWeek.getDate() + i);
            
//             weekDays.push({
//                 date,
//                 isToday: date.toDateString() === new Date().toDateString()
//             });
//         }
        
//         return weekDays;
//     };

//     // Generate time slots for weekly view
//     const generateTimeSlots = () => {
//         const timeSlots = [];
//         for (let hour = 8; hour <= 20; hour++) {
//             timeSlots.push(`${hour}:00`);
//         }
//         return timeSlots;
//     };

//     // Find events for a specific date
//     const getEventsForDate = (date) => {
//         if (!orders || orders.length === 0) return [];
        
//         return orders.filter(order => {
//             const orderDate = new Date(order.dateOfEvent);
//             return orderDate.toDateString() === date.toDateString();
//         });
//     };

//     // Format date for display
//     const formatDate = (date) => {
//         return date.toLocaleDateString('he-IL');
//     };

//     useEffect(() => {
//         getOrders();
//     }, []);

//     return (
//         <div className="main">
//             {schoolName === "maneger" ? <Maneger /> : <Nivut />}
            
//             <div className="calendar-container">
//                 <div className="calendar-header">
//                     <div className="calendar-title">
//                         {view === 'month' 
//                             ? `${monthNamesHe[currentDate.getMonth()]} ${currentDate.getFullYear()}`
//                             : `שבוע ${Math.ceil(currentDate.getDate() / 7)} - ${monthNamesHe[currentDate.getMonth()]} ${currentDate.getFullYear()}`
//                         }
//                     </div>
//                     <div className="calendar-nav">
//                         <button className="calendar-nav-btn" onClick={goToPrevious}>▶</button>
//                         <button className="calendar-today-btn" onClick={goToToday}>היום</button>
//                         <button className="calendar-nav-btn" onClick={goToNext}>◀</button>
//                     </div>
//                 </div>
                
//                 <div className="calendar-view-toggle">
//                     <button 
//                         className={`view-btn ${view === 'month' ? 'active' : ''}`}
//                         onClick={() => setView('month')}
//                     >
//                         חודשי
//                     </button>
//                     <button 
//                         className={`view-btn ${view === 'week' ? 'active' : ''}`}
//                         onClick={() => setView('week')}
//                     >
//                         שבועי
//                     </button>
//                 </div>
                
//                 {view === 'month' ? (
//                     <>
//                         <div className="calendar-days-header">
//                             {dayNames.map((day, index) => (
//                                 <div key={index} className="day-name">{day}</div>
//                             ))}
//                         </div>
                        
//                         <div className="calendar-month-grid">
//                             {generateMonthDays().map((day, index) => (
//                                 <div 
//                                     key={index} 
//                                     className={`calendar-day ${!day.isCurrentMonth ? 'other-month' : ''} ${day.isToday ? 'today' : ''}`}
//                                 >
//                                     <div className="day-number">{day.date.getDate()}</div>
                                    
//                                     {getEventsForDate(day.date).map((event, eventIndex) => (
//                                         <div 
//                                             key={eventIndex} 
//                                             className={`event event-${eventIndex % 3 === 0 ? 'blue' : eventIndex % 3 === 1 ? 'green' : 'orange'}`}
//                                             onClick={() => showEventDetails(event.idOrder)}
//                                         >
//                                             {event.title || 'אירוע'}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     </>
//                 ) : (
//                     <div className="calendar-week-view">
//                         <div className="time-column">
//                             <div className="week-day-header"></div>
//                             {generateTimeSlots().map((time, index) => (
//                                 <div key={index} className="time-slot">{time}</div>
//                             ))}
//                         </div>
                        
//                         {generateWeekDays().map((day, dayIndex) => (
//                             <div key={dayIndex} className="week-day-column">
//                                 <div className={`week-day-header ${day.isToday ? 'today' : ''}`}>
//                                     {dayNames[day.date.getDay()]}
//                                     <div>{formatDate(day.date)}</div>
//                                 </div>
                                
//                                 {generateTimeSlots().map((time, timeIndex) => {
//                                     const events = getEventsForDate(day.date);
//                                     const hour = parseInt(time.split(':')[0]);
                                    
//                                     // Filter events for this specific hour
//                                     const hourEvents = events.filter(event => {
//                                         const eventDate = new Date(event.dateOfEvent);
//                                         return eventDate.getHours() === hour;
//                                     });
                                    
//                                     return (
//                                         <div key={timeIndex} className="week-time-slot">
//                                             {hourEvents.map((event, eventIndex) => (
//                                                 <div 
//                                                     key={eventIndex} 
//                                                     className={`event event-${eventIndex % 3 === 0 ? 'blue' : eventIndex % 3 === 1 ? 'green' : 'orange'}`}
//                                                     onClick={() => showEventDetails(event.idOrder)}
//                                                 >
//                                                     {event.title || 'אירוע'}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
            
//             {/* Add Event Button */}
//             <div className="add-event-btn" title="הוסף אירוע">+</div>
            
//             {/* Event Modal */}
//             {showEventModal && (
//                 <div className="event-modal">
//                     <div className="event-modal-content">
//                         <button className="event-modal-close" onClick={() => setShowEventModal(false)}>×</button>
//                         <h2 className="event-modal-title">פרטי אירוע</h2>
                        
//                         <div className="event-modal-details">
//                             <ShowDetailingOrder detailingOrders={detailingO} setd={setShowEventModal} />
//                         </div>
                        
//                         <div className="event-modal-actions">
//                             <button className="event-modal-btn event-modal-btn-secondary" onClick={() => setShowEventModal(false)}>סגור</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../style/calendar.css';

import { useNavigate } from "react-router-dom";
import { ShowDetailingOrder } from "../orders/showDetailingOrder";
import { getDetailingOrdersThunk } from "../../redux/slices/getDetailingOrderThunk";
import { getOrdersThunk } from "../../redux/slices/getOrderThunk";
import { Nivut } from "../homePage/nivut";
import { Maneger } from "../homePage/manegar";

export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('month'); // 'month' or 'week'
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);
    
    const orders = useSelector(state => state.orderSlice.orders);
    const detailingO = useSelector(state => state.orderSlice.detailingOrders);
    const schoolName = useSelector(state => state.schoolsSlice.school.name);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Day names in Hebrew
    const dayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    
    // Month names in English and Hebrew
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthNamesHe = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

    // Get orders from API
    const getOrders = async() => {
        await dispatch(getOrdersThunk());
    };

    // Show event details
    const showEventDetails = async(id) => {
        await dispatch(getDetailingOrdersThunk(id));
        setSelectedEvent(id);
        setShowEventModal(true);
    };

    // Navigate to previous month/week
    const goToPrevious = () => {
        const newDate = new Date(currentDate);
        if (view === 'month') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setDate(newDate.getDate() - 7);
        }
        setCurrentDate(newDate);
    };

    // Navigate to next month/week
    const goToNext = () => {
        const newDate = new Date(currentDate);
        if (view === 'month') {
            newDate.setMonth(newDate.getMonth() + 1);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setCurrentDate(newDate);
    };

    // Go to today
    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Generate days for monthly view
    const generateMonthDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // First day of the month
        const firstDay = new Date(year, month, 1);
        // Last day of the month
        const lastDay = new Date(year, month + 1, 0);
        
        // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
        const firstDayOfWeek = firstDay.getDay();
        
        // Calculate days from previous month to show
        const daysFromPrevMonth = firstDayOfWeek;
        
        // Calculate total days to show (previous month + current month + next month)
        const totalDays = daysFromPrevMonth + lastDay.getDate();
        // Ensure we complete the last week if needed
        const daysFromNextMonth = 7 - (totalDays % 7 || 7);
        
        const allDays = [];
        
        // Add days from previous month
        const prevMonth = new Date(year, month, 0);
        const prevMonthDays = prevMonth.getDate();
        
        for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
            allDays.push({
                date: new Date(year, month - 1, i),
                isCurrentMonth: false,
                isToday: false
            });
        }
        
        // Add days from current month
        const today = new Date();
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(year, month, i);
            allDays.push({
                date,
                isCurrentMonth: true,
                isToday: date.toDateString() === today.toDateString()
            });
        }
        
        // Add days from next month
        for (let i = 1; i <= daysFromNextMonth; i++) {
            allDays.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false,
                isToday: false
            });
        }
        
        return allDays;
    };

    // Generate days for weekly view
    const generateWeekDays = () => {
        const weekDays = [];
        const startOfWeek = new Date(currentDate);
        
        // Adjust to start of week (Sunday)
        const dayOfWeek = startOfWeek.getDay();
        startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);
        
        // Generate 7 days starting from Sunday
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            
            weekDays.push({
                date,
                isToday: date.toDateString() === new Date().toDateString()
            });
        }
        
        return weekDays;
    };

    // Generate time slots for weekly view
    const generateTimeSlots = () => {
        const timeSlots = [];
        for (let hour = 8; hour <= 20; hour++) {
            timeSlots.push(`${hour}:00`);
        }
        return timeSlots;
    };

    // Find events for a specific date
    const getEventsForDate = (date) => {
        if (!orders || orders.length === 0) return [];
        
        return orders.filter(order => {
            const orderDate = new Date(order.dateOfEvent);
            return orderDate.toDateString() === date.toDateString();
        });
    };

    // Format date for display
    const formatDate = (date) => {
        return date.toLocaleDateString('he-IL');
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="main">
            {schoolName === "maneger" ? <Maneger /> : <Nivut />}
            
            <div className="calendar-container">
                <div className="calendar-header">
                    <div className="calendar-title">
                        {view === 'month' 
                            ? `${monthNamesHe[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                            : `שבוע ${Math.ceil(currentDate.getDate() / 7)} - ${monthNamesHe[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                        }
                    </div>
                    <div className="calendar-nav">
                        <button className="calendar-nav-btn" onClick={goToPrevious}>▶</button>
                        <button className="calendar-today-btn" onClick={goToToday}>היום</button>
                        <button className="calendar-nav-btn" onClick={goToNext}>◀</button>
                    </div>
                </div>
                
                <div className="calendar-view-toggle">
                    <button 
                        className={`view-btn ${view === 'month' ? 'active' : ''}`}
                        onClick={() => setView('month')}
                    >
                        חודשי
                    </button>
                    <button 
                        className={`view-btn ${view === 'week' ? 'active' : ''}`}
                        onClick={() => setView('week')}
                    >
                        שבועי
                    </button>
                </div>
                
                {view === 'month' ? (
                    <>
                        <div className="calendar-days-header">
                            {dayNames.map((day, index) => (
                                <div key={index} className="day-name">{day}</div>
                            ))}
                        </div>
                        
                        <div className="calendar-month-grid">
                            {generateMonthDays().map((day, index) => (
                                <div 
                                    key={index} 
                                    className={`calendar-day ${!day.isCurrentMonth ? 'other-month' : ''} ${day.isToday ? 'today' : ''}`}
                                >
                                    <div className="day-number">{day.date.getDate()}</div>
                                    
                                    {getEventsForDate(day.date).map((event, eventIndex) => (
                                        <div 
                                            key={eventIndex} 
                                            className={`event event-${eventIndex % 3 === 0 ? 'blue' : eventIndex % 3 === 1 ? 'green' : 'orange'}`}
                                            onClick={() => showEventDetails(event.idOrder)}
                                        >
                                            {event.title || 'אירוע'}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="calendar-week-view">
                        <div className="time-column">
                            <div className="week-day-header"></div>
                            {generateTimeSlots().map((time, index) => (
                                <div key={index} className="time-slot">{time}</div>
                            ))}
                        </div>
                        
                        {generateWeekDays().map((day, dayIndex) => (
                            <div key={dayIndex} className="week-day-column">
                                <div className={`week-day-header ${day.isToday ? 'today' : ''}`}>
                                    {dayNames[day.date.getDay()]}
                                    <div>{formatDate(day.date)}</div>
                                </div>
                                
                                {generateTimeSlots().map((time, timeIndex) => {
                                    const events = getEventsForDate(day.date);
                                    const hour = parseInt(time.split(':')[0]);
                                    
                                    // Filter events for this specific hour
                                    const hourEvents = events.filter(event => {
                                        const eventDate = new Date(event.dateOfEvent);
                                        return eventDate.getHours() === hour;
                                    });
                                    
                                    return (
                                        <div key={timeIndex} className="week-time-slot">
                                            {hourEvents.map((event, eventIndex) => (
                                                <div 
                                                    key={eventIndex} 
                                                    className={`event event-${eventIndex % 3 === 0 ? 'blue' : eventIndex % 3 === 1 ? 'green' : 'orange'}`}
                                                    onClick={() => showEventDetails(event.idOrder)}
                                                >
                                                    {event.title || 'אירוע'}
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Add Event Button */}
            <div className="add-event-btn" title="הוסף אירוע">+</div>
            
            {/* Event Modal */}
            {showEventModal && (
                <div className="event-modal">
                    <div className="event-modal-content">
                        <button className="event-modal-close" onClick={() => setShowEventModal(false)}>×</button>
                        <h2 className="event-modal-title">פרטי אירוע</h2>
                        
                        <div className="event-modal-details">
                            <ShowDetailingOrder detailingOrders={detailingO} setd={setShowEventModal} />
                        </div>
                        
                        <div className="event-modal-actions">
                            <button className="event-modal-btn event-modal-btn-secondary" onClick={() => setShowEventModal(false)}>סגור</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

