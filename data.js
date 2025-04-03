const hospitals = [
    {
        id: 1,
        name: "Dhanwantari Hospital",
        address: "Sector 27,Tilak Road,Nigdi Pune",
        image: "DhanwantriHospital/DhanwantariImage.png",
        specialties: ["Pediatrics", "General Medicine", "Cardiology", "Neurology", "Orthopedics", "Gynecology and Obstetrics", "ENT(Eyes, Nose and Throat)", "Surgery(General and Laparoscopic)", "Plastic Surgery", "Radiology", "Urology", "Endocrinology", "Psychiatry", "Pathology", "Physiotherapy", "Opthamology", "Oncology", "Nephrology", "Gastroentrology", "Dermatology"],
        rating: 3.9,
        emergency: true,
        description: "Dedicated Care under one Roof.",
        stats: {
            beds: 35,
            doctors: 26,
            staff: 100,
            dailyPatients: 240
        },
        facilities: [
            "24/7 Emergency Care",
            "Advanced Diagnostic Imaging",
            "Modern Operating Theaters",
            "Intensive Care Units"
        ]
    },
    {
        id: 2,
        name: "Lokmanya Hospital",
        address: "Sector 27,Tilak Road,Nigdi Pune",
        image: "LokmanyaHospital/LokmanyaHospital.jpg",
        specialties: ["Orthopedics", "Oncology", "Opthamology", "Dental", "Cardiology", "Neurology", "Gastroentrology", "Gynecology"],
        rating: 4.5,
        emergency: true,
        description: "Excels in multispecialty care with 50+ years of expertise, especially in orthopaedics.",
        stats: {
            beds: 110,
            doctors: 6,
            staff: 30,
            dailyPatients: 100
        },
        facilities: [
            "Emergency Department",
            "Cancer Treatment Center",
            "Diagnostic Services (Pathology, Radiology, Imaging – CT, MRI, X-ray, Ultrasound)",
            "Dental & Maxillofacial Surgery",
            "Dialysis Center"
        ]
    },
    {
        id: 3,
        name: "Sterling Hospital",
        address: "Sector 27, Near Bhel Chowk, Pradhikaran Nigdi",
        image: "SterlingHospital/SterlingHospital.jpg",
        specialties: ["Dermatology", "General Medicine", "Orthopedics", "Gynecology and Obstetrics", "Pediatrics", "Cardiology", "Neurology", "ENT (Ear, Nose, and Throat)", "Radiology and Imaging", "Physiotherapy and Rehabilitation"],
        rating: 4.1,
        emergency: true,
        description: "Offers advanced, patient-centric care across multiple specialties with expert doctors and comprehensive medical services.",
        stats: {
            beds: 240,
            doctors: 10,
            staff: 50,
            dailyPatients: "?"
        },
        facilities: [
            "Emergency & Trauma Care (24x7)",
            "Intensive Care Unit (ICU) & Critical Care",
            "Operation Theatres with Advanced Equipment",
            "Diagnostic & Imaging Services (X-ray, CT Scan, USG, MRI, ECG, Echo, TMT)",
            "Blood Bank & Pathology Lab",
            "24x7 Pharmacy & Medical Store"
        ]
    },
    {
        id: 4,
        name: "Gandhi Nursing Home",
        address: "Plot No.102,PCNTDA,Sector 24,Nigdi Pune",
        image: "GandhiNursingHome/GandhiNursingHome.jpg",
        specialties: ["Gynecology and Obstetrics", "Laproscopic Surgery", "Urology", "General Surgery"],
        rating: 4.3,
        emergency: true,
        description: "Exceptional care every patient every day.",
        stats: {
            beds: 18,
            doctors: 4,
            staff: 10,
            dailyPatients: "?"
        },
        facilities: [
            "Digital X-ray Unit",
            "Intensive Care Unit (ICU) & Critical Care",
            "Operation Theatres with Advanced Equipment",
            "Well-Equipped Operation Theaters",
            "Sonography",
            "Indoor Laundry and Dry-Cleaning Services"
        ]
    },
    {
        id: 5,
        name: "Ojas Multispeciality Hospital",
        address: "SR.NO.203/1, Bhondave Corner, Ravet, D.Y.Patil Engineering, College Road, Pune",
        image: "OjasHospital/OjasHospital.png",
        specialties: ["Gynecology and Obstetrics", "Urology", "General Surgery", "Cardiology", "Pulmonology and Respiratory Medicine", "Diabetes Treatment", "Dermatology", "ENT(Ear,Nose&Throat)", "Gastroentrology", "General Physcian", "Neurology", "Orthopedics", "Pediatrics", "Physiotherapy"],
        rating: 4.2,
        emergency: true,
        description: "Medical,Surgical,Diagnostics services under one roof.",
        stats: {
            beds: 75,
            doctors: 10,
            staff: 30,
            dailyPatients: "100"
        },
        facilities: [
            "Spacious private AC rooms",
            "Intensive Care Unit (ICU) & Critical Care",
            "Separate wards for male and female patients",
            "Three advanced modular operation theatres equipped for major and supra-major surgeries",
            "Dedicated gynaec-operation theatre",
            "Integration of Ayurveda and Panchakarma therapy​"
        ]
    }


];

