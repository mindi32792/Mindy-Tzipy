import { Orders } from "./orders"
import { Home } from "./home"
import { Modell } from "./modell"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { LogIn } from "./logIn"
import { Payment } from "./payment"
import { LogOn } from "./logOn"



export const Routing=()=>{

return<>
<Routes>
<Route path={''} element={<LogIn/>}/>
<Route path={'/home'} element={<Home/>}/>
<Route path={'/Orders'} element={<Orders/>}/>
<Route path={'/Model'} element={<Modell/>}/>
<Route path={'/logon'} element={<LogOn/>}/>
<Route path={'/payment'} element={<Payment/>}/>
</Routes>



</>


}