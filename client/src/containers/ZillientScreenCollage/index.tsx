import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ZillientScreenCollage.css";
import { useNavigate } from "react-router-dom";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const ZillientScreenCollage = ({data}:any) =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const businessZillient = globalStates && globalStates.businessZillient;

    const navigate = useNavigate();

    const handleNavigate = (route:string, index:string)=>{
        const path = `/service-list/${route}/${index}`
        navigate(path);
    }

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
            },
            imgHeaderLogo: {
                alt: data && data.images.headerLogo.src,
                src: data && data.images.headerLogo.src
            },
            title: {
                value: "Zillient",
                tag: data && data.code,
                image: {
                    src: "",
                    alt: ""
                }
            }
        },
    }

    const itemLength = (componentData.screen.services.length) || 1;
    const heightFactor = Math.ceil(+itemLength/3);
    const autoRowHeight = 25;
    const templateColumnWidth = 25;
    const divHeight = +heightFactor*(autoRowHeight+15);
    const modHeightFactor = +itemLength % 3;
    const gridRepeat = +itemLength > 2 ? 3 : modHeightFactor;
    // console.log({autoRowHeight, divHeight, heightFactor});
    const imgStyleFullWidth = {
        width: '100%',
        height: 'auto'
    }
    const imgStyleFullHeight = {
        width: 'auto',
        height: '100%'
    };
    const imgStyle = +heightFactor > 1 ? imgStyleFullHeight : imgStyleFullWidth;
    return(
        <div className={`${windowWidthClass}-zillient-screen-collage`} 
        style={{height: `${divHeight}vw`}}
        >
            <div className="wrapper">
                <div className="background display">
                    <div className="frame">
                        <img
                            style={imgStyle}
                            alt= {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display col">
                    <h2>Our Services</h2>
                   <div className="collage"
                    style={
                        {
                            gridTemplateColumns: `repeat(${gridRepeat}, ${templateColumnWidth}vw)`,
                            gridAutoRows: `${autoRowHeight}vw`
                        }
                    }
                   >
                        {
                            componentData.screen.services.map((service:any, index:any)=>{
                                const serviceId = (service && service.id) || 0;
                                const serviceValue = (service && service.service) || "service name";
                                const businessId = data && data.businessId;
                                

                                // const businessDetail = businessZillient && businessZillient[`${businessId}`];
                                // const businessDetailImages = businessDetail && businessDetail.images;
                                // const dataImage = businessDetailImages && businessDetailImages.screenBannerImg;
                                const businessDetailImages = data && data.images;
                                const dataImage = businessDetailImages && businessDetailImages.screenBannerImg;

                                return (
                                    <div key={index} className="item">
                                        <div className="card">  
                                            <h3
                                                onClick={()=>handleNavigate(businessId, serviceId)}
                                            >{serviceValue}</h3>
                                            <div className="frame"
                                                onClick={()=>handleNavigate(businessId, serviceId)}
                                            >
                                                <img 
                                                    src={dataImage.src}
                                                    alt={dataImage.alt}
                                                />
                                            </div>
                                        </div>
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

export default ZillientScreenCollage;