import { AppFooter, AppNavbar } from "../../components";
import { CareerDivisionCollage, CareersScreen1 } from "../../containers";


const Careers =()=>{

    
    return(
        <div className="">
            <AppNavbar/>
            <CareersScreen1/>
            <CareerDivisionCollage/>
            <AppFooter/>
        </div>
    )
};

export default Careers;