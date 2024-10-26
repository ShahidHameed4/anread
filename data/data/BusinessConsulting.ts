import {
  TechnologyServicesData,
  ServiceDetail,
  WorkingOptionsData,
  HeroSectionData,
} from "../dtos/ServicesPage.dto"; // Adjust the path if necessary

export const technologyServicesData: TechnologyServicesData = {
  leftColumnHeading: "Business Consultancy Services",
  leftColumnDescription:
    "Our expert consultancy services provide the insights and strategies necessary to help your business thrive in a competitive landscape.",
  services: [
    {
      title: "Strategic Planning",
      description:
        "Develop a clear and actionable roadmap for your business's future with our strategic planning services.",
      link: "/strategic-planning",
    },
    {
      title: "Market Analysis",
      description:
        "Gain insights into market trends and customer behavior to make informed decisions with our comprehensive market analysis.",
      link: "/market-analysis",
    },
    {
      title: "Operational Improvement",
      description:
        "Optimize your business operations to enhance efficiency and reduce costs with our operational improvement strategies.",
      link: "/operational-improvement",
    },
  ],
};

export const ServiceData: ServiceDetail[] = [
  {
    imagePosition: "right",
    title: "The Value of Expert Consulting",
    paragraphs: [
      "In a rapidly changing business environment, having expert guidance can be the difference between success and failure.",
      "Our consultancy services equip businesses with the tools and strategies needed to navigate challenges and seize opportunities.",
    ],
    imageSrc: "/images/consulting-value.webp",
    altText: "Value of Consulting Illustration",
    noPaddingTop: false,
    noPaddingBottom: true,
  },
  {
    imagePosition: "left",
    title: "Driving Transformation and Growth",
    paragraphs: [
      "Our consultants work closely with you to understand your unique challenges and drive transformational change.",
      "We help businesses innovate, adapt, and grow by implementing best practices and new technologies.",
    ],
    imageSrc: "/images/consulting-transformation.jpg",
    altText: "Business Transformation Illustration",
    noPaddingTop: true,
    noPaddingBottom: true,
  },
];

export const workingOptionsData: WorkingOptionsData[] = [
  {
    title: "Tailored Solutions",
    description:
      "Our consultancy services are customized to meet the unique needs of your business, ensuring maximum impact.",
    items: [
      "Business Strategy Development",
      "Performance Improvement Programs",
      "Change Management",
    ],
  },
  {
    title: "Comprehensive Assessments",
    description:
      "We provide thorough assessments to identify strengths, weaknesses, and opportunities within your organization.",
    items: [
      "Organizational Assessments",
      "Financial Health Checks",
      "Process Mapping and Analysis",
    ],
  },
  {
    title: "Training and Development",
    description:
      "Empower your team with the skills and knowledge they need to succeed through our targeted training programs.",
    items: [
      "Leadership Development Workshops",
      "Skills Training Sessions",
      "Team Building Activities",
    ],
  },
  {
    title: "Ongoing Support",
    description:
      "We offer continued support and advisory services to ensure the long-term success of your initiatives.",
    items: [
      "Regular Check-ins",
      "Implementation Support",
      "Performance Tracking and Reporting",
    ],
  },
];

export const heroData: HeroSectionData = {
  title: "Empowering Businesses Through Expert Consultancy",
  description:
    "Transform your organization with our tailored consultancy services designed to drive growth and efficiency.",
  buttonText: "Get Started",
  buttonLink: "/get-started",
  features: ["CLIENT-CENTERED", "RESULTS-ORIENTED", "STRATEGIC INSIGHTS"],
};
