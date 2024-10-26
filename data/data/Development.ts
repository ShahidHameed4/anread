import {
  TechnologyServicesData,
  ServiceDetail,
  WorkingOptionsData,
  HeroSectionData,
} from "../dtos/ServicesPage.dto"; // Adjust the path if necessary

export const technologyServicesData: TechnologyServicesData = {
  leftColumnHeading: "Organizational Development Services",
  leftColumnDescription:
    "Our organizational development services are designed to build a strong foundation for your business, ensuring sustainable growth and success.",
  services: [
    {
      title: "Business Model Development",
      description:
        "Create a robust business model that aligns with your vision and market demands, ensuring long-term viability.",
      link: "/business-model-development",
    },
    {
      title: "Leadership Development",
      description:
        "Cultivate effective leadership skills within your organization to inspire teams and drive results.",
      link: "/leadership-development",
    },
    {
      title: "Organizational Culture Design",
      description:
        "Develop a positive and productive organizational culture that attracts talent and enhances employee engagement.",
      link: "/organizational-culture-design",
    },
  ],
};

export const ServiceData: ServiceDetail[] = [
  {
    imagePosition: "right",
    title: "Building a Strong Foundation for Success",
    paragraphs: [
      "A well-structured organization is crucial for achieving your business objectives and ensuring sustainability.",
      "Our development services focus on creating systems and processes that empower your organization to thrive.",
    ],
    imageSrc: "/images/org-development.webp",
    altText: "Organizational Development Illustration",
    noPaddingTop: false,
    noPaddingBottom: true,
  },
  {
    imagePosition: "left",
    title: "Fostering Innovation and Agility",
    paragraphs: [
      "We help organizations foster a culture of innovation and agility to adapt to changing market dynamics.",
      "By developing frameworks that encourage creativity, your business can respond effectively to new challenges.",
    ],
    imageSrc: "/images/innovation-agility.jpg",
    altText: "Innovation and Agility Illustration",
    noPaddingTop: true,
    noPaddingBottom: true,
  },
];

export const workingOptionsData: WorkingOptionsData[] = [
  {
    title: "Customized Solutions",
    description:
      "Our development services are tailored to your specific organizational needs, ensuring maximum impact.",
    items: [
      "Business Strategy Formulation",
      "Change Management Processes",
      "Performance Enhancement Plans",
    ],
  },
  {
    title: "Training and Workshops",
    description:
      "We offer comprehensive training and workshops to equip your team with essential skills for growth.",
    items: [
      "Leadership Skills Development",
      "Team Dynamics Workshops",
      "Effective Communication Training",
    ],
  },
  {
    title: "Consultative Support",
    description:
      "Our experienced consultants provide ongoing support and advisory services to ensure successful implementation.",
    items: [
      "Organizational Assessments",
      "Feedback and Improvement Cycles",
      "Strategic Planning Sessions",
    ],
  },
  {
    title: "Performance Measurement",
    description:
      "Establish metrics and KPIs to track your organization’s performance and drive continuous improvement.",
    items: [
      "Key Performance Indicator (KPI) Development",
      "Benchmarking Against Industry Standards",
      "Regular Performance Reviews",
    ],
  },
];

export const heroData: HeroSectionData = {
  title: "Empowering Organizations to Achieve Their Vision",
  description:
    "Transform your organization with our development services focused on building strong foundations for sustainable growth.",
  buttonText: "Get Started",
  buttonLink: "/get-started",
  features: ["VISION-DRIVEN", "RESULTS-ORIENTED", "SUSTAINABLE GROWTH"],
};
