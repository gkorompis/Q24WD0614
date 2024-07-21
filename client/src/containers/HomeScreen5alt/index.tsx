import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen5alt.css";
import { ImgBannerFarm, ImgHexagons, ImgHomeScreen5 } from "../../assets";

const HomeScreen5 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <div className={`${windowWidthClass}-home-screen5-alt`} >
            <div className="wrapper">
                <div className="section text">
                    <div className="text-wrapper">
                        <h2>OUR BUSINESS WILL ALWAYS PRIORITIZE SUSTAINABILITY AND PROSPERITY</h2>
                        <p>This Has Been Our Commitment Since Founded</p>
                    </div>
                </div>
                <div className="section image">
                    <img alt="zillient sustainibility values" src={ImgHomeScreen5}/>
                </div>
               
            </div>
        </div>
    )
};

export default HomeScreen5;
