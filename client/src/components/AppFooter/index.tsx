import { useContext } from "react";
import globalStates from "../../utils/global";
import "./AppFooter.css";
import { ImgLogoFooter } from "../../assets";
import { FloatingIcon } from "..";

const AppFooter = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <>
        <div className={`${windowWidthClass}-app-footer`}>
            <div className="footer-group bar-1">
                <div className="image">
                    <img alt="logo zillient" src={ImgLogoFooter}/>
                </div>
            </div>
            <div className="footer-group bar-2">
                <div className="anchor-group follow">
                    <h3>Follow Us</h3>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                </div>
                <div className="anchor-group sitemap">
                    <h3>Site Map</h3>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                </div>
                <div className="anchor-group quicklinks">
                    <h3>Quick Links</h3>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                </div>
            </div>
        </div>
        <FloatingIcon/>
        </>
    )
};

export default AppFooter;