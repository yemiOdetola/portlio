import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
  PiVoicemailBold,
} from "react-icons/pi";

export const timeline = [
  {
    startDate: "April 2022",
    endDate: null,
    position: "Senior frontend engineer",
    company: "Sety.io",
    url: "https://sety.io",
    logo: "/images/sety.png",
    tools: [
      "Typescript",
      "React",
      "Next js",
      "React native",
      "HTML5",
      "SCSS",
      "Figma",
    ],
    summary:
      "Led the development of new features for the Sety v2 apps. Mentored interns, drove adoption of modern practices, and championed code quality standards.",
  },

  {
    startDate: "May 2021",
    endDate: "Mar 2023",
    position: "Frontend Engineer",
    company: "Netzstrategen GmbH",
    url: "https://netzstrategen.com/",
    tools: [
      "Javascript",
      "Vuejs",
      "Vuex",
      "Vant 3",
      "SCSS",
      "Google Firestore",
    ],
    logo: "/images/netz.svg",
    summary:
      "Enhanced the daily nutrient intake modules in Loprogramme PWA, boosting tracking functionalities by 45% and slashing protein calculation time from 5 to 2.5s.Developed new features integrating with Google Cloud Firestore, optimized UI/performance, designed a custom graph for protein intake history, and participated in code reviews.",
  },
  {
    startDate: "Oct 2021",
    endDate: "Sept 2023",
    position: "Frontend engineer",
    company: "Quze studio",
    url: "https://sety.io",
    logo: "/images/netz.svg",
    tools: [
      "Reactjs",
      "SCSS",
      "Chrome Extension",
      "Tailwindcss",
      "HTML5",
      "Chakra UI",
      "Figma",
    ],
    summary:
      "Developed a browser extension, boosting backpack feature utilization by 150%, allowing users to save, quote, and manage resources. Made significant contributions to migrating the design system to TailwindCSS. Developed a crawler to extract metadata from users url resources.",
  },
  {
    startDate: "Oct 2021",
    endDate: "Sept 2023",
    position: "Fullstack developer",
    company: "Stackonly",
    url: "https://stackonly.ng",
    tools: [
      "Typescript",
      "Angular",
      "Reactjs",
      "React native",
      "Nodejs",
      "A11y",
    ],
    logo: "/images/sety.png",
    summary:
      "Contributed significantly to Strada PMS with real-time data syncing, led frontend for projects like the SecuredForMe admin portal with robust analytics, Parablues and CDASH while including optimizing performance and modernizing legacy code.",
  },

  {
    startDate: "Jan 2019",
    endDate: "June 2021",
    position: "Web developer",
    company: "The Roothub",
    url: "https://theroothub.com",
    tools: [
      "Web design",
      "Wordpress",
      "Angular",
      "Ionic mobile",
      "Nodejs",
      "A11y",
    ],
    logo: "/images/roothub.png",
    summary:
      "Technical instructor for TECH101, training over 80 students on web development and spearheaded redesign of company website using mobile-first responsive design. Developed the high-profile Akwa Ibom@30years events website.",
  },
];

export const connect = [
  {
    social: "LinkedIn",
    url: "linkedin.com/in/yemiodetola",
    icon: PiLinkedinLogoBold,
  },
  {
    social: "Github",
    url: "github.com/yemiodetola",
    icon: PiGithubLogoBold,
  },
  {
    social: "Email",
    url: "yemiotola@gmail.com",
    icon: PiVoicemailBold,
  },
  {
    social: "Twitter",
    url: "twitter.com/yemiodetola",
    icon: PiTwitterLogoBold,
  },
];

export const menuitems = [
  {
    name: "Home",
    path: "/",
    delay: "150ms",
  },
  {
    name: "About",
    path: "/about",
    delay: "175ms",
  },
  {
    name: "Projects",
    path: "/projects",
    delay: "200ms",
  },
  {
    name: "Blog",
    path: "/blog",
    delay: "225ms",
  },
];

