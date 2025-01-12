import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";


export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Prince Chaudhary, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "",
  resumeLinkText: "Download Resume",
  resumeLink: "/prince_resume12.pdf",
};

export const PROJECTS = [
  {
    name: "Real-Estate app",
    description: "A comprehensive platform for buying, selling, and renting properties with advanced search and filter options.",
    image: projects1,
    github: "https://github.com/Princeadhrana/Real-estate-app",
    link:"https://real-estate-app-kappa-nine.vercel.app/"
  },
  {
    name: "Food dev app",
    description: "An app to order food from your favorite restaurants with real-time tracking and multiple payment options.",
    image: projects2,
    github: "https://github.com/Princeadhrana/food-dev-app",
    link:"https://food-dev-app-pink.vercel.app/"
    
  },
  {
    name: "Evo-gym Fitness app",
    description: "A comprehensive fitness app offering workout plans, tracking progress, and connecting with personal trainers.",
    image: projects3,
    github: "https://github.com/Princeadhrana/gym-app",
    link:"https://gym-app-gamma-eight.vercel.app/"
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a passionate and enthusiastic frontend developer eager to start my career in web development. With a strong foundation in HTML, CSS, and JavaScript, I builds some user-friendly and visually appealing web applications using React and Typescrit.",
    "I have hands-on experience with modern frameworks like React and have worked on several personal projects to hone my skills. I am a quick learner, always looking to expand my knowledge and stay updated with the latest industry trends. My goal is to contribute to a dynamic team and grow as a professional in the field of frontend development.",
  ],
};

export const CONTACT_CONTENT = {
  headline: "LET'S CONNECT AND CREATE TOGETHER",
  description:
    "I'm a passionate frontend developer eager to collaborate on exciting projects. Whether you have a question, an idea, or just want to say hi, feel free to reach out. Let's build something amazing together.",
  email: "pc74510@gmail.com",
  socialLinks: [
    {
      platform: "X",
      url: "https://x.com/Prince_Adharana",
      ariaLabel: "Follow me on X",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Princeadhrana",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    }
  ],
  footerText: `© ${new Date().getFullYear()} Prince Chaudhary. All rights reserved.`,
};
