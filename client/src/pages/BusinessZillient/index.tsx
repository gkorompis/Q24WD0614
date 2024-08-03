import { AppNavbar } from "../../components";
import { BusinessScreen1, ZillientScreenBanner, ZillientScreenList } from "../../containers";
import globalStates from "../../utils/global";
import "./BusinessZillient.css";
import { useParams } from 'react-router-dom'

const BusinessZillient = () =>{
    const {businessId} = useParams();
    const businessZillient = globalStates && globalStates.businessZillient;
    const businessDetail = businessZillient && businessZillient[`${businessId}`];

    console.log({
        businessId,
        businessDetail
    })

    return (
        <div className="business-zillient">
            <AppNavbar/>
            <BusinessScreen1/>
            <ZillientScreenBanner data={businessDetail}/>
            <ZillientScreenList data={businessDetail}/>
        </div>
    )
};

export default BusinessZillient;