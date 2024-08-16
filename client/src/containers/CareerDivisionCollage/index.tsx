import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./CareerDivisionCollage.css";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const CareerDivisionCollage = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const zillientCareers = globalStates && globalStates.zillientCareers;
    const divisions = zillientCareers.map((career:any) => career.division);
    const uniqueDivisions = [...new Set(divisions)];

    const screenCareerDivisionCollageRef = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenCareerDivisionCollage = screenCareerDivisionCollageRef.current.getBoundingClientRect();
            const top = screenCareerDivisionCollage.top;
            const bottom = screenCareerDivisionCollage.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenCareerDivisionCollage: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenCareerDivisionCollage: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])

    const componentData = {
        background: {
            image: {
                alt: "",
                src: ""
            }
        }, 
        content: {
            screen: {
                image: {
                    alt: "",
                    src: ""
                }
            },
            listDivision: uniqueDivisions || ["division_name"]
        }
    };
    

    const itemLength = (componentData.content.listDivision.length) || 1;
    const heightFactor = Math.ceil(+itemLength/3);
    const autoRowHeight = 30;
    const divHeight = +heightFactor*(autoRowHeight+10);

    const templateColumnWidth = 30;
    const modHeightFactor = +itemLength % 3;
    const gridRepeat = +itemLength > 2 ? 3 : modHeightFactor;


    return(
        <div ref={screenCareerDivisionCollageRef} className={`${windowWidthClass}-career-division-collage`}
            style={{height: `${divHeight}vw`}}
        >
            <div className="wrapper">
                <div className="background display">
                    <div className="frame">
                        <img
                            alt= {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display">
                    <h1>career division collage</h1>
                    <div className="wrapper collage"
                        style={
                        {
                            gridTemplateColumns: `repeat(${gridRepeat}, ${templateColumnWidth}vw)`,
                            gridAutoRows: `${autoRowHeight}vw`
                        }
                    }
                    >
                    {
                        componentData.content.listDivision.map((division: any, index:any)=>{
                            return (
                                <div key={index} className="item">
                                    <div className="collage">
                                    </div>
                                    <p>{division}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default CareerDivisionCollage;