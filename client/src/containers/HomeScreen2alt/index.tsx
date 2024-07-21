import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen2alt.css";
import { ImgBannerHomeScreen2 } from "../../assets";



const HomeScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;
    return(
        <div className={`${windowWidthClass}-home-screen-2-alt`}>
            <div className="wrapper">
                  <img alt="zillient core values" src={ImgBannerHomeScreen2} />
            </div>
        </div>
    )
};

export default HomeScreen2;