// Centralized Contact Information for ATOM Education

export const contactInfo = {
    // Primary Contact
    phone: "+91 77361 31333",
    phoneRaw: "917736131333",
    email: "atomeducation25@gmail.com",

    // Address
    address: {
        line1: "KPM Arcade, 2nd Floor",
        line2: "Calicut Road, Valanchery",
        city: "Valanchery",
        state: "Kerala",
        full: "KPM Arcade, 2nd Floor, Calicut Road, Valanchery, Kerala"
    },

    // WhatsApp
    whatsapp: {
        number: "917736131333",
        displayNumber: "+91 77361 31333",
        link: "https://wa.me/917736131333"
    },

    // Google Maps
    maps: {
        searchQuery: "KPM+Arcade+Calicut+Road+Valanchery+Kerala",
        link: "https://maps.google.com/?q=KPM+Arcade+Calicut+Road+Valanchery+Kerala",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7!2d76.1!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sValanchery!5e0!3m2!1sen!2sin!4v1"
    },

    // Social Media
    social: {
        facebook: "https://facebook.com/atomeducation",
        instagram: "https://instagram.com/atomeducation",
        youtube: "https://youtube.com/@atomeducation",
        linkedin: "https://linkedin.com/company/atomeducation"
    }
};

// Navigation Links
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Program", href: "/programs" },
    { name: "Campus", href: "/campus" },
    { name: "Admission", href: "/admission" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" }
];

// Program Links for Footer
export const programLinks = [
    { name: "NEET Preparation", href: "/programs/neet" },
    { name: "JEE Main & Advanced", href: "/programs/jee" },
    { name: "CUET Coaching", href: "/programs/cuet" },
    { name: "KEAM Classes", href: "/programs/keam" },
    { name: "CUSAT Classes", href: "/programs/cusat" },
    { name: "IISER Classes", href: "/programs/iiser" },
    { name: "Foundation Course", href: "/programs/foundation" },
    { name: "Repeaters Batch", href: "/programs/repeaters" }
];

// Quick Links for Footer
export const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Campus", href: "/campus" },
    { name: "Admission", href: "/admission" },
    { name: "Results", href: "/results" },
    { name: "Contact Us", href: "/contact" }
];

// Generate WhatsApp message URL
export const getWhatsAppUrl = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${contactInfo.whatsapp.number}?text=${encodedMessage}`;
};

// Generate email URL
export const getEmailUrl = (subject: string, body?: string) => {
    let url = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}`;
    if (body) {
        url += `&body=${encodeURIComponent(body)}`;
    }
    return url;
};
