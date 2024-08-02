import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ZillientScreenBanner.css";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const ZillientScreenBanner = ({data}:any) =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenHome1Ref = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenHome1Ref.current.getBoundingClientRect();
            const top = screenHome1.top;
            const bottom = screenHome1.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetScreenHome1: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetScreenHome1: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])


    const componentData = {
        screen: {
            title: {
                value: data && data.title
            },
            image: {
                src: data && data.images.screenBannerImg.src,
                alt: data && data.images.screenBannerImg.alt
            },
            description: {
                value: data && data.description
            }
        },
    }
    
    return(
        <div ref={screenHome1Ref} className={`${windowWidthClass}-business-zillient`}>
            <div className="wrapper">
                <div className="background display">
                    <div className="frame">
                        {/* <img
                            alt= {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                         /> */}
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display grid-x">
                        <div className="grid-item left">
                            <div className="text-wrapper">
                                <h2>{componentData.screen.title.value}</h2>
                                <p>{componentData.screen.description.value}</p>
                            </div>
                            
                        </div>
                        <div className="grid-item right">
                            <div className="frame">
                                <img
                                    alt={componentData.screen.image.alt}
                                    src={componentData.screen.image.src}
                                />
                            </div> 
                        </div>  
                </div>
            </div>
        </div>
    )
};

export default ZillientScreenBanner;