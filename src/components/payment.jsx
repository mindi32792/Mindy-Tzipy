
// import "./payment.css"
import { payment } from "../redux/slices/loginthunk";
import { Nivut } from "./nivut";
import { Link } from 'react-router-dom';


export const Payment=()=>{


    return <div>
    
    <Nivut></Nivut>
        
    
    </div>
    
    
    }
// export const payment = () => {
//   const [flagN, setFlagFN] = useState(false);
//   const [flagA, setFlagA] = useState(false);
//   const [newSchool, setNewSchool] = useState({ idSchool:0, name: '',addressSchool: '', phone: '' });

//   const dispatch = useDispatch();
//   const navigate=useNavigate();
//   const status=useSelector(state=>state.schoolsSlice.status)

//   const save = ()=> {
//     dispatch(loginThunk(newSchool))
    // navigate(`/home`)
  
  
  