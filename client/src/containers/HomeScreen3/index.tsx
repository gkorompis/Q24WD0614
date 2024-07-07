import "./HomeScreen3.css";
import globalStates from "../../utils/global";
import { useContext } from "react";
import { ImgBusinessConstruction, ImgBusinessConsultation, ImgBusinessEdu, ImgBusinessFarm, ImgBusinessTour } from "../../assets";

const HomeScreen3 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;

    const dataBusiness=[
        {
            title: "Zillient Farm",
            imgSrc: ImgBusinessFarm
        },
        {
            title: "Zillient Education",
            imgSrc: ImgBusinessEdu
        },
        {
            title: "Zillient Construction",
            imgSrc: ImgBusinessConstruction
        },
        {
            title: "Zillient Tour",
            imgSrc: ImgBusinessTour
        },
        {
            title: "Zillient Counseling",
            imgSrc: ImgBusinessConsultation
        },
    ];

    return(
        <div className={`${windowWidthClass}-home-screen3`}>
            <div className="wrapper">
                <h2>OUR BUSINESSES</h2>
                <div className="cardholder">
                    {
                        dataBusiness.map((business:any, index:any)=>{
                            const {title, imgSrc} = business;
                            return(
                                <div key={index} className="grid-item">
                                    <div className="frame">
                                        <img alt={title + "zillient.com"} src={imgSrc}/>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default HomeScreen3;