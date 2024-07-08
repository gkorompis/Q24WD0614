import { useContext } from "react";
import { AppFooter, AppNavbar } from "../../components";
import { AboutScreen1, AboutScreen2 } from "../../containers";
import globalStates from "../../utils/global";
import "./About.css"

const About = () => {

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <div className={`${windowWidthClass}-about-screen1`}>
            <AppNavbar/>
            <AboutScreen1/>
            <AboutScreen2/>
            <AppFooter/>
        </div>
    )
};

export default About;