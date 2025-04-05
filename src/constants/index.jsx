import { CircleCheck, NotebookPen } from "lucide-react";
import { MessageSquareMore, MessageSquareText } from "lucide-react";
import { User, Search, LayoutDashboard } from "lucide-react";
import { CircleUserRound, MonitorSmartphone } from "lucide-react";
import { Info, CircleHelp, Shield, UserCheck } from "lucide-react";
import { Gavel, MessageSquare, Tag } from "lucide-react";
import { Lock, FileText, Star, Smartphone, Layers } from "lucide-react";
import { Bell, Globe, PhoneCall, MessageCircle } from "lucide-react";
import { Users, CircleAlert } from "lucide-react";

import user1 from "../assets/Blog post featured image.jpg";
import user2 from "../assets/Blog Post Img Conclusions.jpg";
import user3 from "../assets/Blog post Img HNDGrow part.jpg";
import user4 from "../assets/Blog Post Img Intro part2.jpg";
import user5 from "../assets/MiaClark.png";
import user6 from "../assets/LeoHarris.png";
import user7 from "../assets/Alisson situations.png";
import user8 from "../assets/BobSmith.png";
import user9 from "../assets/Carolwilliams.png";
import user10 from "../assets/Carolwilliams.png";
import user11 from "../assets/EmmaDavies.png";
import user12 from "../assets/FrankMilner.png";
import user13 from "../assets/GraceWilson.png";
import user14 from "../assets/IsabellaAnderson.png";
import user15 from "../assets/JackThomas.png";
import user16 from "../assets/NoahMartinez.png";
import user17 from "../assets/Olivia Robinson.png"
import user18 from "../assets/Paul Walker.png";
import user19 from "../assets/Quinn Young.png";
import user20 from "../assets/SamuelWright.png";
import user21 from "../assets/Tina Scott.png";

