import { useContext } from "react";
import { AppFooter, AppNavbar } from "../../components";
import { AboutScreen1, AboutScreen2, AboutUsScreen1, AboutUsScreen2, AboutUsScreen3, AboutUsScreen4 } from "../../containers";
import globalStates from "../../utils/global";
import "./About.css"

const About = () => {

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <div className={`${windowWidthClass}-about-screen1`}>
            <AppNavbar/>
            <AboutUsScreen1/>
            <AboutUsScreen2/>
            <AboutUsScreen3/>
            <AboutUsScreen4/>
            <AppFooter/>
        </div>
    )
};

export default About;