export const projects = [
  {
    title: "Frontend",
    type: "frontend",
    works: [
      {
        title: "Sety v2",
        description:
          "Sety is delivering on-demand safety and security for businesses, individuals and families. ",
        tech: ["Typescript", "React", "Tailwindcss", "Framer motion"],
        repo: "",
        image: "/images/sety.png",
        gif: "/images/roothub.gif",
        url: "http://sety-landing.surge.sh/",
      },
      {
        title: "The roothub",
        description:
          " A coworking space, part innovation lab, business incubator, and part community for professionals and creatives",
        tech: ["Typescript", "Angular", "SCSS", "Rxjs", "UI design"],
        repo: "",
        image: "/images/roothub.png",
        gif: "/images/roothub.gif",
        url: "https://www.wearetheroothub.com/",
      },
      {
        title: "Mojec meters",
        description:
          "The meter allocation and ordering process involves assigning meter numbers to households upon registration, enabling their use with IKEDC, IBEDC, EDC...",
        tech: ["Typescript", "Angular", "SCSS", "Rxjs", "UI design"],
        repo: "",
        image: "/images/mojec.svg",
        gif: "/images/roothub.gif",
        url: "https://mojecmeters.com/meter",
      },
      {
        title: "Finovo",
        description:
          "Finovo is a digital platform providing financial, lifestyle and business services wherever you are in the World.",
        tech: ["Javascript", "JQuery", "HTML5 & Css", "A11y"],
        repo: "",
        image: "/images/finovo.webp",
        gif: "/images/finovo-web.gif",
        url: "https://finovo.ng",
      },
      {
        title: "Resume Builder",
        description:
          "No description, website, or topics provided. No description, website, or topics provided.",
        tech: [
          "Typescript",
          "Nextjs(React)",
          "Zustand",
          "Tailwindcss",
          "HTML5",
          "A11y",
        ],
        repo: "https://github.com/yemiOdetola/craftcv",
        image: "/images/craftcv.svg",
        gif: "/images/craftcv.gif",
        url: "https://craftcv.vercel.app",
      },
      {
        title: "Cudo",
        description:
          "Get quick and confidential consultation with top Medical Doctors, Physiotherapists and Pharmacists across Nigeria using our unique on-demand app.",
        tech: ["Typescript", "React", "Sass", "HTML5 & CSS3", "A11y"],
        repo: "",
        image: "/images/cudo.png",
        gif: "/images/roothub.gif",
        url: "https://cudoapp.com/",
      },
    ],
  },
  {
    title: "Mobile",
    type: "mobile",
    works: [
      {
        title: "Rapidpay",
        description:
          "Rapidpay is a cryptocurrency exchange and lending platform that makes it easy for you to buy, sell, store and take a loan with Bitcoin, Ethereum and USDT.",
        tech: ["Typescript", "React Native", "Styled Components", "Redux"],
        repo: "",
        image: "/images/rapidpay.webp",
        gif: "/images/rapidpay.gif",
        url: "http://sety-landing.surge.sh/",
      },
      {
        title: "Sety",
        description: "Sety users mobile application",
        tech: [
          "Typescript",
          "React Native",
          "API",
          "Firebase",
          "Redux toolkit",
        ],
        repo: "",
        image: "/images/sety.png",
        gif: "/images/sety.gif",
        url: "https://play.google.com/store/apps/details?id=com.sety",
      },
      {
        title: "Finovo",
        description:
          "Finovo is a digital platform providing financial, lifestyle and business services wherever you are in the World. We offer you More of everything now.",
        tech: ["Typescript", "React Native", "Styled Components", "Redux"],
        repo: "",
        image: "/images/finovo.webp",
        gif: "/images/finovo.gif",
        url: "https://play.google.com/store/apps/details?id=com.finovo&hl=en_US",
      },
      {
        title: "Clipp",
        description:
          "Clipp allows you to create a virtual bank account in Dollars, Pounds, Euro and Naira. You can send out your account details to receive money in all the currencies available.",
        tech: ["Typescript", "React Native", "Styled Components", "Redux"],
        repo: "",
        image: "/images/clipp.webp",
        gif: "/images/clipp.gif",
        url: "https://play.google.com/store/apps/details?id=com.clipp.africa&hl=en_US",
      },
    ],
  },
  {
    title: "Others",
    type: "misc",
    works: [
      {
        title: "Quze Backpack - Browser Extension",
        description:
          "No description, website, or topics provided. No description, website, or topics provided.",
        tech: ["Javascript", "Manifest", "HTML5 & css", "Web extension"],
        repo: "",
        image: "/images/quze.svg",
        url: "https://chromewebstore.google.com/detail/quze-backpack/kadiombanichkkgjcalkjiondjbngmel",
      },
      {
        title: "Mastermind game",
        description:
          "You'll be provided with 6 colors to choose from for your guess, which a secret color code is created from. After submitting your guess in each instance, a color in the right position, gets you a green point.",
        tech: ["React", "Sass", "CSS3 Animation"],
        repo: "",
        image: "/images/mmind.svg",
        url: "https://mmind.surge.sh/",
      },
    ],
  },
];

export type ProjectTypes = "misc" | "mobile" | "frontend";
