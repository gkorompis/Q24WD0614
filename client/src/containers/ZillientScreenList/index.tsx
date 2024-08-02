import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ZillientScreenList.css";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const ZillientScreenList = ({data}:any) =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const componentData = {
        background: {
            image: {
                src: data && data.images.screenListBg.src,
                alt: data && data.images.screenListBg.alt,
            }
        },
        screen: {
            services: (data && data.serviceList) || [],
            icon: {
                 src: data && data.images.screenBannerIcon.src,
                 alt: data && data.images.screenBannerIcon.alt,
            }
        },
    }
    
    return(
        <div className={`${windowWidthClass}-business-zillient-list`}>
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
                            <div className="object-wrapper grid-y">
                                <div className="tab grid-x">
                                    <div className="image">
                                        <div className="frame">
                                            <img 
                                                alt={componentData.screen.icon.alt}
                                                src={componentData.screen.icon.src}
                                            />
                                        </div>
                                    </div>
                                    <div className="text flex-row">
                                        <h2>Zillient</h2>
                                        <p>Code</p>
                                    </div>
                                </div>
                                <div className="list-text">
                                   {
                                        componentData.screen.services.map((service:any, index:any)=>{
                                            const serviceId = (service && service.id) || 0;
                                            const serviceValue = (service && service.service) || "service name";
                                            return (
                                                <p className="item">
                                                    {`${serviceId}. ${serviceValue}`}
                                                </p>
                                            )
                                        })
                                   }
                                </div>
                            </div>
                        </div>
                        <div className="grid-item right">
                            {/* <div className="frame">
                                <img
                                    alt={componentData.screen.image.alt}
                                    src={componentData.screen.image.src}
                                />
                            </div>  */}
                        </div>  
                </div>
            </div>
        </div>
    )
};

export default ZillientScreenList;