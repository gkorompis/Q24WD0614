import { useContext } from "react";
import globalStates from "../../utils/global";
import "./Home.css";
import { HomeScreen1, HomeScreen2, HomeScreen3, HomeScreen4 } from "../../containers";
import { AppNavbar } from "../../components";

const Home = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    
    return(
        <div>
            <AppNavbar/>
            <HomeScreen1/>
            <HomeScreen2/>
            <HomeScreen3/>
            <HomeScreen4/>
        </div>
    )
};

export default Home;