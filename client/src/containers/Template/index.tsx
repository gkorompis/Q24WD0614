import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./Template.css";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const Template = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenTemplateRef = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenTemplate = screenTemplateRef.current.getBoundingClientRect();
            const top = screenTemplate.top;
            const bottom = screenTemplate.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenTemplate: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenTemplate: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])

    const componentData = {
        alt: "background",
        imgSrcBackground : "",
        tagline: "Heartfull to make you smile"
    };
    
    return(
        <div ref={screenTemplateRef} className={`${windowWidthClass}-home-screen1`}>
            <div className="wrapper">
                <div className="background">
                    <div className="frame">
                        <img
                            alt= {componentData.alt}
                            src = {componentData.imgSrcBackground}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content">
                    <h1>
                        {
                            componentData.tagline
                        }
                    </h1>
                </div>
            </div>
        </div>
    )
};

export default Template;