export const navItems = [
  { label: "Home", href: "/home" },
  { label: "Legal Rights", href: "/legalrights" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact Us", href: "/contactus" },
];

export const introParagraph = [
  {
    text: "Legal First Aid is an educational platform dedicated to demystifying the complexities of the Cameroon legal system. We understand that legal jargon and procedures can be overwhelming, especially for those unfamiliar with their rights. Our mission is to provide accessible, reliable, and easy-to-understand legal information to empower you to make informed decisions. Whether you're seeking clarity on the Cameroon Penal Code, need answers to common legal questions, or want to connect with legal experts, we're here to be your first line of defense in protecting individual rights and promoting justice.",
  },
];

export const features = [
  {
    icon: <NotebookPen />,
    text: "Access Legal Information",
    description:
      "Users can easily access simplified explanations of legal rights tailored to various roles (citizen, businessman, client, patient, doctor, student, teacher, etc.). The information is derived from the Cameroon Penal Code and other legal texts, ensuring users understand their rights in everyday language.",
  },
  {
    icon: <MessageSquareMore />,
    text: "Post Legal Issues",
    description:
      "Users have the ability to post their legal problems or issues on their personal page. This functionality allows them to seek advice or clarification from our network of legal experts, ensuring that they can get timely responses to their legal queries.",
  },
  {
    icon: <MessageSquareText />,
    text: "Community Interaction",
    description:
      "Beyond receiving expert advice, users can create their own posts and participate in discussions by commenting on or replying to other users’ posts. This interactive forum helps build a community where shared experiences and advice enhance legal understanding.",
  },
  {
    icon: <User />,
    text: "Connect with Legal Experts",
    description:
      "Users can navigate to a dedicated Legal Expert page that lists various experts, each specializing in specific legal domains. This allows users to select an expert that best fits their needs for personalized advice or further consultation.",
  },
  {
    icon: <LayoutDashboard />,
    text: "Legal Expert Dashboard",
    description:
      "Legal experts have a dedicated dashboard that enables them to manage consultation requests, publish informative articles, and update their credentials. This exclusive area differentiates the expert’s interface from the normal user experience.",
  },
  {
    icon: <Search />,
    text: "Search Legal Documents",
    description:
      "A robust search functionality allows users to quickly locate relevant sections of the Cameroon Penal Code and other legal texts. This feature is designed to help users navigate through extensive legal documentation with ease.",
  },
  {
    icon: <CircleUserRound />,
    text: "Account Management",
    description:
      "Both normal users and legal experts can register, log in, and manage their personal information seamlessly. The account management feature ensures that every user has a personalized and secure experience on the platform.",
  },
  {
    icon: <MonitorSmartphone />,
    text: "Responsive Design",
    description:
      "Built with ReactJS and Tailwind CSS, the app delivers a fully responsive and accessible experience across devices. Whether on mobile, tablet, or desktop, the interface adapts to ensure ease of use and clarity.",
  },
];

export const FAQs = [
  {
    icon: <Info />, // Visual Icon: Information icon for general introduction.
    text: "What is Legal First Aid?",
    description:
      "Legal First Aid is an educational platform dedicated to simplifying the complexities of the Cameroon legal system. It empowers citizens by providing accessible, reliable, and easy-to-understand legal information to help you navigate legal matters with confidence.",
  },
  {
    icon: <CircleHelp />, // Visual Icon: Help icon to guide users.
    text: "How can Legal First Aid help me?",
    description:
      "We offer clear explanations of the Cameroon Penal Code, answer common legal questions, and connect you with legal experts for personalized assistance. Whether you're facing a legal issue or just want to know your rights better, we're here to support you.",
  },
  {
    icon: <Shield />, // Visual Icon: Shield represents protection and rights.
    text: "Why is it important to know my legal rights?",
    description:
      "Knowing your legal rights equips you to stand up against injustice and exploitation. Understanding the law helps you make informed decisions, recognize when your rights are being infringed, and take the appropriate steps to defend yourself.",
  },
  {
    icon: <UserCheck />, // Visual Icon: User icon signifies accessibility for all users.
    text: "Do I need any legal background to use this app?",
    description:
      "Not at all! Legal First Aid is designed for everyone, regardless of legal knowledge. We break down complex legal jargon into simple, straightforward language so you can easily understand your rights and legal options.",
  },
  {
    icon: <Gavel />, // Visual Icon: Gavel symbolizes legal action and defense.
    text: "How can I use the laws to defend myself in difficult situations?",
    description:
      "By familiarizing yourself with relevant laws and regulations, you can identify when your rights are being violated and respond appropriately. Legal First Aid provides practical guidance and resources to help you take the necessary legal steps.",
  },
  // {
  //   icon: <CircleCheck />, // Visual Icon: Check circle indicates accuracy and trust.
  //   text: "Is the information on Legal First Aid up-to-date and accurate?",
  //   description:
  //     "Absolutely. We are committed to providing current and accurate legal information. Our content is regularly reviewed and updated by legal professionals to ensure you have the most recent insights into Cameroon's laws.",
  // },
  // {
  //   icon: <MessageSquare />, // Visual Icon: Message icon for personalized communication.
  //   text: "Can I get personalized legal advice through the app?",
  //   description:
  //     "Yes, you can. With our 'Expert Connect' feature, you can schedule consultations with verified legal professionals who provide personalized advice tailored to your specific situation.",
  // },
  // {
  //   icon: <Search />, // Visual Icon: Search icon for ease of navigation.
  //   text: "How do I find answers to specific legal questions I have?",
  //   description:
  //     "You can use our search function to quickly locate topics of interest or browse through categorized sections covering various legal areas. If you don't find what you're looking for, you can submit your question, and we'll guide you to the right resources or connect you with an expert.",
  // },
  
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Legal Documents" },
  { href: '/', text: "FAQs" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "/home", text: "Home" },
  { href: "/legalrights", text: "Legal Rights" },
  { href: "/aboutus", text: "About us" },
  { href: "/contactus", text: "Contact Us" },
];

export const contactLinks = [
  { href: "#", text: "@Instagram" },
  { href: "#", text: "@LinkedIn" },
  { href: "#", text: "@Facebook" },
  { href: "#", text: "@Twitter" },
];

// constants/legalRights.js
export const legalCategories = [
  {
    title: "Fundamental Human Rights",
    summary: "Core rights guaranteed to every Cameroonian citizen.",
    content: [
      "Right to life and dignity",
      "Equality before the law regardless of gender, religion, or ethnicity",
      "Freedom of expression, thought, and religion",
      "Right to privacy and personal security",
      "Freedom of assembly and association",
    ],
    legalReferences: [
      "Constitution of Cameroon",
      "Law No. 90-046 of 19 December 1990",
      "Universal Declaration of Human Rights",
    ],
  },
  {
    title: "Women's Rights in Marriage",
    summary:
      "Legal protections and entitlements for married women in Cameroon.",
    content: [
      "Equal rights in marriage and divorce proceedings",
      "Right to own and inherit property",
      "Protection against domestic violence",
      "Right to financial independence and support",
      "Equal parental rights in custody matters",
    ],
    legalReferences: [
      "Cameroon Civil Code (Articles 223-229)",
      "Law No. 2016/007 on Child Protection",
      "Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)",
    ],
  },
  {
    title: "Rights of Children in Cameroon",
    summary: "Ensuring the protection and development of children’s rights.",
    content: [
      "Right to education, healthcare, and a nurturing environment",
      "Protection against child labor and abuse",
      "Right to be heard in matters affecting them",
      "Access to social services and child protection programs",
    ],
    legalReferences: [
      "Cameroon Child Rights Act",
      "Convention on the Rights of the Child",
    ],
  },
  {
    title: "Workers' Rights and Labor Laws",
    summary: "Standards ensuring fair working conditions and compensation.",
    content: [
      "Right to fair wages and safe working conditions",
      "Protection against workplace discrimination and exploitation",
      "Right to unionize and engage in collective bargaining",
      "Legally mandated working hours and overtime pay",
    ],
    legalReferences: [
      "Cameroon Labor Code",
      "International Labour Organization Conventions",
    ],
  },
  {
    title: "Property and Inheritance Rights",
    summary: "Regulations governing property ownership and succession.",
    content: [
      "Right to own, buy, and sell property",
      "Legal procedures for inheritance and succession",
      "Protection of property rights under the law",
      "Mechanisms for dispute resolution in property matters",
    ],
    legalReferences: [
      "Cameroon Property Law",
      "Civil Code of Cameroon",
      "International Human Rights Law",
    ],
  },
];


export const situations = [
  {
    id: 1,
    name: "Alice Johnson",
    profileImage: user1,
    title: "Dispute over Contract Terms",
    description:
      "I entered a contract with a service provider but now I'm facing issues with the terms which seem unfair and one-sided.",
    image: user7,
    suggestions: [
      {
        id: 101,
        answer:
          "Review the contract with a legal expert to determine if the terms are enforceable.",
        image: user11,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: user10,
          matricule: "LAW123",
        },
        situation: {
          id: 1,
          title: "Dispute over Contract Terms",
          description:
            "I entered a contract with a service provider but now I'm facing issues with the terms which seem unfair and one-sided.",
          image: user7,
        },
      },
      {
        id: 102,
        answer: "Consider renegotiating the contract or seeking mediation.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 1,
          title: "Dispute over Contract Terms",
          description:
            "I entered a contract with a service provider but now I'm facing issues with the terms which seem unfair and one-sided.",
          image: user7,
        },
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    profileImage: null,
    title: "Property Ownership Dispute",
    description:
      "There is a disagreement over the boundary lines of my property and my neighbor's. The legal documents are unclear.",
    image: user8,
    suggestions: [
      {
        id: 201,
        answer:
          "Consult a surveyor and a property lawyer to clarify property boundaries.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 2,
          title: "Property Ownership Dispute",
          description:
            "There is a disagreement over the boundary lines of my property and my neighbor's. The legal documents are unclear.",
          image: user8,
        },
      },
      {
        id: 202,
        answer: "Explore mediation to resolve the dispute amicably.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 2,
          title: "Property Ownership Dispute",
          description:
            "There is a disagreement over the boundary lines of my property and my neighbor's. The legal documents are unclear.",
          image: user8,
        },
      },
    ],
  },
  {
    id: 3,
    name: "Carol Williams",
    profileImage: user3,
    title: "Issue with Rental Agreement",
    description:
      "My landlord is attempting to change the terms of our rental agreement without proper notice.",
    image: user10,
    suggestions: [
      {
        id: 301,
        answer: "Review your lease agreement and local rental laws.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 3,
          title: "Issue with Rental Agreement",
          description:
            "My landlord is attempting to change the terms of our rental agreement without proper notice.",
          image: user10,
        },
      },
      {
        id: 302,
        answer: "Seek advice from a legal expert specialized in tenant rights.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 3,
          title: "Issue with Rental Agreement",
          description:
            "My landlord is attempting to change the terms of our rental agreement without proper notice.",
          image: user10,
        },
      },
    ],
  },
  {
    id: 4,
    name: "David Brown",
    profileImage: user4,
    title: "Disagreement with Business Partner",
    description:
      "A conflict has arisen over the profit-sharing terms in our business partnership.",
    image: null,
    suggestions: [
      {
        id: 401,
        answer: "Revisit the partnership agreement with legal counsel.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 4,
          title: "Disagreement with Business Partner",
          description:
            "A conflict has arisen over the profit-sharing terms in our business partnership.",
          image: null,
        },
      },
      {
        id: 402,
        answer: "Consider mediation to help resolve the differences.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 4,
          title: "Disagreement with Business Partner",
          description:
            "A conflict has arisen over the profit-sharing terms in our business partnership.",
          image: null,
        },
      },
    ],
  },
  {
    id: 5,
    name: "Emma Davis",
    profileImage: user5,
    title: "Unfair Employment Practices",
    description:
      "I believe I am being treated unfairly at work with regards to salary and promotion opportunities.",
    image: user11,
    suggestions: [
      {
        id: 501,
        answer: "Document the issues and consult an employment lawyer.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 5,
          title: "Unfair Employment Practices",
          description:
            "I believe I am being treated unfairly at work with regards to salary and promotion opportunities.",
          image: user11,
        },
      },
      {
        id: 502,
        answer: "Review your employment contract and company policies.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 5,
          title: "Unfair Employment Practices",
          description:
            "I believe I am being treated unfairly at work with regards to salary and promotion opportunities.",
          image: user11,
        },
      },
    ],
  },
  {
    id: 6,
    name: "Frank Miller",
    profileImage: null,
    title: "Medical Negligence Claim",
    description:
      "I suspect that a medical error has resulted in prolonged illness, and I'm not sure of my legal rights.",
    image: user12,
    suggestions: [
      {
        id: 601,
        answer:
          "Gather all medical records and consult a specialist in medical law.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 6,
          title: "Medical Negligence Claim",
          description:
            "I suspect that a medical error has resulted in prolonged illness, and I'm not sure of my legal rights.",
          image: user12,
        },
      },
      {
        id: 602,
        answer:
          "Consider filing a formal complaint if negligence is confirmed.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 6,
          title: "Medical Negligence Claim",
          description:
            "I suspect that a medical error has resulted in prolonged illness, and I'm not sure of my legal rights.",
          image: user12,
        },
      },
    ],
  },
  {
    id: 7,
    name: "Grace Wilson",
    profileImage: user7,
    title: "Dispute over Inheritance",
    description:
      "Family members are contesting the distribution of assets as outlined in the will.",
    image: user13,
    suggestions: [
      {
        id: 701,
        answer:
          "Review the will and consult a lawyer experienced in inheritance law.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 7,
          title: "Dispute over Inheritance",
          description:
            "Family members are contesting the distribution of assets as outlined in the will.",
          image: user13,
        },
      },
      {
        id: 702,
        answer:
          "Explore mediation to settle the dispute without lengthy litigation.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 7,
          title: "Dispute over Inheritance",
          description:
            "Family members are contesting the distribution of assets as outlined in the will.",
          image: user13,
        },
      },
    ],
  },
  {
    id: 8,
    name: "Henry Taylor",
    profileImage: null,
    title: "Consumer Rights Violation",
    description:
      "I purchased a product that does not work as advertised and the seller refuses to provide a refund.",
    image: null,
    suggestions: [
      {
        id: 801,
        answer:
          "Gather evidence of the faulty product and contact a consumer rights advocate.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 8,
          title: "Consumer Rights Violation",
          description:
            "I purchased a product that does not work as advertised and the seller refuses to provide a refund.",
          image: null,
        },
      },
      {
        id: 802,
        answer: "File a complaint with the consumer protection agency.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 8,
          title: "Consumer Rights Violation",
          description:
            "I purchased a product that does not work as advertised and the seller refuses to provide a refund.",
          image: null,
        },
      },
    ],
  },
  {
    id: 9,
    name: "Isabella Anderson",
    profileImage: user9,
    title: "Intellectual Property Issue",
    description:
      "My original work has been copied without permission by another party.",
    image: user14,
    suggestions: [
      {
        id: 901,
        answer:
          "Document the infringement and consult an intellectual property lawyer.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 9,
          title: "Intellectual Property Issue",
          description:
            "My original work has been copied without permission by another party.",
          image: user14,
        },
      },
      {
        id: 902,
        answer: "Consider sending a cease and desist letter.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 9,
          title: "Intellectual Property Issue",
          description:
            "My original work has been copied without permission by another party.",
          image: user14,
        },
      },
    ],
  },
  {
    id: 10,
    name: "Jack Thomas",
    profileImage: user10,
    title: "Online Defamation Case",
    description:
      "False statements about me are being spread online, affecting my reputation.",
    image: user15,
    suggestions: [
      {
        id: 1001,
        answer: "Collect screenshots and other evidence of the defamation.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 10,
          title: "Online Defamation Case",
          description:
            "False statements about me are being spread online, affecting my reputation.",
          image: user15,
        },
      },
      {
        id: 1002,
        answer:
          "Consult with a lawyer to discuss your options for a defamation lawsuit.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 10,
          title: "Online Defamation Case",
          description:
            "False statements about me are being spread online, affecting my reputation.",
          image: user15,
        },
      },
    ],
  },
  {
    id: 11,
    name: "Karen Lee",
    profileImage: user11,
    title: "Dispute Over Service Delivery",
    description:
      "I paid for a service that was not delivered as promised and I don't know how to proceed.",
    image: null,
    suggestions: [
      {
        id: 1101,
        answer: "Review the service contract and document the discrepancies.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 11,
          title: "Dispute Over Service Delivery",
          description:
            "I paid for a service that was not delivered as promised and I don't know how to proceed.",
          image: null,
        },
      },
      {
        id: 1102,
        answer:
          "Contact a legal expert to discuss your rights and possible remedies.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 11,
          title: "Dispute Over Service Delivery",
          description:
            "I paid for a service that was not delivered as promised and I don't know how to proceed.",
          image: null,
        },
      },
    ],
  },
  {
    id: 12,
    name: "Leo Harris",
    profileImage: null,
    title: "Land Boundary Dispute",
    description:
      "There is confusion over the exact boundaries of my land after recent changes in the area.",
    image: user6,
    suggestions: [
      {
        id: 1201,
        answer: "Hire a professional surveyor to clearly mark the boundaries.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 12,
          title: "Land Boundary Dispute",
          description:
            "There is confusion over the exact boundaries of my land after recent changes in the area.",
          image: user6,
        },
      },
      {
        id: 1202,
        answer:
          "Consult with a property lawyer to understand your legal options.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 12,
          title: "Land Boundary Dispute",
          description:
            "There is confusion over the exact boundaries of my land after recent changes in the area.",
          image: user6,
        },
      },
    ],
  },
  {
    id: 13,
    name: "Mia Clark",
    profileImage: user13,
    title: "Unauthorized Use of Personal Data",
    description:
      "I discovered that my personal information is being used without my consent by a third party.",
    image: user5,
    suggestions: [
      {
        id: 1301,
        answer: "Contact a legal expert specialized in data privacy laws.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 13,
          title: "Unauthorized Use of Personal Data",
          description:
            "I discovered that my personal information is being used without my consent by a third party.",
          image: user5,
        },
      },
      {
        id: 1302,
        answer: "File a complaint with the relevant data protection authority.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 13,
          title: "Unauthorized Use of Personal Data",
          description:
            "I discovered that my personal information is being used without my consent by a third party.",
          image: user5,
        },
      },
    ],
  },
  {
    id: 14,
    name: "Noah Martinez",
    profileImage: user14,
    title: "Breach of Contract by Supplier",
    description:
      "A supplier has failed to meet the delivery terms as stated in our contract.",
    image: user16,
    suggestions: [
      {
        id: 1401,
        answer: "Review the contract and document any breaches.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 14,
          title: "Breach of Contract by Supplier",
          description:
            "A supplier has failed to meet the delivery terms as stated in our contract.",
          image: user16,
        },
      },
      {
        id: 1402,
        answer:
          "Seek legal advice on how to enforce the contract or claim damages.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 14,
          title: "Breach of Contract by Supplier",
          description:
            "A supplier has failed to meet the delivery terms as stated in our contract.",
          image: user16,
        },
      },
    ],
  },
  {
    id: 15,
    name: "Olivia Robinson",
    profileImage: user15,
    title: "Unlawful Dismissal Case",
    description:
      "I believe I was dismissed from my job without proper cause or following legal procedures.",
    image: user17,
    suggestions: [
      {
        id: 1501,
        answer: "Collect all relevant documentation regarding your dismissal.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 15,
          title: "Unlawful Dismissal Case",
          description:
            "I believe I was dismissed from my job without proper cause or following legal procedures.",
          image: user17,
        },
      },
      {
        id: 1502,
        answer:
          "Consult an employment lawyer to evaluate your case and potential claims.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 15,
          title: "Unlawful Dismissal Case",
          description:
            "I believe I was dismissed from my job without proper cause or following legal procedures.",
          image: user17,
        },
      },
    ],
  },
  {
    id: 16,
    name: "Paul Walker",
    profileImage: null,
    title: "Dispute with Utility Provider",
    description:
      "There is an ongoing dispute with my utility provider regarding unexpected charges.",
    image: user18,
    suggestions: [
      {
        id: 1601,
        answer:
          "Review your contract with the utility provider for any inconsistencies.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 16,
          title: "Dispute with Utility Provider",
          description:
            "There is an ongoing dispute with my utility provider regarding unexpected charges.",
          image: user18,
        },
      },
      {
        id: 1602,
        answer: "Consider contacting a legal expert to help mediate the issue.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 16,
          title: "Dispute with Utility Provider",
          description:
            "There is an ongoing dispute with my utility provider regarding unexpected charges.",
          image: user18,
        },
      },
    ],
  },
  {
    id: 17,
    name: "Quinn Young",
    profileImage: null,
    title: "Disagreement over Loan Terms",
    description:
      "The terms of my loan agreement seem to have changed unexpectedly, causing financial strain.",
    image: user19,
    suggestions: [
      {
        id: 1701,
        answer:
          "Review your original loan agreement and any communications from the lender.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 17,
          title: "Disagreement over Loan Terms",
          description:
            "The terms of my loan agreement seem to have changed unexpectedly, causing financial strain.",
          image: user19,
        },
      },
      {
        id: 1702,
        answer:
          "Consult with a financial or legal advisor to explore your options.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 17,
          title: "Disagreement over Loan Terms",
          description:
            "The terms of my loan agreement seem to have changed unexpectedly, causing financial strain.",
          image: user19,
        },
      },
    ],
  },
  {
    id: 18,
    name: "Rachel King",
    profileImage: user3,
    title: "Insurance Claim Dispute",
    description:
      "My insurance claim was denied, and I believe the decision was unjust.",
    image: null,
    suggestions: [
      {
        id: 1801,
        answer:
          "Review the details of your policy and the reasons for the claim denial.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 18,
          title: "Insurance Claim Dispute",
          description:
            "My insurance claim was denied, and I believe the decision was unjust.",
          image: null,
        },
      },
      {
        id: 1802,
        answer:
          "Seek advice from a legal expert to determine if you have grounds to dispute the decision.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 18,
          title: "Insurance Claim Dispute",
          description:
            "My insurance claim was denied, and I believe the decision was unjust.",
          image: null,
        },
      },
    ],
  },
  {
    id: 19,
    name: "Samuel Wright",
    profileImage: user5,
    title: "Family Law Issue: Custody Dispute",
    description:
      "I am currently involved in a custody dispute and need guidance on my legal rights.",
    image: user20,
    suggestions: [
      {
        id: 1901,
        answer:
          "Document all relevant interactions and seek family law counsel.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 19,
          title: "Family Law Issue: Custody Dispute",
          description:
            "I am currently involved in a custody dispute and need guidance on my legal rights.",
          image: user20,
        },
      },
      {
        id: 1902,
        answer:
          "Consider mediation to help reach an amicable custody arrangement.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 19,
          title: "Family Law Issue: Custody Dispute",
          description:
            "I am currently involved in a custody dispute and need guidance on my legal rights.",
          image: user20,
        },
      },
    ],
  },
  {
    id: 20,
    name: "Tina Scott",
    profileImage: null,
    title: "Dispute Over Tax Liability",
    description:
      "I received a notice from the tax authorities that seems to be based on incorrect information.",
    image: user21,
    suggestions: [
      {
        id: 2001,
        answer:
          "Gather your financial records and consult with a tax attorney.",
        image: null,
        lawyer: {
          id: 1,
          name: "Lawyer John",
          email: "john.lawyer@example.com",
          image: null,
          matricule: "LAW123",
        },
        situation: {
          id: 20,
          title: "Dispute Over Tax Liability",
          description:
            "I received a notice from the tax authorities that seems to be based on incorrect information.",
          image: user21,
        },
      },
      {
        id: 2002,
        answer:
          "Request a review or clarification from the tax office to resolve the issue.",
        image: null,
        lawyer: {
          id: 2,
          name: "Lawyer Jane",
          email: "jane.lawyer@example.com",
          image: null,
          matricule: "LAW456",
        },
        situation: {
          id: 20,
          title: "Dispute Over Tax Liability",
          description:
            "I received a notice from the tax authorities that seems to be based on incorrect information.",
          image: user21,
        },
      },
    ],
  },
];


