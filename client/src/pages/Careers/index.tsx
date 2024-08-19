import { AppFooter, AppNavbar } from "../../components";
import { CareerDivisionCollage, CareerMeaningful, CareersScreen1 } from "../../containers";


const Careers =()=>{

    
    return(
        <div className="">
            <AppNavbar/>
            <CareersScreen1/>
            <CareerMeaningful/>
            <CareerDivisionCollage/>
            <AppFooter/>
        </div>
    )
};

export default Careers;