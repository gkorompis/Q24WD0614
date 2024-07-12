
import "./Home.css";
import { HomeScreen1, HomeScreen1b, HomeScreen2, HomeScreen3, HomeScreen4, HomeScreen5, HomeScreen6 } from "../../containers";
import { AppFooter, AppNavbar } from "../../components";

const Home = () =>{
    
    return(
        <div>
            <AppNavbar/>
            <HomeScreen1/>
            <HomeScreen1b/>
            <HomeScreen2/>
            <HomeScreen3/>
            <HomeScreen4/>
            <HomeScreen5/>
            <HomeScreen6/>
            <AppFooter/>
        </div>
    )
};

export default Home;