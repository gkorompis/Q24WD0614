
import "./Home.css";
import { HomeScreen1, HomeScreen1b, HomeScreen2, HomeScreen2alt, HomeScreen3, HomeScreen4, HomeScreen4alt, HomeScreen5, HomeScreen5alt, HomeScreen6 } from "../../containers";
import { AppFooter, AppNavbar } from "../../components";

const Home = () =>{
    
    return(
        <div>
            <AppNavbar/>
            <HomeScreen1/>
            <HomeScreen1b/>
            {/* <HomeScreen2/> */}
            <HomeScreen2alt/>
            <HomeScreen3/>
            {/* <HomeScreen4/> */}
            <HomeScreen4alt/>
            {/* <HomeScreen5/> */}
            <HomeScreen5alt/>
            <HomeScreen6/>
            <AppFooter/>
        </div>
    )
};

export default Home;