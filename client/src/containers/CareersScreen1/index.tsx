import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./CareersScreen1.css";
import { ImgProjectLegal } from "../../assets";

const CareersScreen1 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenCareer1Ref = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenCareer1Ref.current.getBoundingClientRect();
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
    
    return(
        <div ref={screenCareer1Ref} className={`${windowWidthClass}-careers-screen1`}>
            <div className="wrapper">
                <div className="background">
                    <img alt="legal" src={ImgProjectLegal} />
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="screen tagline">
                        <h1>START YOUR CAREER WITH ZILLIENT FOR ACHIEVE BEST FUTURE</h1>
                    </div>
                    <div className="screen form">
                        <div className="form">
                            <h2>Search Jobs</h2>
                            <p>86 available positions in 7 countries</p>
                            <input 
                            className="position" 
                            placeholder="All positions"></input>

                            <input 
                            className="dream-job" 
                            placeholder="type your dream job here"></input>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default CareersScreen1;