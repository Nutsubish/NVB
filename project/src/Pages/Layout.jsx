import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom"


const Layouts = () =>{
    return(
        
            <> 
            <Navbar/>
            
            <main>
                <Outlet/>
            </main>

            </>
        
    )
}
export default Layouts