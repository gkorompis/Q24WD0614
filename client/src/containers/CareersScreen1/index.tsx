import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./CareersScreen1.css";
import { ImgProjectLegal } from "../../assets";

const CareersScreen1 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const zillientCareers  = globalStates && globalStates.zillientCareers;

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


    const [location, setLocation] = useState('');
    const [division, setDivision] = useState('');
    const [rolePattern, setRolePattern] = useState('');
    const [filteredRoles, setFilteredRoles] = useState(zillientCareers);

    const handleLocationChange = (event:any) => {
        setLocation(event.target.value);
    };

    const handleDivisionChange = (event:any) => {
        setDivision(event.target.value);
    };

    const handleRolePatternChange = (event:any) => {
        const pattern = event.target.value;
        setRolePattern(pattern);
        setFilteredRoles(zillientCareers.filter((career:any) => career.role.toLowerCase().includes(pattern.toLowerCase())));
    };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`Selected Location: ${location}, Selected Division: ${division}, Role Pattern: ${rolePattern}`);
  };
    
    return(
        <div ref={screenCareer1Ref} className={`${windowWidthClass}-careers-screen1`}>
            <div className="wrapper">
                <div className="background">
                    {/* <img alt="legal" src={ImgProjectLegal} /> */}
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="screen tagline">
                        <h1>START YOUR CAREER WITH ZILLIENT FOR ACHIEVE BEST FUTURE</h1>
                    </div>
                    <div className="screen form">
                        {/* <div className="form">
                            <h2>Search Jobs</h2>
                            <p>86 available positions in 7 countries</p>
                            <input 
                            className="position" 
                            placeholder="All positions"></input>

                            <input 
                            className="dream-job" 
                            placeholder="type your dream job here"></input>
                        </div> */}
                        {/* <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <select id="location" value={location} onChange={handleLocationChange}>
                                <option value="">Select Location</option>
                                <option value="Jakarta">Jakarta</option>
                                <option value="Surabaya">Surabaya</option>
                                <option value="Bali">Bali</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="division">Division:</label>
                                <select id="division" value={division} onChange={handleDivisionChange}>
                                <option value="">Select Division</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Technology">Technology</option>
                                <option value="Product">Product</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Operating">Operating</option>
                                <option value="CEO Office">CEO Office</option>
                                </select>
                            </div>
                            <button type="submit">Submit</button>
                            </form> */}
                        <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <select id="location" value={location} onChange={handleLocationChange}>
                                <option value="">Select Location</option>
                                <option value="Jakarta">Jakarta</option>
                                <option value="Surabaya">Surabaya</option>
                                <option value="Bali">Bali</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="division">Division:</label>
                                <select id="division" value={division} onChange={handleDivisionChange}>
                                <option value="">Select Division</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Technology">Technology</option>
                                <option value="Product">Product</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Operating">Operating</option>
                                <option value="CEO Office">CEO Office</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rolePattern">Role Pattern:</label>
                                <input
                                type="text"
                                id="rolePattern"
                                value={rolePattern}
                                onChange={handleRolePatternChange}
                                placeholder="Enter role pattern"
                                />
                            </div>
                            {/* <div className="form-group">
                                <label>Filtered Roles:</label>
                                <ul>
                                {
                                filteredRoles.map((career:any, index:any) => {
                                const {role} = career;
                                return (
                                    <li key={index}>{role}</li>
                                )})
                                }
                                </ul>
                            </div> */}
                            <button type="submit">Submit</button>
                            </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default CareersScreen1;