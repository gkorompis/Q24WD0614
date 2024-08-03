import { createContext } from "react";
import { IconBusinessConstruction, IconBusinessConsultation, IconBusinessEducation, IconBusinessFarm, IconBusinessTour, ImgBusinessConstruction, ImgBusinessConsultation, ImgBusinessEdu, ImgBusinessFarm, ImgBusinessTour, ImgBusinessZillientConstruction, ImgBusinessZillientConsultation, ImgBusinessZillientEducation, ImgBusinessZillientFarm, ImgBusinessZillientTour } from "../assets";


const zillientFarm = {
    businessId: "zillient-farm",
    title: "Zillient Farm",
    code: "Farm",
    description: "Create 1 million modern farmers, breeders, and fishermen in Indonesia, helping partners with capital, input requirements, cultivation guidance, and marketing.",
    images: {
        screenBannerImg: {
            src: ImgBusinessFarm,
            alt: "background zillient farm"
        },
        screenListBg: {
            src: ImgBusinessZillientFarm,
            alt: "background zillient farm"
        },
        screenBannerIcon: {
            src: "",
            alt: ""
        },
        headerLogo: {
            src: IconBusinessFarm,
            alt: "icon logo zillient farm"
        }
    },
    serviceList: [
        {
            id: 1,
            service: "Aplikasi Drone Untuk Pertanian"
        },
        {
            id: 2,
            service: "Rancang Bangun Smart Farming"
        },
        {
            id: 3,
            service: "Layanan Dokter Tanaman"
        },
        {
            id: 4,
            service: "Pelatihan Teknis Budidaya Sawit"
        },
        {
            id: 5,
            service: "Jasa Pendaftaran Pupuk dan Pestisida"
        },
        {
            id: 6,
            service: "Analisa Dampak Lingkungan (AMDAL)"
        },
        {
            id: 7,
            service: "Sertifikasi Halal dan BPOM"
        },
        {
            id: 8,
            service: "Jasa Ekspor-Impor Komoditas Pertanian"
        }
    ],
    serviceNotes: [
        
    ]
}
const zillientEducation = {
    businessId: "zillient-education",
    title: "Zillient Education",
    code: "Education",
    description: "Focuses on providing training, certification and consultation to partners personally and non-personally as well as supporting and connecting the skills development of Indonesian youth on an international scale.",
    images: {
        screenBannerImg: {
            src: ImgBusinessEdu,
            alt: "background zillient education"
        },
        screenListBg: {
            src: ImgBusinessZillientEducation,
            alt: "background zillient education"
        },
        screenBannerIcon: {
            src: "",
            alt: ""
        },
        headerLogo: {
            src: IconBusinessEducation,
            alt: "icon logo zillient education"
        }
    },
    serviceList: [
        {
            id: 1,
            service: "Procurement"
        },
        {
            id: 2,
            service: "Health, Safety, and Environment"
        },
        {
            id: 3,
            service: "Risk and Compliances"
        },
        {
            id: 4,
            service: "Finance"
        },
        {
            id: 5,
            service: "Human Capital"
        },
        {
            id: 6,
            service: "Supply Chain and Project Management"
        },
        {
            id: 7,
            service: "Product Development"
        },
        {
            id: 8,
            service: "Boothcamp Sales And Marketing Expert"
        }
    ],
    serviceNotes: [
        
    ]
}
const zillientConstruction = {
    businessId: "zillient-construction",
    title: "Zillient Construction",
    code: "Construction",
    description: "Provide construction service based on professional, hight integrity, and dedicated to partners orientation excellence.",
    images: {
        screenBannerImg: {
            src: ImgBusinessConstruction,
            alt: "background zillient construction"
        },
        screenListBg: {
            src: ImgBusinessZillientConstruction,
            alt: "background zillient construction"
        },
        screenBannerIcon: {
            src: "",
            alt: ""
        },
        headerLogo: {
            src: IconBusinessConstruction,
            alt: "icon logo zillient construction"
        }
    },
    serviceList: [
        {
            id: 1,
            service: "Jasa Bangun dan Renovasi Bangunan​"
        },
        {
            id: 2,
            service: "Jasa Desain Arsitektur"
        },
        {
            id: 3,
            service: "Jasa Desain Interior"
        },
        {
            id: 4,
            service: "Jasa Penyedia Tukang/pekerja"
        }
    ],
    serviceNotes: [
        
    ]
}
const zillientTour = {
    businessId: "zillient-tour",
    title: "Zillient Tour",
    code: "Tour",
    description: "Create one village one youtuber, introducing the potential and natural beauty of every village corner, providing collaborative tourism services to lift the tourism sector of Indonesia.",
    images: {
        screenBannerImg: {
            src: ImgBusinessTour,
            alt: "background zillient tour"
        },
        screenListBg: {
            src: ImgBusinessZillientTour,
            alt: "background zillient tour"
        },
        screenBannerIcon: {
            src: "",
            alt: ""
        },
        headerLogo: {
            src: IconBusinessTour,
            alt: "icon logo zillient tour"
        }
    },
    serviceList: [
        {
            id: 1,
            service: "International Tour​"
        },
        {
            id: 2,
            service: "Domestic Tour"
        }
    ],
    serviceNotes: [
        
    ]
}

const zillientConsultation = {
    businessId: "zillient-consultation",
    title: "Zillient Consultation",
    code: "Consultation",
    description: "Providing consultations to partners regarding legality and building an inclusive and integrated business that has an impact on the environment.",
    images: {
        screenBannerImg: {
            src: ImgBusinessConsultation,
            alt: "background zillient consultation"
        },
        screenListBg: {
            src: ImgBusinessZillientConsultation,
            alt: "background zillient consultation"
        },
        screenBannerIcon: {
            src: "",
            alt: ""
        },
        headerLogo: {
            src: IconBusinessConsultation,
            alt: "icon logo zillient consultation"
        }
    },
    serviceList: [
        {
            id: 1,
            service: "Jasa Legalitas pendirian badan usaha (PT, CV, DLL).​"
        } 
    ],
    serviceNotes: [
        
    ]
}

const businessZillient = {
    "zillient-farm": zillientFarm,
    "zillient-education": zillientEducation,
    "zillient-construction": zillientConstruction,
    "zillient-tour": zillientTour,
    "zillient-consultation": zillientConsultation
};

// use-context
const GlobalContext = createContext(null);
const globalStates =  {
    globalContext: GlobalContext,
    businessZillient
};

export default globalStates as any;
