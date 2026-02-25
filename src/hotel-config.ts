// ============================================
// HOTEL_CONFIG - Core hotel identity & contact
// ============================================
export const HOTEL_CONFIG = {
  name: "Anantara Hotels, Resorts & Spa",
  shortName: "Anantara",
  type: "Resort" as const,

  location: {
    street: "",
    postalCode: "IT-39000",
    city: "",
    region: "Südtirol",
    country: "Italien",
    coordinates: {
      lat: 46.5,
      lng: 11.5,
    },
  },

  contact: {
    email: "info@anantara.com",
    phone: {
      main: { display: "", href: "" },
      whatsapp: {
        display: "",
        href: "",
      },
    },
    website: {
      main: "https://www.anantara.com/",
      booking: "https://www.anantara.com/",
    },
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: undefined,
  },

  legal: {
    taxId: "",
    imprint: {
      de: "",
      en: "",
      it: "",
    },
    privacy: {
      de: "",
      en: "",
      it: "",
    },
  },

  branding: {
    logo: {
      main: "/full-logo.png",
      mobile: "/full-logo-mobile.svg",
      alt: "/placeholder.svg",
    },
    dimensions: {
      mobile: { width: 132, height: 74 },
      desktop: { width: 189, height: 138 },
    },
  },

  copyright: {
    year: 2026,
    holder: "Anantara Hotels, Resorts & Spa",
  },
};

// ============================================
// BOOKING_CONFIG - Reservation settings
// ============================================
export const BOOKING_CONFIG = {
  bookingUrls: {
    de: "https://www.anantara.com/",
    en: "https://www.anantara.com/",
    it: "https://www.anantara.com/",
  },

  dates: {
    minBookingDate: "2026-03-04",
  },

  checkIn: {
    from: "15:00",
    to: "",
  },

  checkOut: {
    until: "12:00",
  },

  touristTax: {
    amount: 3.5,
    currency: "EUR",
    per: "person/day",
    exemptUnderAge: 14,
  },

  cancellation: {
    tiers: [
      { daysBeforeArrival: 60, fee: 0, description: "Free cancellation" },
      { daysBeforeArrival: 21, fee: 30, feeType: "percent" as const },
      { daysBeforeArrival: 7, fee: 75, feeType: "percent" as const },
      { daysBeforeArrival: 0, fee: 95, feeType: "percent" as const },
    ],
    depositRefundable: false,
  },

  policies: {
    pets: { allowed: false, fee: 0, per: "" },
    additionalPerson: { fee: 0, per: "night" },
    breakfastOnlyDeduction: { amount: 0, per: "person" },
  },
};

// ============================================
// TECHNICAL_CONFIG - Dev/deployment settings
// ============================================
export const TECHNICAL_CONFIG = {
  projectId: "A1029",

  urls: {
    production: "https://example.com",
    staging: "",
  },

  analytics: {
    gtmId: "GTM-PNP7DSX2",
  },

  email: {
    from: "noreply@example.com",
    replyTo: "info@anantara.com",
    transactional: "anantarahotelsresortsspa@updates.example.com",
    assetsBaseUrl: "https://example.com",
  },

  credits: {
    agency: "Alpin Ads",
    agencyUrl: "https://alpinads.com/",
  },
};

