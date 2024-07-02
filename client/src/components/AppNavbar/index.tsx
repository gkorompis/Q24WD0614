import { useContext, useState } from "react";
import globalStates from "../../utils/global";
import "./AppNavbar.css";
import { IconBurger, IconLogo } from "../../assets";


const AppNavbar = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    const [isHover, setIsHover] = useState({} as any);
    
    const isHoverBusinessSubmenu = isHover && isHover.businessSubmenu ;


    const handleHoverBusinessSubmenu = (trigger:any)=>{
        console.log("hover", trigger)
        if(trigger==="enter"){
            setIsHover({
                businessSubmenu: true
            })
        }
        if(trigger==="leave") {
            setIsHover({
                businessSubmenu: false
            })
        }
    };
    
    return(
        <nav className={`${windowWidthClass}-app-navbar
            ${isOffsetScreenHome1 ? "offset-screen-home1": ""}
        `}>
            <div className="anchor-group bar-1">
                <div className="figcap-wrapper">
                    <img alt="logo" src={IconLogo} />
                    <h1>Zillient</h1>
                </div>
            </div>
            <div className="anchor-group bar-2">
                {
                    windowWidthClass==="w-mob"?
                    <p>EN</p>
                    : 
                    <>
                        <p>Home</p>
                        <p>About Us</p>
                        <div className="business-submenu"
                        onMouseEnter={()=>handleHoverBusinessSubmenu("enter")}
                        onMouseLeave={()=>handleHoverBusinessSubmenu("leave")}>
                            
                            <p
                                
                            >Business</p>
                            <div className={`submenu-bar
                                    ${isHoverBusinessSubmenu? "hover" : ""}
                                `}>
                                <p>Zillient Farm</p>
                                <p>Zillient Education</p>
                                <p>Zillient Construction</p>
                                <p>Zillient Tour</p>
                                <p>Zillient Consultation</p>
                            </div>

                        </div>
                        <p>Careers</p>
                        <p>Contact Us</p>
                    </>
                }
            </div>
            <div className="anchor-group bar-3">
                {
                    windowWidthClass==="w-mob"?
                    <img alt="icon burger zillient" src={IconBurger}/> :  <p>EN</p>
                }
               
            </div>
        </nav>
    )
};

export default AppNavbar;