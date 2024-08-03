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
            service: "Aplikasi Drone Untuk Pertanian",
            list: [
                {   
                    id: 1,
                    item: "Paket Aplikasi Perangkat Drone",
                    details: [
                        {
                            id: 1, 
                            name: "Counting (sensus pohon)",
                            desc: [""]
                        },
                        {
                            id: 2, 
                            name: "Monitoring serangan hama dan penyakit",
                            desc: [""]
                        },
                        {
                            id: 3, 
                            name: "Monitoring infrastruktur kebun/lahan pertanian",
                            desc: [""]
                        }

                    ]
                },
                {
                    id: 2,
                    item: "Jasa Pemetaan Lahan",
                    details: [
                        {
                            id: 1, 
                            name: "Pemetaan Mikrotopografi",
                            desc: ["Pemetaan  dengan tingkat ketelitian sangat detail menggunakan differential geographic position system (DGPS) EPOCH RTK. Hasil pemetaan ini digunakan untuk mendukung tata kelola secara berkelanjutan."]
                        },
                        {
                            id: 2, 
                            name: "Pemetaan Kesuburan Tanah",
                            desc: ["Pemetaan berdasarkan tingkat kesuburan tanah. Peta ini menjadi dasar pengelolaan pertanian termasuk pemupukan."]
                        },
                    ]
                },
                {
                    id: 3,
                    item: "Jasa Studi Kelayakan Usaha",
                    details: [
                        {
                            id: 1, 
                            name: "Paket analisis dan identifikasi lingkungan fisik",
                            desc: [""]
                        },
                        {
                            id: 2, 
                            name: "Kesesuaian lahan",
                            desc: [""]
                        },
                        {
                            id: 3, 
                            name: "Studi sosial ekonomi",
                            desc: [""]
                        },
                        {
                            id: 4, 
                            name: "Analisa iklim",
                            desc: [""]
                        },
                        {
                            id: 5, 
                            name: "Analisa finansial dalam rencana pembangunan perkebunan kelapa sawit",
                            desc: [
                                "Survei Pendahuluan (Prasurvei): Kajian umum terhadap aspek potensi lahan dalam memperoleh gambaran kesesuaian lahan untuk tanaman",
                                "Studi Kelayakan (Feasibility Study): Berupa kegiatan lanjutan survei kesesuaian lahan dari survei pendahuluan ditambah kajian sosial ekonomi dan finansial pembangunan perkebunan dan pertanian"

                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            service: "Rancang Bangun Smart Farming",
            list: [
                {
                    id: 1,
                    item: "Konsultasi dan Perencanaan",
                    details: [
                        {
                            id: 1, 
                            name: "Analisis Kebutuhan",
                            desc: ["Menilai kebutuhan spesifik petani atau perusahaan pertanian untuk menentukan solusi teknologi yang paling sesuai."]
                        },
                        {
                            id: 2, 
                            name: "Perencanaan Implementasi",
                            desc: ["Merancang rencana implementasi teknologi smart farming yang meliputi pemilihan perangkat keras, perangkat lunak, dan sistem integrasi."]
                        },
                    ]
                },
                {
                    id: 2,
                    item: "Pemasangan dan Integrasi Teknologi",
                    details: [
                        {
                            id: 1, 
                            name: "Sensory dan IoT",
                            desc: ["Pemasangan sensor untuk memantau kondisi tanah, kelembaban, suhu, dan parameter lingkungan lainnya."]
                        },
                        {
                            id: 2, 
                            name: "Sistem Irigasi Cerdas",
                            desc: ["Instalasi sistem irigasi yang terintegrasi dengan sensor untuk mengatur penggunaan air secara efisien."]
                        },
                        {
                            id: 3, 
                            name: "Drone dan Kamera",
                            desc: ["Pemasangan drone dan sistem kamera untuk pemantauan tanaman dan deteksi masalah secara real-time."]
                        },
                    ]
                },
                {
                    id: 3,
                    item: "Pengembangan dan Pemrograman Perangkat Lunak",
                    details: [
                        {
                            id: 1, 
                            name: "Platform Manajemen Pertanian",
                            desc: ["Pengembangan perangkat lunak untuk manajemen data pertanian, analisis hasil panen, dan perencanaan."]
                        },
                        {
                            id: 2, 
                            name: "Aplikasi Mobile",
                            desc: ["Pembuatan aplikasi untuk memantau kondisi tanaman, mengelola irigasi, dan melacak input pertanian."]
                        },
                    ]
                },
                {
                    id: 4,
                    item: "Data Analitik dan Pemantauan",
                    details: [
                        {
                            id: 1, 
                            name: "Analisis Data",
                            desc: ["Mengumpulkan dan menganalisis data dari sensor dan perangkat lainnya untuk memberikan wawasan tentang kesehatan tanaman, kebutuhan nutrisi, dan kelembaban tanah."]
                        },
                        {
                            id: 2, 
                            name: "Pemantauan Real-Time",
                            desc: ["Sistem pemantauan yang memungkinkan petani untuk melihat kondisi tanaman dan lingkungan secara langsung."]
                        },
                    ]
                },
                {
                    id: 5,
                    item: "Pelatihan dan Edukasi",
                    details: [
                        {
                            id: 1, 
                            name: "Pelatihan Penggunaan Teknologi",
                            desc: ["Memberikan pelatihan kepada petani dan staf tentang cara menggunakan teknologi smart farming dan perangkat yang baru diimplementasikan."]
                        },
                        {
                            id: 2, 
                            name: "Edukasi tentang Praktik Terbaik",
                            desc: ["Menyediakan informasi mengenai praktik pertanian terbaik dan bagaimana teknologi dapat meningkatkan hasil."]
                        },
                    ]
                },
                {
                    id: 6,
                    item: "Pemeliharaan dan Dukungan Teknis",
                    details: [
                        {
                            id: 1, 
                            name: "Pemeliharaan Perangkat",
                            desc: ["Menyediakan layanan pemeliharaan untuk memastikan bahwa perangkat keras dan perangkat lunak tetap berfungsi dengan baik."]
                        },
                        {
                            id: 2, 
                            name: "Dukungan Teknis",
                            desc: ["Memberikan dukungan teknis untuk menangani masalah yang mungkin timbul selama penggunaan teknologi smart farming."]
                        },
                    ]
                },
                {
                    id: 7,
                    item: "Pengelolaan dan Optimasi",
                    details: [
                        {
                            id: 1, 
                            name: "Optimasi Proses Pertanian",
                            desc: ["Menyediakan layanan untuk mengoptimalkan proses pertanian menggunakan teknologi, seperti sistem irigasi otomatis, pemupukan yang dipersonalisasi, dan pengendalian hama yang lebih efisien."]
                        },
                        {
                            id: 2, 
                            name: "Peningkatan Produktivitas",
                            desc: ["Menggunakan data dan analitik untuk meningkatkan produktivitas dan hasil panen."]
                        },
                    ]
                }
            ]
        },

        {
            id: 3,
            service: "Layanan Dokter Tanaman",
            list: [
                {
                    id: 1,
                    item: "Rekomendasi Nutrisi Tanaman",
                    details: [
                        {
                            id: 1, 
                            name: "Rekomendasi Nutrisi Tanaman",
                            desc: ["Merupakan layanan dalam menentukan rekomendasi pemupukan untuk tanaman belum menghasilkan (TBM) dan tanaman menghasilkan (TM) agar diperoleh pertumbuhan dan produktivitas yang sesuai dengan potensi genetik maupun potensi lahannya."]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "Rekomendasi Pengobatan Tanaman",
                    details: [
                        {
                            id: 1, 
                            name: "Identifikasi OPT (Organisme Pengganggu Tanaman)",
                            desc: [""]
                        },
                        {
                            id: 2, 
                            name: "Diagnosis Penyakit Tanaman, Gangguan Non-OPT",
                            desc: [""]
                        },
                        {
                            id: 3, 
                            name: "Tinjauan Lapangan/Kunjungan ke lahan",
                            desc: [""]
                        },
                        {
                            id: 4, 
                            name: "Konsultasi Berbagai Aspek Tanaman",
                            desc: [""]
                        },
                        {
                            id: 5, 
                            name: "Rekomendasi Pengendalian OPT secara terpadu/PH",
                            desc: [""]
                        },
                        {
                            id: 6, 
                            name: "Pendampingan Petani Saat Melakukan Pengendalian",
                            desc: [""]
                        },
                        {
                            id: 7, 
                            name: "Evaluasi Hasil Pengendalian/Efektifitas Rekomendasi",
                            desc: [""]
                        },
                        
                    ],
                },
                {
                    id: 3,
                    item: "Pest Control",
                    details: [
                        {
                            id: 1, 
                            name: "Residential Protection",
                            desc: [""]
                        },
                        {
                            id: 2, 
                            name: "Commercial Protection",
                            desc: [""]
                        },
                        {
                            id: 3, 
                            name: "Industrial Protection",
                            desc: [""]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            service: "Pelatihan Teknis Budidaya Sawit",
            list: [
                {
                    id: 1,
                    item: "Pelatihan Dasar Budidaya Sawit",
                    details: [
                        {
                            id: 1, 
                            name: "Penanaman dan Perawatan",
                            desc: ["Teknik penanaman kelapa sawit, perawatan awal tanaman, dan manajemen pemeliharaan."]
                        },
                        {
                            id: 2, 
                            name: "Pilih Benih dan Varietas",
                            desc: ["Pemilihan varietas kelapa sawit yang sesuai dengan kondisi tanah dan iklim."]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "Manajemen Tanaman dan Pemeliharaan",
                    details: [
                        {
                            id: 1, 
                            name: "Pemupukan",
                            desc: ["Teknik pemupukan yang tepat untuk meningkatkan produktivitas dan kualitas buah."]
                        },
                        {
                            id: 2, 
                            name: "Pengendalian Hama dan Penyakit",
                            desc: ["Identifikasi dan pengendalian hama serta penyakit yang umum menyerang tanaman kelapa sawit."]
                        },
                        {
                            id: 3, 
                            name: "Irigasi",
                            desc: ["Sistem irigasi yang efektif untuk memastikan pasokan air yang cukup."]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "Teknik Pemanenan dan Pascapanen",
                    details: [
                        {
                            id: 1, 
                            name: "Pemanenan",
                            desc: ["Cara yang benar untuk memanen buah kelapa sawit agar kualitasnya terjaga."]
                        },
                        {
                            id: 2, 
                            name: "Pasca Panen",
                            desc: ["Pengolahan awal buah sawit dan penyimpanan untuk menjaga kualitas sebelum diolah lebih lanjut."]
                        }
                    ]
                },
                {
                    id: 4,
                    item: "Manajemen Tanah dan Lingkungan",
                    details: [
                        {
                            id: 1, 
                            name: "Pengelolaan Tanah",
                            desc: ["Teknik pengelolaan tanah untuk menjaga kesuburan dan kesehatan tanah."]
                        },
                        {
                            id: 2, 
                            name: "Praktik Keberlanjutan",
                            desc: ["Teknik dan praktik untuk mengurangi dampak lingkungan dari budidaya kelapa sawit."]
                        }
                    ]
                },
                {
                    id: 5,
                    item: "Teknologi dan Inovasi dalam Budidaya",
                    details: [
                        {
                            id: 1, 
                            name: "Teknologi Terbaru",
                            desc: ["Pengenalan dan pelatihan mengenai teknologi terbaru dalam budidaya kelapa sawit, seperti penggunaan drone, sensor, dan perangkat lunak manajemen pertanian"]
                        },
                        {
                            id: 2, 
                            name: "Inovasi Agronomi",
                            desc: ["Teknik dan praktik inovatif untuk meningkatkan hasil dan efisiensi."]
                        }
                    ]
                },
                {
                    id: 6,
                    item: "Manajemen dan Pengembangan Usaha:",
                    details: [
                        {
                            id: 1, 
                            name: "Perencanaan Usaha",
                            desc: ["Rencana bisnis dan strategi untuk mengelola kebun kelapa sawit secara efisien."]
                        },
                        {
                            id: 2, 
                            name: "Manajemen Keuangan",
                            desc: ["Pengelolaan keuangan untuk usaha budidaya kelapa sawit, termasuk analisis biaya dan manfaat."]
                        }
                    ]
                },
                {
                    id: 7,
                    item: "Pelatihan Kepatuhan Regulasi",
                    details: [
                        {
                            id: 1, 
                            name: "Regulasi dan Sertifikasi",
                            desc: ["Pengenalan mengenai regulasi dan sertifikasi yang berlaku untuk industri kelapa sawit, termasuk sertifikasi keberlanjutan seperti RSPO (Roundtable on Sustainable Palm Oil)."]
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            service: "Jasa Pendaftaran Pupuk dan Pestisida",
            list:[
                {
                    id: 1,
                    item: "Proses Pengajuan Izin Edar Pupuk",
                    details: [
                        {
                            id: 1,
                            name: "Persiapan Dokumen",
                            desc: ["Mengumpulkan semua dokumen yang diperlukan, termasuk spesifikasi produk, hasil uji laboratorium, label produk, dan lainnya."]  
                        },
                        {
                            id: 2,
                            name: "Pengajuan Pendaftaran:",
                            desc: ["Mengajukan dokumen pendaftaran ke Kementerian Pertanian atau lembaga terkait melalui sistem yang ditetapkan."]  
                        },
                        {
                            id: 3,
                            name: "Evaluasi Uji Mutu dan Efektivitas",
                            desc: ["Produk pupuk akan dievaluasi dan diuji di laboratorium untuk memastikan kualitas, keamanan, dan efektivitasnya."]  
                        },
                        {
                            id: 4,
                            name: "Audit dan Inspeksi Lapangan",
                            desc: ["Kementerian Pertanian dapat melakukan audit dan inspeksi lapangan untuk memverifikasi kepatuhan terhadap standar."]  
                        },
                        {
                            id: 5,
                            name: "Keputusan dan Penerbitan Izin",
                            desc: ["Jika produk memenuhi semua persyaratan, Kementerian Pertanian akan menerbitkan izin edar. Jika ada kekurangan, otoritas akan memberikan umpan balik untuk diperbaiki."]  
                        },
                        {
                            id: 6,
                            name: "Distribusi dan Penjualan",
                            desc: ["Setelah mendapatkan izin edar, produk pupuk dapat dipasarkan dan didistribusikan secara legal di Indonesia."]  
                        },
                    ]
                },
                {
                    id: 2,
                    item: "Layanan Izin Edar Pestisida",
                    details: [
                        {
                            id: 1,
                            name: "Konsultasi dan Penilaian Awal",
                            desc: [
                                "Memberikan informasi mengenai persyaratan perizinan pestisida.",
                                "Melakukan penilaian awal terhadap produk pestisida untuk memastikan bahwa produk tersebut memenuhi standar yang ditetapkan oleh pemerintah"
                            ]  
                        },
                        {
                            id: 2,
                            name: "Penyusunan Dokumen",
                            desc: ["Membantu dalam penyusunan dan pengumpulan dokumen yang diperlukan untuk pengajuan izin edar, seperti formulir pendaftaran, spesifikasi produk, hasil uji laboratorium (Uji Mutu, Uji Toksisitas, Uji Residu,, dan lainnya."]  
                        },
                        {
                            id: 3,
                            name: "Pengurusan Izin Edar",
                            desc: [
                                "Mengurus proses pendaftaran dan pengajuan izin edar ke Kementerian Pertanian.",
                                "Memantau status pengajuan dan memberikan update berkala kepada klien mengenai perkembangan proses perizinan."
                            ]  
                        },
                        {
                            id: 4,
                            name: "Pelatihan dan Edukasi",
                            desc: [
                                "Memberikan pelatihan dan edukasi kepada staf perusahaan mengenai prosedur perizinan dan cara memenuhi persyaratan regulasi.",
                                "Mengajarkan praktik terbaik untuk menjaga kepatuhan terhadap standar yang ditetapkan oleh pemerintah."
                            ]  
                        },
                        {
                            id: 5,
                            name: "Audit dan Inspeks",
                            desc: [
                                "Melakukan audit internal untuk memastikan bahwa fasilitas produksi, proses, dan produk memenuhi persyaratan yang ditetapkan oleh pemerintah.",
                                "Menyediakan dukungan selama inspeksi dari otoritas terkait untuk memastikan semua aspek memenuhi standar yang ditetapkan."
                            ]  
                        },
                        {
                            id: 6,
                            name: "Pemeliharaan Kepatuhan:",
                            desc: ["Mengelola pembaruan izin edar dan memastikan bahwa semua dokumen dan persyaratan tetap sesuai dengan regulasi"]  
                        },
                    ]
                }
            ]
        },
        {
            id: 6,
            service: "Analisa Dampak Lingkungan (AMDAL)",
            list: [
                {
                    id: 1,
                    item: "Konsultasi dan Penilaian Awal",
                    details: [
                        {
                            id: 1,
                            name: "Konsultasi dan Penilaian Awal",
                            desc: ["Membantu perusahaan atau individu memahami apakah proyek mereka memerlukan AMDAL dan melakukan penilaian awal."]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "Penyusunan Dokumen AMDAL",
                    details: [
                        {
                            id: 1,
                            name: "Penyusunan Dokumen AMDAL",
                            desc: ["Menyusun dokumen AMDAL yang mencakup KA-ANDAL, ANDAL, RKL, dan RPL."]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "Pengurusan Izin Lingkungan",
                    details: [
                        {
                            id: 1,
                            name: "Pengurusan Izin Lingkungan",
                            desc: ["Membantu dalam proses pengajuan dokumen AMDAL ke instansi pemerintah terkait untuk memperoleh izin lingkungan."]
                        }
                    ]
                },
                {
                    id: 4,
                    item: "Monitoring dan Evaluasi",
                    details: [
                        {
                            id: 1,
                            name: "Monitoring dan Evaluasi",
                            desc: ["Melakukan pemantauan dan evaluasi berkala terhadap pelaksanaan RKL dan RPL."]
                        }
                    ]
                },
                {
                    id: 5,
                    item: "Pelatihan dan Sosialisasi",
                    details: [
                        {
                            id: 1,
                            name: "Pelatihan dan Sosialisasi",
                            desc: ["Memberikan pelatihan dan sosialisasi terkait pengelolaan lingkungan dan AMDAL kepada staf perusahaan atau masyarakat sekitar."]
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            service: "Sertifikasi Halal dan BPOM",
            list: [
                {
                    id: 1,
                    item: "Layanan Jasa halal",
                    details: [
                        {
                            id: 1,
                            name: "Konsultasi Halal",
                            desc: [
                                "Memberikan informasi dan panduan mengenai persyaratan dan proses sertifikasi halal.",
                                "Menyediakan analisis awal untuk menentukan apakah produk atau proses produksi memenuhi standar halal."
                            ]
                        },
                        {
                            id: 2,
                            name: "Penyusunan Dokumen",
                            desc: [
                                "Membantu dalam penyusunan dokumen yang diperlukan untuk pengajuan sertifikasi halal, seperti daftar bahan baku, proses produksi, dan lain-lain.",
                                "Mengelola dokumentasi yang diperlukan sesuai dengan persyaratan dari lembaga sertifikasi halal."
                            ]
                        },
                        {
                            id: 3,
                            name: "Pelatihan dan Edukasi",
                            desc: [
                                "Menyediakan pelatihan dan edukasi mengenai prinsip-prinsip halal dan prosedur yang harus diikuti oleh perusahaan untuk memastikan kepatuhan terhadap standar halal.",
                                "Melatih staf dan manajemen perusahaan tentang pentingnya dan cara menjaga kehalalan produk."
                            ]
                        },
                        {
                            id: 4,
                            name: "Audit Halal",
                            desc: [
                                "Melakukan audit internal untuk memastikan bahwa semua aspek produksi dan bahan baku memenuhi persyaratan halal.",
                                "Mengidentifikasi area yang perlu diperbaiki untuk memenuhi standar halal."
                            ]
                        },
                        {
                            id: 5,
                            name: "Pengurusan Sertifikasi",
                            desc: [
                                "Mengurus proses pengajuan sertifikasi halal ke lembaga sertifikasi yang berwenang, seperti Majelis Ulama Indonesia (MUI) di Indonesia.",
                                "Menyediakan bimbingan selama proses audit eksternal yang dilakukan oleh lembaga sertifikasi."
                            ]
                        },
                        {
                            id: 6,
                            name: "Pemeliharaan Sertifikasi",
                            desc: [
                                "Membantu perusahaan dalam menjaga sertifikasi halal dengan melakukan audit berkala dan memastikan bahwa semua prosedur tetap sesuai dengan standar halal.",
                                "Mengelola pembaruan sertifikasi halal sesuai dengan ketentuan yang berlaku."
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "Jasa BPOM",
                    details: [
                        {
                            id: 1,
                            name: "Konsultasi dan Penilaian Awal",
                            desc: [
                                "Memberikan informasi tentang persyaratan perizinan BPOM.",
                                "Melakukan penilaian awal terhadap produk untuk memastikan bahwa produk tersebut memenuhi standar BPOM."
                            ]
                        },
                        {
                            id: 2,
                            name: "Penyusunan Dokumen",
                            desc: [
                                "Membantu dalam penyusunan dan pengumpulan dokumen yang diperlukan untuk pengajuan izin BPOM, seperti formulir pendaftaran, spesifikasi produk, hasil uji laboratorium, dan lainnya."
                            ]
                        },
                        {
                            id: 3,
                            name: "Pengurusan Izin Edar",
                            desc: [
                                "Mengurus proses pendaftaran dan pengajuan izin edar ke BPOM.",
                                "Memantau status pengajuan dan memberikan update berkala kepada klien mengenai perkembangan proses perizinan."
                            ]
                        },
                        {
                            id: 4,
                            name: "Pelatihan dan Edukasi",
                            desc: [
                                "Memberikan pelatihan dan edukasi kepada staf perusahaan mengenai prosedur BPOM dan cara memenuhi persyaratan regulasi.",
                                "Mengajarkan praktik terbaik untuk menjaga kepatuhan terhadap standar BPOM."
                            ]
                        },
                        {
                            id: 5,
                            name: "Audit dan Inspeksi",
                            desc: [
                                "Melakukan audit internal untuk memastikan bahwa fasilitas produksi, proses, dan produk memenuhi persyaratan BPOM.",
                                "Menyediakan dukungan selama inspeksi BPOM untuk memastikan semua aspek memenuhi standar yang ditetapkan."
                            ]
                        },
                        {
                            id: 6,
                            name: "Pemeliharaan Kepatuhan",
                            desc: [
                                "Membantu perusahaan dalam menjaga kepatuhan terhadap peraturan BPOM dengan melakukan audit berkala.",
                                "Mengelola pembaruan izin edar dan memastikan bahwa semua dokumen dan persyaratan tetap sesuai dengan regulasi."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            service: "Jasa Ekspor-Impor Komoditas Pertanian",
            list: [
                {
                    id:1,
                    item: "Konsultasi dan Penilaian Awal",
                    details: [
                        {
                            id:1,
                            name: "Konsultasi dan Penilaian Awal",
                            desc: [
                                "Memberikan informasi mengenai pasar ekspor dan impor.",
                                "Membantu dalam penilaian produk pertanian yang layak untuk diekspor atau diimpor."
                            ]
                        }
                    ]
                },
                {
                    id:2,
                    item: "Pengurusan Dokumen dan Perizinan",
                    details: [
                        {
                            id:1,
                            name: "Pengurusan Dokumen dan Perizinan",
                            desc: [
                                "Membantu dalam pengurusan dokumen ekspor impor seperti invoice, packing list, bill of lading, certificate of origin, dan lainnya.",
                                "Mengurus perizinan yang diperlukan, seperti Surat Izin Usaha Perdagangan (SIUP), Nomor Induk Berusaha (NIB), dan izin khusus dari Kementerian Pertanian atau Badan Karantina Pertanian."
                            ]
                        }
                    ]
                },
                {
                    id:3,
                    item: "Layanan Kepabeanan (Customs Clearance)",
                    details: [
                        {
                            id:1,   
                            name: "Layanan Kepabeanan (Customs Clearance)",
                            desc: [
                                "Mengurus proses bea cukai di negara asal dan negara tujuan.",
                                "Menyediakan jasa broker bea cukai untuk memfasilitasi pengeluaran barang dari pelabuhan atau bandara."
                            ]
                        }
                    ]
                },
                {
                    id:4,
                    item: "Logistik dan Pengangkutan",
                    details: [
                        {
                            id:1,
                            name: "Logistik dan Pengangkutan",
                            desc: [
                                "Mengatur pengiriman barang melalui jalur laut, udara, atau darat.",
                                "Menyediakan layanan pengemasan, penyimpanan, dan distribusi produk pertanian."
                            ]
                        }
                    ]
                },
                {
                    id:5,
                    item: "Asuransi",
                    details: [
                        {
                            id:1,
                            name: "Asuransi",
                            desc: [
                                "Menyediakan layanan asuransi untuk melindungi produk pertanian selama pengiriman."
                            ]
                        }
                    ]
                },
                {
                    id:6,
                    item: "Pengelolaan Risiko dan Kepatuhan",
                    details: [
                        {
                            id:1,
                            name: "Pengelolaan Risiko dan Kepatuhan",
                            desc: [
                                "Membantu dalam mengidentifikasi dan mengelola risiko terkait dengan ekspor impor.",
                                "Memastikan kepatuhan terhadap regulasi dan standar internasional."
                            ]
                        }
                    ]
                },
                {
                    id:7,
                    item: "Pelatihan dan Pendampingan",
                    details: [
                        {
                            id:1,
                            name: "Pelatihan dan Pendampingan",
                            desc: [
                                "Memberikan pelatihan dan pendampingan mengenai prosedur ekspor impor, standar kualitas, dan ketentuan perdagangan internasional."
                            ]
                        }
                    ]
                }
            ]
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
            service: "Procurement",
            list: [
                {
                    id: 1,
                    item: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "CERTIFIED PROCUREMENT OFFICER (CPOf)",
                    details: [
                        {
                            id: 1,
                            name: "CERTIFIED PROCUREMENT OFFICER (CPOf)",
                            desc: [
                                "Certified Procurement Officer (CPOf) merupakan program persiapan uji sertifikasi bagi pelaksana pengadaan barang & jasa/Procurement untuk memastikan para profesional bidang pengadaan barang & jasa/ Procurement memiliki kompetensi sebagai pelaksana dasar pengadaan barang & jasa yang berperan penting dalam proses keberlangsungan operasional perusahaan serta dapat berkontribusi memaksimalkan laba perusahaan. Bagi peserta yang dinyatakan lulus uji kompetensi akan memperoleh sertifikat kompetensi pada bidang Pengadaan Barang/Jasa serta dapat menyandang gelar profesi non akademik Certified Procurement Officer (CPOf)."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Menelaah Lingkungan Pengadaan Barang/jasa.",
                                "2. enyusun Kebutuhan dan Anggaran",
                                "3. Pengadaan Barang/Jasa.",
                                "4.  Memilih Penyedia Barang/Jasa.",
                                "5. Menyusun Dokumen Pengadaan Barang/Jasa.",
                                "6. Melakukan Kualifikasi Penyedia Barang/Jasa.",
                                "7. Mengevaluasi Dokumen Penawaran."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Para Profesional yang berasal baik dari institus pemerintah, BUMN, BUMD, BLU maupun Swasta yang berpengalaman melakukan tugas sebagai pelaksana Bidang Pengadaan Barang & Jasa/Procurement."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Persyaratan Peserta Ujian",
                            desc: [
                                "Pendidikan minimal D3/sederajat.",
                                "Berpengalaman di bidang Pengadaan Barang & Jasa / Procurement.",
                                "Memiliki sertifikat pelatihan berbasis kompetensi"
                            ]
                        },
                        {
                            id: 5, 
                            name: "Ujian Sertifikasi",
                            desc: [
                                "Wawancara Portofolio/Bukti Kerja yang dimiliki (1 jam)."
                            ]
                        }
                    ]
                },
                 {
                    id: 3,
                    item: "PENGADAAN BARANG/JASA PEMERINTAH (PBJ) (Kompetensi Level 1)",
                    details: [
                        {
                            id: 1,
                            name: "PENGADAAN BARANG/JASA PEMERINTAH (PBJ) (Kompetensi Level 1)",
                            desc: [
                                "Sertifikasi pengadaan Barang/Jasa merupakan aspek penting dalam banyak organisasi dan bisnis. Memiliki sertifikasi ini tentunya dapat memberikan keuntungan kompetitif dan menjaga keberlanjutan operasional yang sehat."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Pengantar Manajemen Rantai Pasok (Supply Chain Management).",
                                "2. Pengantar Pengadaan Barang/Jasa Pemerintah.",
                                "3. Melakukan Perencanaan PBJ level-1.",
                                "4. Melakukan Pemilihan Penyedia Barang/Jasa Pemerintah level-1.",
                                "5. Mengelola Kontrak PBJP level-1 dan",
                                "6. Mengelola PBJP Secara Swakelola level-1."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Peserta berasal dari instansi pemerintah, departemen teknis maupun pemerintah daerah, serta kalangan swasta yang memiliki kepedulian/hubungan kerja sebagai penyedia barang/jasa pemerintah."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Persyaratan Peserta Ujian",
                            desc: [
                                "Pendidikan minimal SLTA/Sederajat.",
                                "Mengikuti Pelatihan Pengadaan Barang/Jasa Pemerintah-Level 1."
                            ]
                        },
                        {
                            id: 5, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran di dalam kelas dengan online"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            service: "Health, Safety, and Environment",
            list: [
                {
                    id: 1,
                    item: "SERTIFIKASI AHLI K3 UMUM",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            service: "Risk and Compliances",
            list: [
                {
                    id: 1,
                    item: "CERTIFIED COMPLIANCE PROFESSIONAL (CCP)",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            service: "Finance",
            list: [
                {
                    id: 1,
                    item: "CHARTERED FINANCIAL ANALYST (CFA) - Level 1",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            service: "Human Capital",
            list: [
                {
                    id: 1,
                    item: "Certified Human Resource General Manager",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            service: "Supply Chain and Project Management",
            list: [
                {
                    id: 1,
                    item: "Project Management Professional (PMP): A Guide to PMBOK ** Exercise (Self Learning via Learning Management System)",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            service: "Product Development",
            list: [
                {
                    id: 1,
                    item: "Certified New Product Development Manager (NPDM)",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            service: "Boothcamp Sales And Marketing Expert",
            list: [
                {
                    id: 1,
                    item: "Certified Professional Marketer (CPM) Asia",
                    details: [
                        {
                            id: 1,
                            name: "Pengadaan Barang/Jasa Pemerintah bagi Pejabat Pembuat Komitmen (PPK) Tipe C",
                            desc: [
                                "PPK Memiliki fungsi strategis dalam pengelolaan keuangan negara, berwenang untuk mengambil keputusan dan tindakan yang berakibat pada pengeluaran anggaran dan bertanggung jawab atas pelaksanaan pengadaan barang /jasa. Oleh karenanya PPK harus memiliki kompetensi yang mumpuni guna menjamin pelaksanaan pengelolaan anggaran Lembaga/organisasi pengadaan barang/jasa sesuai dengan peraturan yang berlaku."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc: [
                                "1. Perencanaan PBJ meliputi: Indentifikasi kebutuhan dan penetapan PBJ, Penyusunan Spesifikasi Teknis dan Kerangka Acuan Kerja (KAK) Jasa Konsultansi Perorangan, Penyusunan Perkiraan Harga.",
                                "2. Pengelolaan Kontrak PBJ meliputi: perumusan kontrak dalam bentuk SPK, Pengendalian Pelaksanaan Kontrak, Pekerjaan Serah Terima Hasil PBJ, Evaluasi kinerja penyedia.",
                                "3. Pengelolaan PBJ secara swakelola: Perencanaan, persiapan, pelaksanaan, pengawasan dan serah terima pekerjaan PBJ."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Pejabat Pembuat Komitmen (PPK) yang berasal baik dari Institusi pemerintah, BUMN, BUMD & BLU yang telah memiliki Sertifikasi Pengadaan Barang/ Jasa tingkat dasar atau Level 1",
                                "Peserta diharapkan membawa laptop."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Metode Program",
                            desc: [
                                "Metode program menggunakan Blended Learning yaitu kombinasi pembelajaran yang diawali dengan pembelajaran mandiri dalam LMS dilanjutkan dengan metode In-class/tatap muka."
                            ]
                        }
                    ]
                }
            ]
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
            service: "Jasa Bangun dan Renovasi Bangunan​",
            list: [
                {
                    id: 1,
                    item: "Jasa Bangun dan Renovasi Bangunan​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            service: "Jasa Desain Arsitektur",
            list:  [
                {
                    id: 1,
                    item: "Jasa Desain Arsitektur​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            service: "Jasa Desain Interior",
            list: [
                {
                    id: 1,
                    item: "Jasa Desain Interior​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            service: "Jasa Penyedia Tukang/pekerja",
            list: [
                {
                    id: 1,
                    item: "Jasa Penyedia Tukang/pekerja​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                }
            ]
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
            service: "International Tour​",
            list: [
                {
                    id: 1,
                    item: "10-Day Turkey Tour​",
                    details: [
                        {
                            id: 1,
                            name: "10-Day Turkey Tour",
                            desc: ["This 10-day Turkey tour package will take you to the best selected destinations in Turkey"]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "6-Day Korea exotrip Tour",
                    details: [
                        {
                            id: 1,
                            name: "6-Day Korea exotrip Tour",
                            desc: ["This Exotrip Korea tour package will take you to the best selected destinations in South Korea."]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "6-Day taiwan Tour",
                    details: [
                        {
                            id: 1,
                            name: "6-Day taiwan Tour",
                            desc: ["Taiwan, a beautiful Asian country with stunning natural landscapes, historic sites, and a variety of attractions, makes an excellent travel destination."]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            service: "Domestic Tour",
            list: [
                {
                    id: 1,
                    item: "10-Day Turkey Tour​",
                    details: [
                        {
                            id: 1,
                            name: "10-Day Turkey Tour",
                            desc: ["This 10-day Turkey tour package will take you to the best selected destinations in Turkey"]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "6-Day Korea exotrip Tour",
                    details: [
                        {
                            id: 1,
                            name: "6-Day Korea exotrip Tour",
                            desc: ["This Exotrip Korea tour package will take you to the best selected destinations in South Korea."]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "6-Day taiwan Tour",
                    details: [
                        {
                            id: 1,
                            name: "6-Day taiwan Tour",
                            desc: ["Taiwan, a beautiful Asian country with stunning natural landscapes, historic sites, and a variety of attractions, makes an excellent travel destination."]
                        }
                    ]
                }
            ]
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
            service: "Jasa Legalitas pendirian badan usaha (PT, CV, DLL).​",
            list: [
                {
                    id: 1,
                    item: "Pendaftaran Perusahaan​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "Perizinan Usaha​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "Sertifikasi dan Kepatuhan​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                },
                {
                    id: 4,
                    item: "Dokumen Hukum dan Kontrak​",
                    details: [
                        {
                            id: 1,
                            name: "",
                            desc: [""]
                        }
                    ]
                },
            ]
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