// ============================================
// SEO_CONFIG - Metadata for all languages
// ============================================
export const SEO_CONFIG = {
  baseUrl: "https://example.com",
  ogImage: "/placeholder.svg",

  home: {
    de: {
      title: "Anantara Hotels, Resorts & Spa | Luxuriöse Resorts Weltweit",
      description: "Entdecken Sie luxuriöse Resorts und Spa-Erlebnisse von Anantara an den schönsten Orten der Welt. Exquisite Küche, preisgekrönte Spas und außergewöhnlicher Service erwarten Sie.",
      ogTitle: "Anantara Hotels, Resorts & Spa | Luxuriöse Resorts Weltweit",
      ogDescription: "Entdecken Sie luxuriöse Resorts und Spa-Erlebnisse von Anantara an den schönsten Orten der Welt.",
      ogLocale: "de_DE",
    },
    en: {
      title: "Anantara Hotels, Resorts & Spa | Luxury Resorts Worldwide",
      description: "Discover luxury resorts and spa experiences by Anantara in the world's most beautiful locations. Exquisite cuisine, award-winning spas, and exceptional service await you.",
      ogTitle: "Anantara Hotels, Resorts & Spa | Luxury Resorts Worldwide",
      ogDescription: "Discover luxury resorts and spa experiences by Anantara in the world's most beautiful locations.",
      ogLocale: "en_US",
    },
    it: {
      title: "Anantara Hotels, Resorts & Spa | Resort di Lusso in Tutto il Mondo",
      description: "Scopri i resort di lusso e le esperienze spa di Anantara nei luoghi più belli del mondo. Cucina raffinata, spa pluripremiate e servizio eccezionale vi aspettano.",
      ogTitle: "Anantara Hotels, Resorts & Spa | Resort di Lusso in Tutto il Mondo",
      ogDescription: "Scopri i resort di lusso e le esperienze spa di Anantara nei luoghi più belli del mondo.",
      ogLocale: "it_IT",
    },
  },

  keywords: ["Anantara","Luxury Resorts","Spa Hotels","Five Star Hotels","Luxury Travel","Beach Resorts","City Hotels","Wellness Retreats","Gourmet Dining","Luxury Accommodations"],
};

// ============================================
// Helper functions
// ============================================
export function getHotelConfig() {
  return HOTEL_CONFIG;
}
export function getBookingConfig(): BookingConfigLegacy {
  return bookingConfig;
}
export function getTechnicalConfig() {
  return TECHNICAL_CONFIG;
}
export function getSeoConfig() {
  return SEO_CONFIG;
}

// ============================================
// Legacy aliases for backward compatibility
// ============================================
export interface HotelProfile {
  address: {
    line1: string;
    line2: string;
  };
  contact: {
    email: string;
    phone: {
      display: string;
      href: string;
    };
  };
  hotelName: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
  };
  legal: {
    imprintBaseUrl: string;
    privacyBaseUrl: string;
  };
  credits: {
    alpinAdsUrl: string;
  };
  logo: {
    src: string;
    mobileSrc: string;
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
}

export const hotelProfile: HotelProfile = {
  hotelName: HOTEL_CONFIG.name,
  address: {
    line1: HOTEL_CONFIG.location.street,
    line2: `${HOTEL_CONFIG.location.postalCode} ${HOTEL_CONFIG.location.city}, ${HOTEL_CONFIG.location.region} - ${HOTEL_CONFIG.location.country}`,
  },
  contact: {
    email: HOTEL_CONFIG.contact.email,
    phone: HOTEL_CONFIG.contact.phone.main,
  },
  social: {
    ...HOTEL_CONFIG.social,
    whatsapp: HOTEL_CONFIG.contact.phone.whatsapp.href,
  },
  legal: {
    imprintBaseUrl: HOTEL_CONFIG.legal.imprint.de,
    privacyBaseUrl: HOTEL_CONFIG.legal.privacy.de,
  },
  credits: { alpinAdsUrl: TECHNICAL_CONFIG.credits.agencyUrl },
   logo: {
    src: HOTEL_CONFIG.branding.logo.main,
    mobileSrc: HOTEL_CONFIG.branding.logo.mobile,
    mobile: HOTEL_CONFIG.branding.dimensions.mobile,
    desktop: HOTEL_CONFIG.branding.dimensions.desktop,
  },
};

export interface SiteConfig {
  baseUrl: string;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  baseUrl: SEO_CONFIG.baseUrl,
  ogImage: SEO_CONFIG.ogImage,
};

export interface BookingConfigLegacy {
  minDate: string;
}

export const bookingConfig: BookingConfigLegacy = {
  minDate: BOOKING_CONFIG.dates.minBookingDate,
};

export function getHotelProfile(): HotelProfile {
  return hotelProfile;
}

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}
