import { AppFooter, AppNavbar } from "../../components";
import { BannerScreen, BusinessScreen1, ZillientScreenBanner, ZillientScreenCollage, ZillientScreenList } from "../../containers";
import globalStates from "../../utils/global";
import "./BusinessZillient.css";
import { useParams } from 'react-router-dom'

const BusinessZillient = () =>{
    const {businessId} = useParams();
    const businessZillient = globalStates && globalStates.businessZillient;
    const businessDetail = businessZillient && businessZillient[`${businessId}`];

    // console.log({
    //     businessId,
    //     businessDetail
    // })

    return (
        <div className="business-zillient">
            <AppNavbar/>
            {/* <BusinessScreen1/> */}
            <BannerScreen data={{
                title: businessDetail.title,
                image: {
                    src: businessDetail.images.screenListBg.src,
                    alt: businessDetail.title
                }
            }} />
            <ZillientScreenBanner data={businessDetail}/>
            {/* <ZillientScreenList data={businessDetail}/> */}
            <ZillientScreenCollage data={businessDetail}/>
            <AppFooter/>
        </div>
    )
};

export default BusinessZillient;