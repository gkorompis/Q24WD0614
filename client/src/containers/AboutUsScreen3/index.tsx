import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen3.css";
import { ImgAboutUsScreen2, ImgAboutUsScreen3 } from "../../assets";

const AboutUsScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    const screenImageBackground = windowWidthClass === "w-pc" ? ImgAboutUsScreen2 : ImgAboutUsScreen2;
   
    return(
        <div className={`${windowWidthClass}-about-us-screen3`}>
            <div className="wrapper">
                <div className="screen bg">
                    {/* <img src={screenImageBackground}/> */}
                </div>
                <div className="screen  shield">
                </div>
                <div className="screen  content">
                    <div className="grid-item left">
                        <div className="section box-1">
                            <p>ZILLIENT</p>
                        </div>
                        <div className="section box-2">
                            <h2>Welcoming the Golden Indonesian generation</h2>
                            <p>Zillient memahami peluang, ancaman, dan harapan dimasa depan, Indonesia dengan berbagai potensinya yang luar biasa, kekayaan pluralisme yang tersebar di seluruh tanah air, kedepan akan bisa dimanfaatkan dan dikelola oleh generasi muda yang unggul.</p>
                            <p>Transdisiplin akan menjadi ciri khas para zillient untuk menghasilkan mahakarya yang luar biasa dan bermanfaat untuk sesama berdasarkan Karya, Cipta, dan Karsa.</p>
                        </div>
                    </div>
                    <div className="grid-item right">
                        <div className="frame"> 
                            <img alt="bendera merah putih" src={ImgAboutUsScreen3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen2;