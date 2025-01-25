import Solar from "assets/images/Solar.svg";
import Cable from "assets/images/Cable.svg";
import Internet from "assets/images/Internet.svg";
import Phone from "assets/images/Phone.svg";

import SolarMask from "assets/images/Solar_mask.svg";
import CableMask from "assets/images/Cable_mask.svg";
import DealMask from "assets/images/Deal_mask.svg";
import ConsultationMask from "assets/images/Consultation_mask.svg";

export const experience = [
  {
    title: "Solar Solutions",
    description: `Harness the power of the sun and embrace clean, renewable energy with our solar solutions.`,
    image: Solar,
    href: 'solar'
  },
  {
    title: "Cable Services",
    description: `Stay connected with high-quality cable services that deliver reliable and fast internet, television`,
    image: Cable,
    href: 'cable'
  },
  {
    title: "Internet Solutions",
    description: `From fast broadband to fiber-optic connections, we'll help you find the internet service provider`,
    image: Internet,
    href: 'internet'
  },
  {
    title: "Phone Services",
    description: `Discover cost-effective and feature-rich phone services that keep you connected to your loved ones`,
    image: Phone,
    href: 'phone'
  },
];

export const choosing = [
  {
    number: "01",
    header: "Expertise and Experience",
    description: `
        With years of experience in the sales 
        and marketing industry, our team has a deep
        `,
  },
  {
    number: "02",
    header: "Extensive Network",
    description: `
        We have established strong relationships with 
        the leading solar and cable companies in the region
        `,
  },
  {
    number: "03",
    header: "Personalized Approach",
    description: `
        We believe that every customer is unique, and 
        their needs should be addressed accordingly
        `,
  },
  {
    number: "04",
    header: "Cost Savings",
    description: `By leveraging our industry knowledge and network, we can 
        help you save money on your solar and cable purchases
        `,
  },
  {
    number: "05",
    header: "Hassle-Free Process",
    description: `We handle all the research, negotiations, and 
        paperwork for you, making the process of finding
        `,
  },
];

export const serviceBlocks = [
  {
    id: 1,
    href: 'solar',
    title: "Solar Solutions",
    image: SolarMask,
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
  },
  {
    id: 2,
    href: 'cable',
    title: "Cable Services",
    image: CableMask,
    description:
      "Stay connected with high-quality cable services that deliver reliable and fast internet, television.",
  },
  {
    id: 3,
    href: 'deals',
    title: "Deals and Promotions",
    image: DealMask,
    description:
      "We pride ourselves on securing great deals and promotions for our customers.",
  },
  {
    id: 4,
    href: 'consultation',
    title: "Consultation and Support",
    image: ConsultationMask,
    description: `We understand that navigating the solar and cable landscape can be overwhelming.`,
  },
];
