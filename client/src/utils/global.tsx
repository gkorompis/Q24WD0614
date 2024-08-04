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
                    item: "Project Management Professional (PMP): A Guide to PMBOK",
                    details: [
  {
    id: 1,
    name: "Project Management Professional (PMP): A Guide to PMBOK",
    desc: [
      "Pelatihan yang membekali peserta dengan semua Manajemen proyek yang unggul menjadi kunci keberhasilan organisasi dalam mengelola proyek-proyek kompleks. Organisasi membutuhkan tenaga manajemen proyek yang memiliki kompetensi tinggi untuk memastikan proyek diselesaikan tepat waktu, dalam anggaran, dan sesuai dengan tujuan yang ditetapkan. Tenaga manajemen proyek yang handal dapat mengoptimalkan sumber daya, mengatasi risiko, dan meningkatkan efisiensi operasional. Program Project Management Professional (PMP) menjadi jawaban bagi para profesional yang ingin meningkatkan kompetensi manajemen proyek mereka. PMP adalah program sertifikasi yang diakui secara global dan mengacu pada praktik terbaik dalam manajemen proyek. Program ini mencakup 10 topik bahasan, mulai dari kerangka kerja manajemen proyek hingga manajemen pengadaan proyek dan manajemen stakeholder. Latihan-latihan soal dalam program ini juga akan memberikan persiapan yang komprehensif untuk menghadapi uji sertifikasi."
    ]
  },
  {
    id: 2,
    name: "Topik",
    desc: [
      "Kerangka Kerja Manajemen Proyek.",
      "Grup Proses Manajemen Proyek dan Area Pengetahuan Manajemen Proyek.",
      "Manajemen Integrasi Proyek.",
      "Manajemen Lingkup Proyek.",
      "Manajemen Jadwal Proyek.",
      "Manajemen Biaya Proyek.",
      "Manajemen Kualitas Proyek.",
      "Manajemen Sumber Daya Manusia Proyek.",
      "Manajemen Komunikasi Proyek.",
      "Manajemen Resiko Proyek.",
      "Manajemen Pengadaan Proyek.",
      "Manajemen stakeholder proyek.",
      "Persiapan ujian dengan latihan-latihan soal."
    ]
  },
  {
    id: 3,
    name: "Peserta Pelatihan",
    desc: [
      "Manajer proyek, kepala proyek, dan juga koordinator proyek yang memiliki tujuan untuk mendapatkan sertifikasi Project Management Professional (PMP) dari PMI."
    ]
  },
  {
    id: 4,
    name: "Persyaratan Peserta Ujian",
    desc: [
      "Mengikuti 35 jam program pelatihan persiapan ujian.",
      "Pendidikan Min. S1 dengan pengalaman min 3 tahun sebagai project leader."
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
    "id": 1,
    "name": "Certified New Product Development Manager (NPDM)",
    "desc": [
      "Manajer Pengembangan Produk Baru (NPDM) yang unggul memegang peran kunci dalam inovasi dan pertumbuhan organisasi. Mereka bertanggung jawab mengelola proses pengembangan produk mulai dari analisis kebutuhan pelanggan hingga peluncuran produk baru ke pasar. Kompetensi tinggi dalam bidang pengembangan produk baru menjadi landasan penting dalam menjaga daya saing dan memenuhi tuntutan pasar yang terus berkembang. Program sertifikasi NPDM merujuk pada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang telah ditetapkan, seperti Keputusan Menteri Ketenagakerjaan RI No. 389 tahun 2013, No. 136 tahun 2016, dan No. 610 Tahun 2012. Ini memastikan bahwa peserta tidak hanya mendapatkan pengetahuan global, tetapi juga sesuai dengan konteks bisnis Nasional."
    ]
  },
  {
    "id": 2,
    "name": "Topik",
    "desc": [
      "Analisis kebutuhan pelanggan dan bisnis.",
      "Konsep dasar bauran pemasaran dan dimensi kualitas pelayanan.",
      "Strategi portofolio produk.",
      "Spesifikasi, konsep, desain dan regulasi produk.",
      "Komunikasi efektif.",
      "Analisis biaya produk baru.",
      "Laporan untuk produk baru."
    ]
  },
  {
    "id": 3,
    "name": "Peserta Pelatihan",
    "desc": [
      "Praktisi Pemasaran (Supervisor, Asisten Manajer, Manajer).",
      "Praktisi Produksi (Supervisor, Asisten Manajer, Manajer).",
      "Pemilik Usaha."
    ]
  },
  {
    "id": 4,
    "name": "Persyaratan Peserta Ujian",
    "desc": [
      "Pendidikan minimal S1.",
      "Peserta pelatihan New Product Development Manager dengan melampirkan sertifikat pelatihan terkait.",
      "Memiliki pengalaman dalam pengembangan produk atau inovasi produk baru (dibuktikan dengan surat pengalaman bekerja dari perusahaan)."
    ]
  },
  {
    "id": 5,
    "name": "Ujian Sertifikasi",
    "desc": [
      "Uji Tertulis (120 Menit).",
      "Uji Presentasi & Wawancara (60 Menit)."
    ]
  }
]

                },
                {
                    id: 2,
                    item: "New Product Development Professional (NPDP)",
                    details: [
  {
    id: 1,
    name: "New Product Development Professional (NPDP)",
    desc: [
      "Kompetensi unggul dalam Pengembangan Produk Baru menjadi kunci untuk menghadapi tantangan dalam inovasi dan pertumbuhan bisnis. Manajer yang memahami proses pengembangan produk dapat membantu organisasi untuk merespons perubahan pasar dan menciptakan produk yang sesuai dengan kebutuhan pelanggan. Sertifikasi New Product Development Professional (NPDP) yang dikembangkan oleh PDMA (The Product Development and Management Association), menjadi standar global untuk para praktisi pengembangan produk baru. Program ini menawarkan panduan komprehensif dan mendalam untuk memahami strategi pengembangan produk, manajemen portofolio, proses produk baru, serta riset pasar dan siklus hidup produk."
    ]
  },
  {
    id: 2,
    name: "Topik",
    desc: [
      "Strategi: Terkait kerangka dan alat mencapai tujuan perusahaan yang terintegrasi dengan inovasi dan pengembangan produk beserta ruang lingkup dan level penerapannya.",
      "Manajemen Portofolio: Terkait optimalisasi pengelolaan portofolio produk dan aspek-aspek terkait yang mendorong peningkatan kinerja produk secara keseluruhan.",
      "Proses Produk (dan Jasa) Baru: Terkait konsep fundamental dan praktek terbaik dari variasi proses pengembangan produk termasuk para pemangku kepentingan dan sumber daya yang terlibat.",
      "Metrik dan Alat Bantu: Terkait upaya pengukuran kinerja dan proses serta berbagai alat bantu pendukung peningkatan efektivitas dan efisiensi secara sistematis dan berkesinambungan.",
      "Riset Pasar: Terkait metodologi dan sistematika dalam pengambilan dan pengolahan data serta informasi mengenai pelanggan, pasar, kompetisi, dan lainnya sebagai dasar pengambilan keputusan.",
      "Tim, Budaya, dan Organisasi: Terkait pengembangan sumber daya manusia berkinerja tinggi baik sebagai individu maupun tim dengan melibatkan pertimbangan aspek keorganisasian seperti budaya dan struktur perusahaan.",
      "Siklus Hidup Produk (dan Jasa): Terkait strategi dan manajemen pengelolaan produk dan jasa pada berbagai fase daur hidupnya sehingga memberikan manfaat berkelanjutan."
    ]
  },
  {
    id: 3,
    name: "Peserta Pelatihan",
    desc: [
      "Professional bidang pengembangan / Inovasi Produk."
    ]
  },
  {
    id: 4,
    name: "Persyaratan Peserta Ujian",
    desc: [
      "Pendidikan minimal S1.",
      "Berpengalaman Min 2 tahun dalam bidang pengembangan produk.",
      "Mengikuti Pelatihan NPDP."
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
                            name: "Certified Professional Marketer (CPM) Asia",
                            desc: [
                                "Dalam menghadapi persaingan bisnis yang semakin ketat, organisasi perlu melibatkan karyawan yang memiliki keahlian di bidang manajemen pemasaran. Keberhasilan suatu perusahaan tidak hanya ditentukan oleh kualitas produk atau layanan yang ditawarkan, tetapi juga oleh kemampuan dalam merumuskan strategi pemasaran yang efektif. Karyawan dengan kompetensi di riset pasar, komunikasi pemasaran, dan strategi pemasaran mampu menjadi katalisator kesuksesan dalam meningkatkan visibilitas merek dan menarik pelanggan. Certified Professional Marketer (CPM) Asia menjadi rujukan utama bagi para profesional pemasaran. Sertifikasi ini, yang diakui di tingkat Asia, memberikan pedoman dan standar tinggi dalam praktik manajemen pemasaran. Melibatkan diri dalam program ini membuka peluang bagi para praktisi untuk memahami secara lebih mendalam berbagai aspek pemasaran, dari riset pasar hingga manajemen pemasaran di lingkungan bisnis yang semakin global."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc:[
                                "Marketing Research.",
                                "Marketing Communications.",
                                "Marketing Strategy.",
                                "Asia Business.",
                                "Asia Marketing Management"
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Praktisi dan akademisi bidang pemasaran."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Persyaratan Peserta Ujian",
                            desc: [
                                "Pendidikan Mininal S1 dengan Pengalaman Minimal 5 tahun Bidang Marketing."
                            ]
                        },
                        {
                            id: 5,
                            name: "Ujian Sertifikasi",
                            desc: [
                                "Waktu ujian selama 5 hari, @2 jam untuk setiap modul.",
                                "Metode ujian berupa ujian tertulis, soal-soal dalam bentuk essay yang terdiri dari 3 modul dasar dan 2 modul wajib. Modul dasar dijawab menggunakan B. Indonesia dan modul wajib menggunakan B. inggris."
                            ]
                        }
                    ]
                },
                                {
                    id: 2,
                    item: "Certified Digital Marketing",
                    details: [
                        {
                            id: 1,
                            name: "Certified Digital Marketing",
                            desc: [
                                "Dalam era digital yang terus berkembang, organisasi memerlukan karyawan dengan kompetensi di bidang pemasaran digital untuk tetap relevan dan bersaing secara efektif. Individu yang menguasai strategi pemasaran online, analisis data digital, dan pemanfaatan platform media sosial dapat membantu meningkatkan visibilitas dan interaksi merek dengan pelanggan. Certified Digital Marketing menjadi rujukan bagi para profesional pemasaran digital. Sertifikasi ini menetapkan standar tinggi untuk pemahaman dan keterampilan praktisi pemasaran dalam konteks digital. Dengan sertifikasi ini, mereka dapat membuktikan keahlian mereka di berbagai aspek pemasaran secara digital."
                            ]
                        },
                        {
                            id: 2, 
                            name: "Topik",
                            desc:[
                                "Mengidentifikasi Elemen Pemasaran Perusahaan (Marketing Mix ).",
                                "Melakukan Pendekatan Kepada Calon Pelanggan (Market Reseach).",
                                "Melaksanakan Keterampilan Penjualan.",
                                "Menyusun Rencana Aktifitas Penjualan.",
                                "Menyusun Rencana Aktifitas Penjualan.",
                                "Melakukan Perencanaan Periklanan (Digital Advertising).",
                                "Merancang Strategi dan Pembuatan Iklan.",
                                "Merancang Strategi dan pembelian Media.",
                                "Menggunakan Perangkat Komputer.",
                                "Menggunakan Penelusur Situs Web.",
                                "Menggunakan Aplikasi media Sosial (Sosial Media Marketing)."
                            ]
                        },
                        {
                            id: 3, 
                            name: "Peserta Pelatihan",
                            desc: [
                                "Para praktisi/akademisi bidang marketing yang membutuhkan peningkatan pengetahuan serta pengakuan kompetensi bidang digital marketing."
                            ]
                        },
                        {
                            id: 4, 
                            name: "Persyaratan Peserta Ujian",
                            desc: [
                                "Pendidikan minimal SMA sederajat dan memiliki pengalaman kerja minimal 1 tahun dibidang Pemasaran Digital (Digital Marketing)."
                            ]
                        },
                        {
                            id: 5,
                            name: "Ujian Sertifikasi",
                            desc: [
                                "Wawancara Portofolio/ Bukti kerja selama 1 Jam."
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "Certified Sales Manager",
                    details: [
  {
    "id": 1,
    "name": "Certified Sales Manager",
    "desc": [
      "Manajer penjualan yang memiliki kompetensi yang kuat menjadi kunci utama keberhasilan strategi penjualan suatu organisasi. Mereka memainkan peran integral dalam meningkatkan pendapatan dan membangun hubungan yang langgeng dengan pelanggan. Organisasi memerlukan pemimpin penjualan yang dapat mengarahkan tim dengan efektif, menganalisis pasar, dan merumuskan strategi penjualan yang berhasil. Certified Sales Manager menjadi standar yang diakui untuk menilai kemampuan dan pengetahuan seorang manajer penjualan. Sertifikasi ini membuktikan bahwa seseorang memiliki pemahaman mendalam tentang analisis lingkungan bisnis, penyusunan elemen pemasaran, perencanaan penjualan, manajemen akun, serta pelaksanaan pelatihan dan konseling kepada tim penjualan."
    ]
  },
  {
    "id": 2,
    "name": "Topik",
    "desc": [
      "Melakukan Analisa lingkungan bisnis.",
      "Menyusun elemen pemasaran.",
      "Menyusun rencana penjualan (sales plan).",
      "Menyusun rencana pengelolaan akun.",
      "Melaksanakan pembinaan (coaching) dan penyuluhan (counselling) terhadap tenaga penjual."
    ]
  },
  {
    "id": 3,
    "name": "Peserta Pelatihan",
    "desc": [
      "Para praktisi/akademisi bidang pemasaran yang membutuhkan peningkatan pengetahuan serta pengakuan kompetensi bidang pemasaran."
    ]
  },
  {
    "id": 4,
    "name": "Persyaratan Peserta Ujian",
    "desc": [
      "Pendidikan minimal D3.",
      "Berpengalaman kerja dan memiliki minimal 1 tahun sebagai manajer penjualan."
    ]
  },
  {
    "id": 5,
    "name": "Ujian Sertifikasi",
    "desc": [
      "Wawancara portofolio/tugas/bukti kerja"
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
                            name: "Jasa Bangun dan Renovasi Bangunan",
                            desc: ["no description"]
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
                            name: "Jasa Desain Arsitektur",
                            desc: ["no description"]
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
                            name: "Jasa Desain Interior",
                            desc: ["no description"]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            service: "Jasa Penyedia Tukang/Pekerja",
            list: [
                {
                    id: 1,
                    item: "Jasa Penyedia Tukang/Pekerja​",
                    details: [
                        {
                            id: 1,
                            name: "Jasa Penyedia Tukang/Pekerja​",
                            desc: ["no descpription"]
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
                        },
                        {
                            id: 2,
                            name: "Routes",
                            desc: [
                                    "Grand Mosque Bursa",
                                    "Turkish Delight Shop",
                                    "Green Mausoleum and Green Mosque",
                                    "Silk Market",
                                    "Leather Factory Outlet & Fashion Show",
                                    "Explore the Ancient City of Ephesus",
                                    "Visit the Ancient City of Hierapolis and the Cotton Castle",
                                    "Textile Outlet and Mevlana Mausoleum",
                                    "Sultanhani Caravanserai",
                                    "Stay in Cappadocia",
                                    "Tuz Golu (Acid Lake)",
                                    "Attaturk Mausoleum",
                                    "Hippodrome, Blue Mosque, and Hagia Sophia",
                                    "Topkapi Palace",
                                    "Grand Bazaar",
                                    "Bosphorus Cruise",
                                    "Ortokoy Village",
                                    "Taksim Square and Spice Bazaar"
                                ]
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
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                    "Pochen Bidulginang Falls",
                                    "Pocheon Hangtan River Sky Bridge",
                                    "Nami Island",
                                    "Mt Sorak",
                                    "Cheonggyecheon Stream",
                                    "Dongdaemun",
                                    "Bukchon Hanok Village",
                                    "Itaewon Mosque",
                                    "COEX Mall",
                                    "Gyeongbok Palace & National Folkfore Museum",
                                    "Shopping Tour (Ginseng Museum, Red Pine Shop, Duty Free Shop)",
                                    "N Seoul Tower & Love Lock",
                                    "Myeongdong Street"
                                    ]
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
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                    "Sun Moon Lake",
                                    "Wen Wu Temple",
                                    "King of Mao Cultural Tribe Shop",
                                    "Fengjia Night Market",
                                    "Chiang Kai Sek Memorial Hall",
                                    "Yehliu Geopark",
                                    "Jiufen Old Street",
                                    "Dongmen Night Market",
                                    "Taroko Gorge National Park",
                                    "Ji-An Shrine",
                                    "East Gate Night Market",
                                    "Taipei 101",
                                    "Ximending Area, Pinnaple Cake",
                                    "Shihlin Night Market"
                                    ]
                        }
                    ]
                },
                {
                    id: 4,
                    item: "4d3n bangkok pattaya Tour",
                    details: [
                        {
                            id: 1,
                            name: "Route",
                            desc: [
                                    "Honey Bee Farm",
                                    "Great & Grand Sweet Destination",
                                    "Nongnooch Village (Thai Culture Show & Elephant Show)",
                                    "Laser Budha Hill",
                                    "Erawadee Herbal Shop",
                                    "Pattaya Floating Market",
                                    "Pattaya Beach",
                                    "Gems Gallery",
                                    "Chaophraya River Cross By Boat to Wat Arun (Temple Of The Dawn)",
                                    "MBK Mall",
                                    "Asiatique Night Market"
                                    ]

                        }
                    ]
                },
                {
                    id: 5,
                    item: "6d japan tokyo mt. fuji",
                    details: [
                        {
                            id: 1,
                            name: "Route",
                            desc: [
                                    "Mt. Fuji",
                                    "Gotemba Premium Outlet",
                                    "Lake Ashi Cruise",
                                    "Hakone",
                                    "Owakudahi Hell Valley",
                                    "Asakusa Kannon Temple / Sensoji",
                                    "Tokyo Tower (Foot Town) - Photostop",
                                    "Ginza",
                                    "Shinjuku, Ikebukuro, and Shibuya Crossing street",
                                    "Hachiko Statue"
                                    ]

                        }
                    ]
                },
                {
                    id: 6,
                    item: "Vietnam 5D4N + 1N On Cruise",
                    details: [
                        {
                            id: 1,
                            name: "Route",
                            desc: [
                                    "Ho Chi Minh Complex",
                                    "Temple Of Literature",
                                    "Halong Bay – UNESCO World Heritage site",
                                    "Tai-chi Class",
                                    "Bai Tho",
                                    "Water Puppet Show",
                                    "Hoa Lu",
                                    "Tam Coc"
                                    ]
                        }
                    ]
                },
                {
                    id: 7,
                    item: "3 country tour",
                    details: [
                        {
                            id: 1,
                            name: "Route",
                            desc: [
                                "Malaysia (Merdeka Square, Batu Caves – Shopping for Malaysian Souvenirs, Genting Highland, Malaysia's Administrative Center Putrajaya)",
                                "Singapore (Universal Studios – Merlion Park – Gardens by the Bay – Orchard Road - Red House - King’s Palace - Twin Tower - Kedah Via Highway)",
                                "Malaysia–Thailand border (Wat Huathanon - Sleeping Buddha – Samila Beach – Shopping for Thai Souvenirs)"
                                ]
                        }
                    ]
                },
                {
                    id: 8,
                    item: "12-Day Turkey + dubai Tour",
                    details: [
                        {
                            id: 1,
                            name: "12-Day Turkey + dubai Tour",
                            desc: ["This 10-day Turkey tour package will take you to the best selected destinations in Turkey and Dubai."]
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                "Turki (Hagia Sophia, Cappadocia, Ephesus)",
                                "Dubai (Burj Al Arab, Dubai Marina Walk, Burj Khalifa, Jumeirah Mosque, Enjoy the sunset in the middle of the desert)"
                                ]
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
                    item: "The Beauty of Bali​",
                    details: [
                        {
                            id: 1,
                            name: "The Beauty of Bali",
                            desc: ["Explore the island's iconic and beautiful spots with a friendly English-speaking driver-guide, who will take you comfortably by car to each location, providing information, ample time for strolling, and a lunch break to ensure you stay refreshed."]
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                    "Tamblingan Lake",
                                    "Jatiluwih Rice Terraces",
                                    "Bali Handara Kosaido gate",
                                    "Pura Ulun Danu Temple"
                                    ]
                        }
                    ]
                },
                {
                    id: 2,
                    item: "The Lost World of East Java",
                    details: [
                        {
                            id: 1,
                            name: "The Lost World of East Java",
                            desc: ["Embark on a thrilling journey through Java's volcanoes, acid lakes, waterfalls, and jeep rides, perfect for adventurous travelers seeking unforgettable outdoor experiences with friends, as a couple, or solo, alongside energetic and interesting companions."]
                        },{
                            id: 2,
                            name: "Route",
                            desc: [
                                    "The Ijen Volcano with Largest Acid Lake",
                                    "The Magnificent Bromo Volcano",
                                    "Indonesia’s Largest Waterfall - Tumpak Sewu",
                                    "The Stunning Madakaripura Waterfall",
                                    "The Village Beneath The Lava - Lumajang",
                                    "An Acid Waterfall"
                                    ]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "GILI - THE ISLAND OF FREEDOM",
                    details: [
                        {
                            id: 1,
                            name: "GILI - THE ISLAND OF FREEDOM",
                            desc: ["Escape the crowds and traffic of Bali by visiting the Gili Islands, where you can enjoy white sandy beaches, a peaceful atmosphere without cars or motorbikes, and the charm of exploring by bicycle, cart, or horse, making it the perfect place to unwind and recharge."]
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                    "Gili Trawangan",
                                    "Gili Meno",
                                    "Gili Air"
                                    ]
                        }
                    ]
                },
                {
                    id: 4,
                    item: "RAFTING",
                    details: [
                        {
                            id: 1,
                            name: "RAFTING",
                            desc: ["Join our expert-guided rafting adventure, complete with all necessary equipment and steep river descents through breathtaking landscapes, where you'll create unforgettable memories and bond with your team while enjoying the thrill and beauty of nature."]
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                    "The Ayung River - The most stormy river in Bali and 14 kilometers long",
                                    "The Telaga River - Start at the Agung Volcano and 14 kilometers long"
                                    ]
                        }
                    ]
                },
                {
                    id: 5,
                    item: "FABULOUS BUKIT",
                    details: [
                        {
                            id: 1,
                            name: "FABULOUS BUKIT",
                            desc: ["Explore Bukit's luxurious coastlines, wild cliffs, and ideal parasailing spots with a friendly English-speaking driver-guide, enjoying ample time at each location for strolling and taking pictures, and a lunch stop to keep you refreshed."]
                        },
                        {
                            id: 2,
                            name: "Route",
                            desc: [
                                    "Turtle Rescue Center",
                                    "Parasailing",
                                    "Devil’s Tears",
                                    "Airplane Cafe",
                                    "Garuda Wisnu Kencana Cultural Park"
                                    ]
                        }
                    ]
                },
                {
                    id: 6,
                    item: "1-Day Adventure Package in Jogja",
                    details: [
                        {
                            id: 1,
                            name: "1-Day Adventure Package in Jogja",
                            desc: ["Tour suitable for both children and adults."]
                        },
                        {
                            id: 2,
                            name: "Route Option 01",
                            desc: [
                                    "Prambanan Temple",
                                    "Merapi Lava Tour Jeep",
                                    "Bumi Merapi"
                                    ]
                        },
                        {
                            id: 3,
                            name: "Route Option 02",
                            desc: [
                                    "Borobudur Temple (Terrace)",
                                    "VW Safari Borobudur Tour",
                                    "Chicken Church / Svarga Bumi"
                                    ]
                        },
                        {
                            id: 4,
                            name: "Route Option 03",
                            desc: [
                                    "Kalibiru National Park / Pule Payung",
                                    "VW Safari Omah Cantrik",
                                    "Gamplong Natural Studio"
                                    ]
                        },
                        {
                            id: 5,
                            name: "Route Option 04",
                            desc: [
                                    "Gembiraloka Zoo",
                                    "Tebing Breksi Jeep Tour",
                                    "Obelix Hills"
                                    ]
                        },
                        {
                            id: 6,
                            name: "Route Option 05",
                            desc: [
                                    "Gembiraloka Zoo",
                                    "Tebing Breksi Jeep Tour",
                                    "Obelix Hills",
                                    "Little Tokyo",
                                    "Parangtritis Beach Jeep Tour",
                                    "Obelix Sea View"
                                    ]
                        },
                        {
                            id: 7,
                            name: "Route Option 06",
                            desc: [
                                    "Gembiraloka Zoo",
                                    "Tebing Breksi Jeep Tour",
                                    "Obelix Hills",
                                    "Little Tokyo",
                                    "Parangtritis Beach Jeep Tour",
                                    "Obelix Sea View",
                                    "Goa Pindul Rafting",
                                    "Sadranan Beach",
                                    "Heha Ocean View"
                                    ]
                        }
                    ]
                },
                {
                    id: 7,
                   item: "2-Day Adventure Package in Jogja",
                    details: [
                        {
                            id: 1,
                            name: "2-Day Adventure Package in Jogja",
                            desc: ["Tour suitable for both children and adults."]
                        },
                        {
                            id: 2,
                            name: "Route Option 01",
                            desc: [
                                    "Lava Tour Jeep Merapi",
                                    "Prambanan Temple",
                                    "Obelix Hills"
                                ]
                        },
                        {
                            id: 3,
                            name: "Route Option 02",
                            desc: [
                                    "Goa Pindul Rafting",
                                    "Sadranan Beach",
                                    "Heha Ocean View"
                                ]
                        }
                    ]
                },
                {
                    id: 8,
                    item: "4-Day Adventure Package in Jogja",
                    details: [
                        {
                            id: 1,
                            name: "4-Day Adventure Package in Jogja",
                            desc: ["Tour suitable for both children and adults."]
                        },
                        {
                            id: 2,
                            name: "Day 01",
                            desc: [
    "Airport/Station pick-up",
    "Sand Dunes Tour",
    "Beach Jeep Tour",
    "Obelix Sea View"
]
                        },
                        {
                            id: 3,
                            name: "Day 02",
                            desc: [
    "Lava Tour Jeep Merapi",
    "Prambanan Temple",
    "Obelix Hills"
]
                        },
                        {
                            id: 4,
                            name: "Day 03",
                            desc: [
    "Goa Pindul Rafting",
    "Sadranan Beach Snorkeling",
    "Heha Sky View"
]
                        },
                        {
                            id: 5,
                            name: "Day 04",
                            desc: [
    "VW Combrio Omah Cantrik",
    "Studio Alam Gamplong",
    "Malioboro"
]
                        }
                    ]
                },
                {
                    id: 9,
                   item: "5-Day Adventure Package in Jogja",
                    details: [
                        {
                            id: 1,
                            name: "4-Day Adventure Package in Jogja",
                            desc: ["Tour suitable for both children and adults."]
                        },
                        {
                            id: 2,
                            name: "Day 01",
                            desc: [
    "Pick-up from Yogyakarta area",
    "Sunset at Obelix Hills",
    "Check-in at hotel"
]
                        },
                        {
                            id: 3,
                            name: "Day 02",
                            desc: [
    "Goa Pindul Rafting",
    "Timang Beach",
    "Heha Ocean View"
]
                        },
                        {
                            id: 4,
                            name: "Day 03",
                            desc: [
    "VW Safari at Omah Cantrik",
    "Studio Alam Gamplong",
    "Alun-alun Kidul"
]
                        },
                        {
                            id: 5,
                            name: "Day 04",
                            desc: [
    "Borobudur Temple",
    "Lava Tour Jeep Merapi",
    "Bumi Merapi",
    "Malioboro"
]
                        },
                        {
                            id: 6,
                            name: "Day 05",
                            desc: [
    "Kraton (Sultan's Palace)",
    "Taman Sari (Water Castle)",
    "Drop-off at station/airport"
]
                        }
                    ]
                },
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
                            name: "Badan Hukum",
                            desc: ["Pendaftaran perusahaan sebagai badan hukum, seperti perseroan terbatas (PT), firma, atau komanditer."]
                        },
                        {
                            id: 2,
                            name: "Nama Perusahaan",
                            desc: ["Pendaftaran nama perusahaan untuk mendapatkan hak eksklusif atas nama tersebut."]
                        },
                        {
                            id: 3,
                            name: "Nomor Pokok Wajib Pajak (NPWP)",
                            desc: ["Pendaftaran untuk memperoleh NPWP perusahaan."]
                        }
                       
                    ]
                },
                {
                    id: 2,
                    item: "Perizinan Usaha​",
                    details: [
                        {
                            id: 1,
                            name: "Izin Usaha",
                            desc: ["Pengurusan izin usaha sesuai dengan jenis dan lokasi usaha, seperti izin usaha mikro kecil menengah (UMKM) atau izin usaha perdagangan."]
                        },
                        {
                            id: 2,
                            name: "Izin Lokasi",
                            desc: ["Izin untuk menggunakan lokasi tertentu untuk kegiatan usaha."]
                        },
                        {
                            id: 3,
                            name: "Izin Mendirikan Bangunan (IMB)",
                            desc: ["Pengurusan izin untuk membangun atau merenovasi gedung."]
                        }
                    ]
                },
                {
                    id: 3,
                    item: "Sertifikasi dan Kepatuhan​",
                    details: [
                        {
                            id: 1,
                            name: "Sertifikasi Produk",
                            desc: ["Pengurusan sertifikasi untuk produk agar memenuhi standar kualitas dan keamanan tertentu."]
                        },
                        {
                            id: 2,
                            name: "Sertifikasi ISO",
                            desc: ["Sertifikasi untuk standar internasional seperti ISO 9001 (manajemen mutu) atau ISO 14001 (manajemen lingkungan)."]
                        },
                        {
                            id: 3,
                            name: "Kepatuhan Regulasi",
                            desc: ["Bantuan dalam memenuhi persyaratan regulasi industri spesifik, seperti regulasi BPOM untuk produk makanan dan obat."]
                        }
                    ]
                },
                {
                    id: 4,
                    item: "Dokumen Hukum dan Kontrak​",
                    details: [
                        {
                            id: 1,
                            name: "Pembuatan Kontrak",
                            desc: ["Penyusunan dan peninjauan kontrak, termasuk kontrak kerja, perjanjian sewa, dan kontrak bisnis lainnya."]
                        },
                        {
                            id: 2,
                            name: "Notaris",
                            desc: ["Jasa notaris untuk pembuatan akta dan dokumen hukum lainnya yang memerlukan legalisasi."]
                        }
                    ]
                },
                {
                    id: 5,
                    item: "Pengurusan Hak Kekayaan Intelektual​",
                    details: [
                        {
                            id: 1,
                            name: "Paten",
                            desc: ["Pengurusan hak paten untuk penemuan baru."]
                        },
                        {
                            id: 2,
                            name: "Merek Dagang",
                            desc: ["Pendaftaran merek dagang untuk perlindungan nama atau logo produk."]
                        },
                        {
                            id: 3,
                            name: "Hak Cipta",
                            desc: ["Pendaftaran hak cipta untuk karya kreatif seperti buku, musik, dan perangkat lunak."]
                        }
                    ]
                },
                {
                    id: 6,
                    item: "Layanan Hukum dan Konsultasi​",
                    details: [
                        {
                            id: 1,
                            name: "Konsultasi Hukum",
                            desc: ["Konsultasi untuk memahami kewajiban hukum dan peraturan yang berlaku."]
                        },
                        {
                            id: 2,
                            name: "Representasi Hukum",
                            desc: ["erwakilan hukum dalam perselisihan atau proses hukum."]
                        }
                    ]
                },
                {
                    id: 7,
                    item: "Pendaftaran dan Pengurusan Dokumen Pemerintahan​",
                    details: [
                        {
                            id: 1,
                            name: "Akta Kelahiran dan Kematian",
                            desc: ["Pengurusan akta kelahiran dan kematian untuk keperluan administratif."]
                        },
                        {
                            id: 2,
                            name: "Kartun Identitas",
                            desc: ["Pendaftaran untuk kartu identitas seperti KTP dan SIM."]
                        }
                    ]
                },
//                  Penyusunan dan Pengelolaan Dokumen Korporasi
// Rapat Umum Pemegang Saham (RUPS): Penyusunan dokumen dan notulensi untuk RUPS dan rapat lainnya.
// Laporan Tahunan: Penyusunan laporan tahunan untuk perusahaan sesuai dengan persyaratan hukum.
                {
                    id: 8,
                    item: "Penyusunan dan Pengelolaan Dokumen Korporasi​",
                    details: [
                        {
                            id: 1,
                            name: "Rapat Umum Pemegang Saham (RUPS)",
                            desc: ["Penyusunan dokumen dan notulensi untuk RUPS dan rapat lainnya."]
                        },
                        {
                            id: 2,
                            name: "Laporan Tahunan",
                            desc: ["Penyusunan laporan tahunan untuk perusahaan sesuai dengan persyaratan hukum."]
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
