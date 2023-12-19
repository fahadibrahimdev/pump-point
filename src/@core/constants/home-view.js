import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'On Demand Fuel Delivery to your Car, Wherever You Are!',
    text: 'PumpPoint is a fuel delivery app for people who are tired of making stops at the gas station, when they could be utilising that time and effort to make it to that meeting in time, or get home without making any deto urs.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Schedule Deliveries',
            description: 'Place your order for the volume of fuel you require.',
            icon: 'timer'
        },
        {
            title: 'Track Delivery',
            description: 'Monitor the progress of your fuel truck and ETA updates in real time.',
            icon: 'steps-circle'
        },
        {
            title: 'Swift Payment Option ',
            description: 'The secure POS in the PumpPoint app allows you to save your card details.',
            icon: 'credit-card'
        },
        {
            title: 'Pre book Quotation',
            description: 'Corporations can request for quotes and schedule fuel for their fleets as well.',
            icon: 'business-growth'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Watch Your Fuel Gauge Hit Full without Lifting a Finger… Except the one to click ‘Place Order’.',
        'PumpPoint is a fuel delivery service and the only of its kind in Wichita. Kansas. Unlike other fuel delivery service providers, PumpPoint is neither exclusively corporate or caters to only emergencies, we believe that everyone could do with the convenience of fuel delivered to wherever they are so they can spend their time focusing on more important tasks. The best part is PumpPoint offers its services at affordable prices to help you save not just time and effort but also money.',
    ],
}

export const benefitsContent = {
    heading: 'Plan Your Day without Diversions',
    text: 'Make your day more efficient by eliminating unnecessary tasks from it, such as driving out of your way, or waiting for unreliable fuel providers to deliver. ',
    benefits: [
        {
            title: 'Competitive Prices',
            description: 'PumpPoint gets its fuel directly from refineries allowing it to be priced lower than gas stations. Individuals and companies can also sign up for our monthly subscription fees.',
            icon: 'competitive-prices'
        },
        {
            title: '24 Hour Service',
            description: 'You can place an order to be delivered at any time of the day.',
            icon: '247-support'
        },
        {
            title: 'Hazmat Certified',
            description: 'All PumpPoint fuel truck drivers are certified to drive tanks with hazardous materials.',
            icon: 'certificate'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is PumpPoint Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'What do I do in case something is not working on my app?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'No More Visits to the Fuel Station',
    text: 'Sign Up to Download PumpPoint Today!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: 'Why PumpPoint?',
    tertiary: 'Driver Sign-up'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
