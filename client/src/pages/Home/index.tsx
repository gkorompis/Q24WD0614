import { useContext } from "react";
import globalStates from "../../utils/global";
import "./Home.css";

const Home = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div>
            <h1>home Zillient</h1>
        </div>
    )
};

export default Home;