const doctors = [
    {
        id: 1,
        name: "Dr.S.R.Patil",
        specialty: "General Physician",
        experience: 20,
        image: "DhanwantriHospital/dr.srpatil.jpg",
        hospitalId: 1,
        rating: 4.9,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 2,
        name: "Dr.S.S.Patil",
        specialty: "Gynecology&Obstetrics",
        experience: 18,
        image: "DhanwantriHospital/dr-swarup-patil.jpg",
        hospitalId: 1,
        rating: 4.7,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 3,
        name: "Dr. Shweta Patil",
        specialty: "ENT Specialist",
        experience: 12,
        image: "DhanwantriHospital/dr-shweta-patil.jpg",
        hospitalId: 1,
        rating: 4.1,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 4,
        name: "Dr. Salil Patil",
        specialty: "Plastic Surgeon",
        experience: 15,
        image: "DhanwantriHospital/dr-salil-patil.jpg",
        hospitalId: 1,
        rating: 4.4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 5,
        name: "Dr.Saurabh Gaikwad",
        specialty: "Orthopedic Surgeon",
        experience: 10,
        image: "DhanwantriHospital/SaurabhGaikwad.jpg",
        hospitalId: 1,
        rating: 4.4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 6,
        name: "Dr.Sudha Salunkhe",
        specialty: "Gynecologist",
        experience: 11,
        image: "",
        hospitalId: 1,
        rating: 4.6,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 7,
        name: "Dr.Gajanan Kanitkar",
        specialty: "General Surgeon",
        experience: 26,
        image: "DhanwantriHospital/Dr.Gajanan Kanitkar.jpg",
        hospitalId: 1,
        rating: 4.6,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 8,
        name: "Dr.Priya Gaikwad",
        specialty: "Addiction Psychiatrist",
        experience: 12,
        image: "DhanwantriHospital/priyagaikwad.jpg",
        hospitalId: 1,
        rating: 4.2,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 9,
        name: "Dr.Sachin Patil",
        specialty: "Radiologist",
        experience: 15,
        image: "",
        hospitalId: 1,
        rating: 4.3,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 10,
        name: "Dr.Siddhesh Dhaigude",
        specialty: "Nephrologist",
        experience: 12,
        image: "DhanwantriHospital/Dr.Siddhesh Dhaigude.jpg",
        hospitalId: 1,
        rating: 4.3,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 11,
        name: "Dr.Narendra V.Vaidya",
        specialty: "Orthopedic Surgeon",
        experience: 32,
        image: "LokmanyaHospital/Dr.Narendra V.Vaidya.jpg",
        hospitalId: 2,
        rating: 4.4,
        availability: ["Thursday", "Saturday"]
    },
    {
        id: 12,
        name: "Dr.Pallav Bhatia",
        specialty: "Orthopedic Surgeon(Spine Surgeon)",
        experience: 14,
        image: "LokmanyaHospital/DrPallavBhatia.jpg",
        hospitalId: 2,
        rating: 4.2,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 13,
        name: "Dr.Rakesh Patil",
        specialty: "Orthopedic Surgeon",
        experience: 15,
        image: "LokmanyaHospital/Dr.Rakesh Patil.jpg",
        hospitalId: 2,
        rating: 4.2,
        availability: ["Monday", "Thursday", "Saturday"]
    },
    {
        id: 14,
        name: "Dr.Ashish Suryavanshi",
        specialty: "Orthopedic Surgeon",
        experience: 14,
        image: "LokmanyaHospital/Dr.AshishSuryavanshi.jpg",
        hospitalId: 2,
        rating: 4.4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 15,
        name: "Dr.Nilesh Khanzode",
        specialty: "Neurosurgeon",
        experience: 2,
        image: "LokmanyaHospital/Dr.NileshKhanzode.jpg",
        hospitalId: 2,
        rating: 4.4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 16,
        name: "Dr.Suprashant Kulkarni",
        specialty: "General Surgeon",
        experience: 27,
        image: "LokmanyaHospital/Dr.SuprashantKulkarni.jpg",
        hospitalId: 2,
        rating: 4.4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 17,
        name: "Dr.Amit Mulay",
        specialty: "Plastic Surgeon",
        experience: 6,
        image: "SterlingHospital/Dr.AmitMulay.jpg",
        hospitalId: 3,
        rating: 4.4,
        availability: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 18,
        name: "Dr.S K Toke",
        specialty: "Pulmonologist",
        experience: 10,
        image: "SterlingHospital/Dr.S KToke.jpg",
        hospitalId: 3,
        rating: 4.4,
        availability: ["Monday", "Wednesday", "Friday", "Saturday"]
    },
    {
        id: 19,
        name: "Dr.Vrushali S. Shenoy",
        specialty: "Psychiatrist",
        experience: 12,
        image: "SterlingHospital/Dr.Vrushali S.Shenoy.jpg",
        hospitalId: 3,
        rating: 4.4,
        availability: ["On Call"]
    },
    {
        id: 20,
        name: "Dr.Sarvesh Sunil Thatte",
        specialty: "Dermatologist",
        experience: 12,
        image: "SterlingHospital/Dr.Sarvesh SunilThatte.jpg",
        hospitalId: 3,
        rating: 5,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 21,
        name: "Dr.Shailesh Advani",
        specialty: "General Physcian",
        experience: 19,
        image: "SterlingHospital/Dr.ShaileshAdvani.jpg",
        hospitalId: 3,
        rating: 4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 22,
        name: "Dr. Abhijeet Palshikar",
        specialty: "Cardiology",
        experience: 19,
        image: "SterlingHospital/Dr. AbhijeetPalshikar.jpg",
        hospitalId: 3,
        rating: 4.5,
        availability: ["On Call"]
    },
    {
        id: 23,
        name: "Dr. Nitin K Gandhi",
        specialty: "General Surgeon",
        experience: 41,
        image: "GandhiNursingHome/Dr.NitinK.Gandhi.jpg",
        hospitalId: 4,
        rating: 3.5,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 24,
        name: "Dr.Giriraj Gandhi",
        specialty: "Plastic Surgeon",
        experience: 12,
        image: "GandhiNursingHome/Dr.GirirajGandhi.jpg",
        hospitalId: 4,
        rating: 3.5,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 25,
        name: "Dr.Arpita Gandhi",
        specialty: "General Surgeon",
        experience: 10,
        image: "GandhiNursingHome/Dr.ArpitaGandhi.jpg",
        hospitalId: 4,
        rating: 4,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 26,
        name: "Dr.Suhas Khaturia",
        specialty: "General Medicine",
        experience: 7,
        image: "OjasHospital/Dr.SuhasKhaturia.jpg",
        hospitalId: 5,
        rating: 3.8,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 27,
        name: "Dr.Umesh Sabale",
        specialty: "Gynecologist",
        experience: 7,
        image: "OjasHospital/Dr.UmeshSabale.jpg",
        hospitalId: 5,
        rating: 4.2,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 28,
        name: "Dr.Mahesh Kudale",
        specialty: "Urologist",
        experience: 11,
        image: "OjasHospital/Dr.MaheshKudale.png",
        hospitalId: 5,
        rating: 4,
        availability: ["Monday", "Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 29,
        name: "Dr.Nikhil Jillawar",
        specialty: "Gastroenterologist",
        experience: 4,
        image: "OjasHospital/Dr.NikhilJillawar.jpg",
        hospitalId: 5,
        rating: 3.5,
        availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
        id: 30,
        name: "Dr.Pushkar Galam",
        specialty: "Laproscopic Surgeon",
        experience: 4,
        image: "OjasHospital/Dr.PushkarGalam.jpg",
        hospitalId: 5,
        rating: 3.5,
        availability: ["On call"]
    },
    {
        id: 31,
        name: "Dr.Pooja Malhotra Thatte",
        specialty: "Dermatologist",
        experience: 5,
        image: "OjasHospital/Dr.PoojaMalhotraThatte.jpg",
        hospitalId: 5,
        rating: 4.7,
        availability: ["On call"]
    }




];