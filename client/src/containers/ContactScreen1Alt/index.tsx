import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./ContactScreen1Alt.css";
import { ImgAboutUsScreen1 } from "../../assets";
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

    const [formData, setFormData] = useState({
        organizationEmail: '',
        jobTitle: '',
        fullName: '',
        companySize: '',
        headquarters: '',
        operatingCountry: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission (e.g., send data to a server)
    };

    const componentData = {
        background: {
            image: {
                alt: "zillient background",
                src: ImgAboutUsScreen1
            }
        }, 
        content: {
            screen: {
                header: {
                    backgroundImg: {
                        alt: "zillient background",
                        src: ImgAboutUsScreen1
                    },
                    title: "Contact Us", 
                    desc: "We'll put your on the right path. Contact our staff to schedule relaxed meeting to arrange a free consultation and price estimate."
                }
            }
        }
    };
    
    return(
        <div ref={screenTemplateRef} className={`${windowWidthClass}-contact-screen1-alt`}>
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
                <div className="content display">
                    <div className="screen header">
                        <div className="text">
                            <h2>{componentData.content.screen.header.title}</h2>
                            <p>{componentData.content.screen.header.desc}</p>
                        </div>
                    </div>
                    <div className="screen form">
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="organizationEmail">Organization Email:</label>
                                        <input
                                            type="email"
                                            id="organizationEmail"
                                            name="organizationEmail"
                                            value={formData.organizationEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="jobTitle">Job Title:</label>
                                        <input
                                            type="text"
                                            id="jobTitle"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="fullName">Full Name:</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companySize">Company Size:</label>
                                        <select
                                            id="companySize"
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select size</option>
                                            <option value="1-10">1-10</option>
                                            <option value="11-50">11-50</option>
                                            <option value="51-200">51-200</option>
                                            <option value="201-500">201-500</option>
                                            <option value="501-1000">501-1000</option>
                                            <option value="1001-5000">1001-5000</option>
                                            <option value="5001-10000">5001-10000</option>
                                            <option value="10001+">10001+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="headquarters">Headquarters:</label>
                                        <input
                                            type="text"
                                            id="headquarters"
                                            name="headquarters"
                                            value={formData.headquarters}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="operatingCountry">Operating Country:</label>
                                        <input
                                            type="text"
                                            id="operatingCountry"
                                            name="operatingCountry"
                                            value={formData.operatingCountry}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="submit-button">
                                        <button  type="submit" >Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Template;