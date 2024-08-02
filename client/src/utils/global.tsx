import { createContext } from "react";


const zillientFarm = {
    businessId: "zillient-farm",
    title: "Zillient Farm",
    description: "Create 1 million modern farmers, breeders, and fishermen in Indonesia, helping partners with capital, input requirements, cultivation guidance, and marketing.",
    images: {
        screenBannerImg: {
            src: "",
            alt: ""
        },
        screenListBg: {
            src: "",
            alt: ""
        },
        screenBannerIcon: {
            src: "",
            alt: ""
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
    description: "Focuses on providing training, certification and consultation to partners personally and non-personally as well as supporting and connecting the skills development of Indonesian youth on an international scale.",
    images: {
        screenBannerImg: {
            src: "",
            alt: ""
        },
        screenListBg: {
            src: "",
            alt: ""
        },
        screenBannerIcon: {
            src: "",
            alt: ""
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
    description: "Provide construction service based on professional, hight integrity, and dedicated to partners orientation excellence.",
    images: {
        screenBannerImg: {
            src: "",
            alt: ""
        },
        screenListBg: {
            src: "",
            alt: ""
        },
        screenBannerIcon: {
            src: "",
            alt: ""
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
    description: "Create one village one youtuber, introducing the potential and natural beauty of every village corner, providing collaborative tourism services to lift the tourism sector of Indonesia.",
    images: {
        screenBannerImg: {
            src: "",
            alt: ""
        },
        screenListBg: {
            src: "",
            alt: ""
        },
        screenBannerIcon: {
            src: "",
            alt: ""
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
    description: "Providing consultations to partners regarding legality and building an inclusive and integrated business that has an impact on the environment.",
    images: {
        screenBannerImg: {
            src: "",
            alt: ""
        },
        screenListBg: {
            src: "",
            alt: ""
        },
        screenBannerIcon: {
            src: "",
            alt: ""
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
