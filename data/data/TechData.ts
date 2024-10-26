import {
  TechnologyServicesData,
  ServiceDetail,
  WorkingOptionsData,
  HeroSectionData,
} from "../dtos/ServicesPage.dto";

export const technologyServicesData: TechnologyServicesData = {
  leftColumnHeading: "Technology Services",
  leftColumnDescription:
    "Our cutting-edge technology services are designed to help businesses stay ahead in a constantly evolving digital landscape.",
  services: [
    {
      title: "Cloud Infrastructure",
      description:
        "Leverage scalable and secure cloud solutions that enhance operational efficiency and reduce costs.",
      link: "/cloud-infrastructure",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Integrate AI and machine learning into your processes to automate, optimize, and innovate your business.",
      link: "/ai-ml",
    },
    {
      title: "DevOps & Automation",
      description:
        "Streamline development and operations with our DevOps services that improve collaboration and speed up delivery cycles.",
      link: "/devops-automation",
    },
  ],
};

export const serviceData: ServiceDetail[] = [
  {
    imagePosition: "right",
    title: "Why Good Tech Services Matter",
    paragraphs: [
      "In today’s fast-paced digital world, leveraging advanced technology is crucial for businesses seeking to enhance their operations and stay competitive.",
      "Quality technology services enable organizations to harness data, automate processes, and innovate continuously, driving growth and efficiency.",
    ],
    imageSrc: "/images/tech-globe.webp",
    altText: "Technology Globe Illustration",
    noPaddingTop: false,
    noPaddingBottom: true,
  },
  {
    imagePosition: "left",
    title: "The Impact of AI and Automation",
    paragraphs: [
      "Artificial intelligence and automation are revolutionizing industries by streamlining processes and improving accuracy.",
      "Businesses adopting AI can drive faster decision-making, optimize operations, and personalize customer interactions.",
    ],
    imageSrc: "/images/tech-pexels.jpg",
    altText: "AI and Automation Illustration",
    noPaddingTop: true,
    noPaddingBottom: true,
  },
];

export const workingOptionsData: WorkingOptionsData[] = [
  {
    title: "Solutions",
    description:
      "Transform your business with our tailored technology solutions that enhance efficiency and drive growth.",
    items: [
      "Custom Software Development",
      "Data Analytics Solutions",
      "Cloud Integration",
    ],
  },
  {
    title: "Managed Services",
    description:
      "Offering comprehensive management of your IT infrastructure to ensure seamless operations.",
    items: [
      "MLOps Automation",
      "Data Collection & Security",
      "24/7 IT Support",
    ],
  },
  {
    title: "Consulting",
    description:
      "Expert guidance to assess and enhance your AI and ML capabilities for optimal performance.",
    items: [
      "AI Strategy Development",
      "Maturity Assessments",
      "Implementation Roadmaps",
    ],
  },
  {
    title: "Development",
    description:
      "Custom application development to address unique business needs and leverage new technologies.",
    items: [
      "Mobile Application Development",
      "Web Application Development",
      "API Development",
    ],
  },
];

export const heroData: HeroSectionData = {
  title: "Harnessing Development & AI to Generate Business Value",
  description:
    "Transform your organization with innovative AI-driven development solutions that accelerate growth and enhance productivity.",
  buttonText: "Get In Touch",
  buttonLink: "/get-started",
  features: ["INNOVATION-DRIVEN", "CUSTOMER-FOCUSED", "SCALABLE SOLUTIONS"],
};