//other frequently asked questions asked my other users:
// {
  //   icon: <Tag />, // Visual Icon: Tag icon representing cost or pricing.
  //   text: "Is Legal First Aid free to use?",
  //   description:
  //     "Access to our basic resources and legal information is completely free. Some premium features, like personalized consultations with legal experts or advanced interactive tools, may require a small fee to support the platform's development.",
  // },
  // {
  //   icon: <Lock />, // Visual Icon: Lock icon for security and privacy.
  //   text: "How does Legal First Aid ensure my privacy and data security?",
  //   description:
  //     "Your privacy is our top priority. We use robust security measures, including encryption and secure servers, to protect your personal information and ensure full compliance with relevant data protection regulations.",
  // },
  // {
  //   icon: <FileText />, // Visual Icon: Document icon for legal documents.
  //   text: "Can Legal First Aid help me understand legal documents I've received?",
  //   description:
  //     "Yes! We provide guides to help you interpret common legal documents. For more complex or specific documents, our legal experts are available to offer personalized assistance and clarify any confusing terms or procedures.",
  // },
  // {
  //   icon: <Star />, // Visual Icon: Star icon to highlight unique features.
  //   text: "How is Legal First Aid different from other legal resources?",
  //   description:
  //     "Our platform is focused on making legal information accessible and understandable for everyone. We break down complex legal concepts into plain language and offer practical tools, unlike traditional resources that are often filled with legal jargon.",
  // },
  // {
  //   icon: <Smartphone />, // Visual Icon: Smartphone icon for mobile accessibility.
  //   text: "Can I access Legal First Aid on my mobile device?",
  //   description:
  //     "Absolutely! Our platform is fully optimized for both desktop and mobile use, allowing you to access legal information anytime, anywhere on your smartphone or tablet.",
  // },
  // {
  //   icon: <Layers />, // Visual Icon: Layers icon representing comprehensive content.
  //   text: "Does the app cover laws beyond the Cameroon Penal Code?",
  //   description:
  //     "Yes, we cover a broad range of legal topics including civil rights, labor laws, family law, property rights, and more to ensure you have comprehensive resources addressing various legal needs.",
  // },
  // {
  //   icon: <Bell />, // Visual Icon: Bell icon for notifications and updates.
  //   text: "How can I stay updated on new legal developments or changes in the law?",
  //   description:
  //     "By subscribing to our newsletter and enabling notifications, you'll receive timely updates on the latest legal news, changes in legislation, and new resources added to our platform.",
  // },
  // {
  //   icon: <Globe />, // Visual Icon: Globe icon for language and regional coverage.
  //   text: "What languages is Legal First Aid available in?",
  //   description:
  //     "We currently offer content in English and French. We are continuously working to include more local languages to ensure our platform is accessible to all Cameroonians.",
  // },
  // {
  //   icon: <PhoneCall />, // Visual Icon: Phone call icon for direct contact.
  //   text: "How do I connect with a legal expert through the app?",
  //   description:
  //     "Simply navigate to the 'Expert Connect' section, browse through our list of verified legal professionals, and select one that fits your needs. You can view their expertise, availability, and book an appointment directly through the app.",
  // },
  // {
  //   icon: <MessageCircle />, // Visual Icon: Message circle icon for feedback.
  //   text: "Can I suggest topics or features I'd like to see on Legal First Aid?",
  //   description:
  //     "Definitely! We value your input. If there's a topic you'd like us to cover or a feature you’d find helpful, please share your suggestions through the feedback section. Your input helps us continuously improve the platform.",
  // },
  // {
  //   icon: <Users />, // Visual Icon: Users icon representing community engagement.
  //   text: "How does Legal First Aid support community engagement?",
  //   description:
  //     "We offer community forums where users can ask questions, share experiences, and learn from one another. Our supportive community network helps build a collective understanding of legal rights and advocacy.",
  // },
  // {
  //   icon: <CircleAlert />, // Visual Icon: Alert circle icon for reporting issues.
  //   text: "What should I do if I notice incorrect information on the app?",
  //   description:
  //     "If you spot any errors, please use our 'Report an Issue' feature to inform us immediately. We will investigate and correct any inaccuracies promptly to maintain the integrity and accuracy of our content.",
  // },