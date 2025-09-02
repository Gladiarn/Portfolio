import { ReactElement } from "react"

export default interface bubbleTypes {
  id: number
  size: number
  left: string
  top: string
  duration: string
  delay: string
}

export interface navItemsTypes {
  title: string
  href: string
}

export interface cardInfosTypes {
  title: string
  body: string
  background: string
  icon: ReactElement
}

export interface Project {
  title: string
  link: string
  introduction: string
  technologies: string[]
  images: string[]
  features: string []
}

export interface SkillsTypes {
  title: string,
  proficiency: number,
  total: number,
  category: string,
  level: string
}

export interface ContactInfoTypes {
  title: string;
  value: string;
  icon: ReactElement;
}

export interface FooterContactInfo {
  icon: ReactElement;
  value: string;
}

export interface ExperienceType {
  position: string;
  company: string;
  dateStarted: string;
  dateEnded: string;
  summary: string;
  contributions: string[];
};
