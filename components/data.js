import {
  FaceSmileIcon,
  BuildingLibraryIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  BanknotesIcon,
  SunIcon,
  ScaleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/tbilisi-image.png";
import benefitTwoImg from "../public/img/benefits2.jpeg";


const benefitOne = {
  desc: "",
  image: benefitOneImg,
  bullets: [
   {
      title: "World Class Universities",
      desc: "Experience academic excellence at prestigious universities in Georgia. Unlock endless opportunities for growth.",
      icon:<BuildingLibraryIcon/> ,
    }, 
    {
      title: "NO IELTS/TOEFL ",
      desc: "No language exams needed. Study in Georgia with ease, explore diverse courses taught in English.",
      icon: <AcademicCapIcon />,
    }, 
    {
      title: "Affordable Tuition and Cost of Living",
      desc: "Affordable education and low living costs in Georgia. Quality education without breaking the bank.",
      icon: <BanknotesIcon/>,
    },
    {
      title: "Safety",
      desc: "Enjoy a safe and welcoming environment in Georgia. Focus on your studies with peace of mind.",
      icon: <ScaleIcon />,
    },
    
  ],
};

const benefitTwo = {
  title: "What we offer you",
  desc: "Here at EasyAD Consult, we specialize in securing university admissions abroad in Georgia, we help students smoothly transition to universities in the country.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Personalized Admissions Assistance",
      desc: "Our experienced team provides guidance on university selection, application procedures, and documentation to increase your chances of admission.",
      icon:<AdjustmentsHorizontalIcon /> ,
    },
    {
      title: "Course and University Selection",
      desc: "We help you choose the right course and university based on your interests, career goals, and educational background.",
      icon: <AdjustmentsHorizontalIcon /> ,
    },
    {
      title: "Visa Support",
      desc: "Our team assists you with visa applications and immigration procedures, ensuring a smooth and hassle-free process.",
      icon: <UserIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
