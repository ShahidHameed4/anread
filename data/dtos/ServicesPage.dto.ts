export interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

export interface TechnologyServicesData {
  leftColumnHeading: string;
  leftColumnDescription: string;
  services: ServiceItem[];
}

export interface ServiceDetail {
  imagePosition: "left" | "right";
  title: string;
  paragraphs: string[];
  imageSrc: string;
  altText: string;
  noPaddingTop: boolean;
  noPaddingBottom: boolean;
}
export interface WorkingOptionsData {
  title: string;
  description: string;
  items: string[];
}
export interface HeroSectionData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  features: string[];
}
