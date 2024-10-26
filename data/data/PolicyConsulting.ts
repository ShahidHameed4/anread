import {
  TechnologyServicesData,
  ServiceDetail,
  WorkingOptionsData,
  HeroSectionData,
} from "../dtos/ServicesPage.dto"; // Adjust the path if necessary

export const technologyServicesData: TechnologyServicesData = {
  leftColumnHeading: "Policy Consultancy Services",
  leftColumnDescription:
    "Our policy consultancy services are designed to guide organizations in navigating the complexities of policy development and implementation.",
  services: [
    {
      title: "Policy Development",
      description:
        "Assist organizations in crafting effective policies that align with their strategic goals and comply with regulations.",
      link: "/policy-development",
    },
    {
      title: "Impact Assessment",
      description:
        "Evaluate the potential impacts of proposed policies and provide recommendations for improvement.",
      link: "/impact-assessment",
    },
    {
      title: "Stakeholder Engagement",
      description:
        "Facilitate meaningful stakeholder engagement processes to ensure diverse perspectives are considered in policy formulation.",
      link: "/stakeholder-engagement",
    },
  ],
};

export const ServiceData: ServiceDetail[] = [
  {
    imagePosition: "right",
    title: "Navigating Complex Policy Landscapes",
    paragraphs: [
      "Effective policy is essential for organizational success, enabling clear guidance and decision-making.",
      "Our consultancy services help organizations design and implement policies that foster growth and accountability.",
    ],
    imageSrc: "/images/policy-consultancy.webp",
    altText: "Policy Consultancy Illustration",
    noPaddingTop: false,
    noPaddingBottom: true,
  },
  {
    imagePosition: "left",
    title: "Building Strong Policy Frameworks",
    paragraphs: [
      "We work closely with organizations to establish robust policy frameworks that drive consistency and transparency.",
      "Our approach emphasizes collaboration and best practices to ensure policies meet organizational needs.",
    ],
    imageSrc: "/images/policy-framework.jpg",
    altText: "Policy Framework Illustration",
    noPaddingTop: true,
    noPaddingBottom: true,
  },
];

export const workingOptionsData: WorkingOptionsData[] = [
  {
    title: "Tailored Consultancy Services",
    description:
      "Our policy consultancy services are customized to meet the specific needs of each organization.",
    items: [
      "Policy Design and Implementation",
      "Regulatory Compliance Strategies",
      "Public Policy Analysis",
    ],
  },
  {
    title: "Training and Capacity Building",
    description:
      "We provide training sessions to enhance your team's capacity to engage with policy issues effectively.",
    items: [
      "Policy Advocacy Training",
      "Stakeholder Engagement Workshops",
      "Effective Communication Strategies",
    ],
  },
  {
    title: "Research and Analysis",
    description:
      "Our team conducts in-depth research to support informed policy decisions and strategic planning.",
    items: [
      "Policy Impact Research",
      "Data Analysis and Reporting",
      "Benchmarking Studies",
    ],
  },
  {
    title: "Evaluation and Feedback",
    description:
      "We offer evaluation services to assess the effectiveness of existing policies and provide actionable feedback.",
    items: [
      "Policy Review and Revision",
      "Feedback Mechanism Development",
      "Continuous Improvement Strategies",
    ],
  },
];

export const heroData: HeroSectionData = {
  title: "Empowering Organizations Through Policy Excellence",
  description:
    "Transform your organization with our policy consultancy services, designed to create effective and sustainable policies.",
  buttonText: "Contact Us",
  buttonLink: "/contact",
  features: ["EVIDENCE-BASED", "COLLABORATIVE", "RESULTS-ORIENTED"],
};
