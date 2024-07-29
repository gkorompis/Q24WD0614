import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen4alt.css";
import { IconLabelCons, IconLabelConstr, IconLabelEduc, IconLabelFarm, IconLabelTour, ImgProjectCons, ImgProjectEdu, ImgProjectFarm, ImgProjectLegal, ImgProjectTour } from "../../assets";

const HomeScreen4 = ()=>{
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const dataProjects = [
        {
            business: "Zillient Farm",
            label: "Farm",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectFarm,
            iconSrc: IconLabelFarm
        },
        {
            business: "Zillient Education",
            label: "Educ",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectEdu,
            iconSrc: IconLabelEduc
        },
        {
            business: "Zillient Construction",
            label: "Constr",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectCons,
            iconSrc: IconLabelConstr
        },
        {
            business: "Zillient Tour",
            label: "Tour",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectTour,
            iconSrc: IconLabelTour
        },
        {
            business: "Zillient Consultation",
            label: "Cons",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectLegal,
            iconSrc: IconLabelCons
        }
    ]
    
    return(
        <div className={`${windowWidthClass}-home-screen4-alt`}>
            <div className="section header">
                <h2>OUR PROJECTS</h2>
                <div className="wrapper">
                    <p className="desc">Explore our projects that illustrate the success of our client partnering with us</p>
                    <p className="button">view all</p>
                </div>
            </div>
            <div className="section ladders">
                    {
                        dataProjects.map((project:any, index:any)=>{
                            const {
                                business, 
                                label, 
                                iconSrc, 
                                imgSrc,
                                projectName,
                                highlight, 
                                desc
                            } = project;
                            return(
                                <div key={index} className="grid-item">
                                   <div className="folder">
                                        <div className="tab">
                                            <div className="label-wrapper">
                                                <img alt={`${business}`} src={iconSrc} />
                                                <div className="text-wrapper">
                                                    <p className="main">Zillient</p>
                                                    <p className="label">{label}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                   </div>
                                   <div className="folder"> 
                                        <div className="content">
                                            <div className="section image">
                                                <div className="frame">
                                                    <img alt={`banner ${business}`} src={imgSrc}  />
                                                </div>
                                            </div>
                                            <div className="section text">
                                                <div className="text-wrapper">
                                                    <h2>{projectName}</h2>
                                                    <h3>{highlight}</h3>
                                                    <p>{desc}</p>
                                                    <p className="button">view details</p>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                </div>  
                            )
                        })
                    }
            </div>
           
        </div>
    )
};


export default HomeScreen4;