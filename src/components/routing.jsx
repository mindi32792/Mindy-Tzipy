import { Orders } from "./orders"
import { Home } from "./home"
import { Modell } from "./modell"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { LogIn } from "./logIn"
import { Payment } from "./payment"
import { LogOn } from "./logOn"
import { Calendar } from "./calendar"
import { Card } from "./card"
import { Maneger } from "./manegar"
import { HomeManeger } from "./homeManeger"
import { Katalog } from "./katalog"
import { Cart } from "./Cart"
import { OrderConfirmation } from "./OrderConfirmation"





export const Routing=()=>{

return<>
<Routes>
<Route path={''} element={<Home/>}/>
<Route path={'/home'} element={<Home/>}/>
<Route path={'/Orders'} element={<Orders/>}/>
<Route path={'/Model'} element={<Modell/>}/>
<Route path={'/logon'} element={<LogOn/>}/>
<Route path={'/login'} element={<LogIn/>}/>
<Route path={'/maneger'} element={<HomeManeger/>}/>
<Route path={'/payment'} element={<Payment/>}/>
<Route path={'/calender'} element={<Calendar/>}/>
<Route path={'/craditCard'} element={<Card/>}/>
<Route path={'//katalog'} element={<Katalog/>}/>
<Route path={'/sal'} element={<Cart/>}/>
<Route path={'/order-confirmation'} element={<OrderConfirmation />}/> 


</Routes>



</>


}