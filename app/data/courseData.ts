export interface CourseData {
    slug: string;
    title: string;
    fullTitle: string;
    tagline: string;
    description: string;
    heroImage: string;
    highlights: string[];
    eligibility: string;
    duration: string;
    subjects: string[];
    features: {
        title: string;
        description: string;
    }[];
}

export interface CampusData {
    name: string;
    location: string;
    phone: string;
    whatsapp: string;
    color: string;
}

export const campuses: CampusData[] = [
    {
        name: "Girls Campus",
        location: "Pang-Chendi, Kottakkal, Malappuram",
        phone: "+91 75938 30736",
        whatsapp: "917593830736",
        color: "#FF69B4"
    },
    {
        name: "Boys Campus",
        location: "Kalipuram, Palakkad",
        phone: "+91 7510 22 8882",
        whatsapp: "917510228882",
        color: "#1E90FF"
    },
    {
        name: "Girls Campus",
        location: "Cheemeni, Payyannur, Kannur",
        phone: "+91 90727 78844",
        whatsapp: "919072778844",
        color: "#32CD32"
    }
];

export const courses: Record<string, CourseData> = {
    neet: {
        slug: "neet",
        title: "NEET",
        fullTitle: "NEET-UG Medical Entrance",
        tagline: "Your Gateway to Medical Excellence",
        description: "Comprehensive preparation for National Eligibility cum Entrance Test (NEET-UG) for admission to MBBS, BDS, AYUSH, and other medical courses across India.",
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop",
        highlights: [
            "Expert faculty with medical background",
            "Regular mock tests and assessments",
            "Personalized doubt clearing sessions",
            "Updated study materials aligned with NTA syllabus"
        ],
        eligibility: "Class 12 (PCB) or appearing students",
        duration: "1-2 Years",
        subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
        features: [
            { title: "Daily Practice Problems", description: "Topic-wise questions to reinforce learning" },
            { title: "Weekly Tests", description: "Full-length tests simulating actual NEET pattern" },
            { title: "One-on-One Mentoring", description: "Personal guidance from experienced mentors" },
            { title: "NCERT Focused Approach", description: "Strong emphasis on NCERT concepts" }
        ]
    },
    jee: {
        slug: "jee",
        title: "JEE",
        fullTitle: "JEE Main & Advanced",
        tagline: "Engineer Your Future",
        description: "Intensive coaching for Joint Entrance Examination (JEE) Main and Advanced for admission to IITs, NITs, and other premier engineering institutions.",
        heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&h=900&fit=crop",
        highlights: [
            "IIT-trained faculty members",
            "Advanced problem-solving techniques",
            "Computer-based test practice",
            "Rank improvement programs"
        ],
        eligibility: "Class 11-12 (PCM) or appearing students",
        duration: "1-2 Years",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        features: [
            { title: "Concept Building", description: "Strong foundation in core concepts" },
            { title: "Problem Solving Labs", description: "Dedicated sessions for complex problems" },
            { title: "Previous Year Analysis", description: "In-depth analysis of past JEE papers" },
            { title: "Doubt Resolution", description: "24/7 doubt clearing support" }
        ]
    },
    cuet: {
        slug: "cuet",
        title: "CUET",
        fullTitle: "Common University Entrance Test",
        tagline: "Your Path to Central Universities",
        description: "Complete preparation for CUET for admission to undergraduate programs in central universities, including Delhi University, JNU, BHU, and more.",
        heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1600&h=900&fit=crop",
        highlights: [
            "Domain-specific subject coaching",
            "General aptitude training",
            "Language proficiency classes",
            "University-specific guidance"
        ],
        eligibility: "Class 12 passed or appearing students",
        duration: "6 Months - 1 Year",
        subjects: ["Domain Subjects", "General Test", "Language Papers"],
        features: [
            { title: "Multi-Domain Preparation", description: "Coaching for multiple domain subjects" },
            { title: "Aptitude Training", description: "General aptitude and reasoning skills" },
            { title: "Mock Tests", description: "NTA pattern-based practice tests" },
            { title: "Counseling Support", description: "University and course selection guidance" }
        ]
    },
    cusat: {
        slug: "cusat",
        title: "CUSAT",
        fullTitle: "CUSAT CAT Entrance",
        tagline: "Excellence in Technical Education",
        description: "Specialized coaching for CUSAT CAT (Common Admission Test) for admission to Cochin University of Science and Technology's engineering and science programs.",
        heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop",
        highlights: [
            "CUSAT-specific curriculum",
            "Previous year paper practice",
            "Subject-wise crash courses",
            "Interview preparation"
        ],
        eligibility: "Class 12 (PCM/PCB) passed or appearing",
        duration: "6 Months - 1 Year",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        features: [
            { title: "Focused Preparation", description: "CUSAT-specific syllabus coverage" },
            { title: "Test Series", description: "Regular practice with CUSAT pattern" },
            { title: "Expert Faculty", description: "Teachers with CUSAT coaching experience" },
            { title: "Study Materials", description: "Comprehensive notes and worksheets" }
        ]
    },
    keam: {
        slug: "keam",
        title: "KEAM",
        fullTitle: "Kerala Engineering & Medical",
        tagline: "Gateway to Kerala's Premier Institutions",
        description: "Thorough preparation for KEAM (Kerala Engineering, Agriculture & Medical) examination for admission to engineering and pharmacy courses in Kerala.",
        heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1600&h=900&fit=crop",
        highlights: [
            "Kerala Plus Two syllabus focused",
            "State-level competition preparation",
            "Regular assessments",
            "Counseling support for admissions"
        ],
        eligibility: "Class 12 (Kerala Plus Two) students",
        duration: "1 Year",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        features: [
            { title: "State Board Focus", description: "Aligned with Kerala Plus Two syllabus" },
            { title: "Rank Prediction", description: "Regular rank estimation tests" },
            { title: "Previous Year Papers", description: "Extensive practice with past papers" },
            { title: "College Guidance", description: "Help with college selection process" }
        ]
    },
    iiser: {
        slug: "iiser",
        title: "IISER",
        fullTitle: "IISER Aptitude Test",
        tagline: "Pursue Pure Sciences at Premier Institutes",
        description: "Comprehensive coaching for IISER Aptitude Test for admission to Indian Institutes of Science Education and Research across India.",
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&h=900&fit=crop",
        highlights: [
            "Focus on conceptual understanding",
            "Scientific aptitude development",
            "Research-oriented approach",
            "KVPY integration"
        ],
        eligibility: "Class 12 (Science) with 60%+ marks",
        duration: "1 Year",
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
        features: [
            { title: "Aptitude Focus", description: "Scientific aptitude and reasoning" },
            { title: "Conceptual Clarity", description: "Deep understanding of fundamentals" },
            { title: "KVPY Preparation", description: "Integrated KVPY coaching" },
            { title: "Research Exposure", description: "Introduction to research methodology" }
        ]
    },
    foundation: {
        slug: "foundation",
        title: "Foundation",
        fullTitle: "Foundation Course (8th-10th)",
        tagline: "Build Your Academic Foundation",
        description: "Early preparation course for students in classes 8-10 to build a strong foundation for future competitive exams like NEET, JEE, and Olympiads.",
        heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop",
        highlights: [
            "Early competitive exam exposure",
            "Olympiad preparation",
            "NTSE/NMMS coaching",
            "Concept-based learning"
        ],
        eligibility: "Students of Class 8, 9, or 10",
        duration: "1-3 Years (based on class)",
        subjects: ["Mathematics", "Science", "Mental Ability"],
        features: [
            { title: "Strong Basics", description: "Solid foundation in core subjects" },
            { title: "Olympiad Training", description: "NSO, IMO, NTSE preparation" },
            { title: "School Sync", description: "Aligned with school curriculum" },
            { title: "Talent Identification", description: "Early identification of strengths" }
        ]
    },
    repeaters: {
        slug: "repeaters",
        title: "Repeaters",
        fullTitle: "Repeaters/Long-Term Course",
        tagline: "Second Chance, Best Chance",
        description: "Intensive year-long program designed for students who want to improve their previous performance and achieve higher ranks in competitive exams.",
        heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=900&fit=crop",
        highlights: [
            "Gap analysis and improvement plan",
            "Intensive revision sessions",
            "Personal mentorship",
            "Stress management support"
        ],
        eligibility: "Students who appeared for NEET/JEE previously",
        duration: "1 Year",
        subjects: ["Complete Syllabus Revision"],
        features: [
            { title: "Weakness Analysis", description: "Identify and address weak areas" },
            { title: "Intensive Practice", description: "Focused problem-solving sessions" },
            { title: "Mock Test Series", description: "Regular full-length tests" },
            { title: "Mental Wellness", description: "Counseling and motivation support" }
        ]
    }
};

export const syllabusOptions = [
    "CBSE",
    "Kerala State Board",
    "ICSE",
    "Karnataka State Board",
    "Tamil Nadu State Board",
    "Other State Board"
];

export const districtOptions = [
    "Malappuram",
    "Palakkad",
    "Kannur",
    "Kozhikode",
    "Thrissur",
    "Ernakulam",
    "Thiruvananthapuram",
    "Kollam",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Pathanamthitta",
    "Wayanad",
    "Kasaragod"
];

// WhatsApp number for form submissions
export const whatsappNumber = "917736131333";
