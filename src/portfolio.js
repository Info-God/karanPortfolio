/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Karunagaran Velmourougane",
  title: "Hi all, I'm Karunagaran",
  subTitle: emoji(
    "Full-Stack Software Engineer specializing in backend systems, databases, Laravel, Spring Boot, React, and AI automation. I build scalable APIs, SaaS products, and production-ready applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1R0KMW0CIGI0oz9TBpvx2w7n6lWsymbpR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Info-God/",
  linkedin: "https://www.linkedin.com/in/karunagaranvelmourougane/",
  gmail: "karanvel.2005@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@karanvel.2005",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full-Stack Engineer passionate about backend systems, databases, AI automation, and production software",
  skills: [
    emoji("⚡ Design and develop scalable backend architectures with Java, Spring Boot, PHP, Laravel, and FastAPI"),
    emoji("⚡ Build REST APIs and full-stack SaaS products with React, Next.js, Vue.js, and Node.js"),
    emoji("⚡ Engineer reliable data systems with MySQL, PostgreSQL, Redis, indexing, and SQL optimization"),
    emoji("⚡ Build agentic AI, RAG, tool-calling, and workflow automation systems"),
    emoji("⚡ Deploy and manage production applications with AWS, Docker, Linux, Nginx, and VPS infrastructure"),
    emoji("⚡ Lead client projects end-to-end, from architecture and development through deployment and support")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "MYSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Codeigniter",
      fontAwesomeClassname: "https://codeigniter.com/assets/images/codeigniter4logo.png"
    }
    ,
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fab fa-nginx"
    }
    ,
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Cloudflare",
      fontAwesomeClassname: "fab fa-cloudflare"
    },
 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajiv Gandhi College of Engineering and Technology",
      logo: require("./assets/images/rgcet1.jpeg"), // Replace with your actual logo path
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "September 2024 – Present",
      desc: "Currently pursuing B.Tech in Information Technology with a focus on backend systems, web technologies, and software engineering.",
      descBullets: [
        "Core subjects include DSA, DBMS, Web Programming, and Java",
        "Involved in real-world projects alongside academics"
      ]
    },
    {
      schoolName: "Motilal Nehru Government Polytechnic College",
      logo: require("./assets/images/mngpc1.jpeg"), // Replace with your actual logo path
      subHeader: "Diploma in Information Technology",
      duration: "Completed in May 2023",
      desc: "Graduated with hands-on experience in building web applications and software fundamentals.",
      descBullets: [
        "Developed early full-stack projects using PHP and MySQL",
        "Built a strong foundation in problem-solving and system design"
      ]
    }
  ]

};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Full Stack Developer",
      company: "FDRP Journals",
      companylogo: require("./assets/images/freelancer.webp"), // Replace with actual logo or placeholder
      date: "September 2024 – Present",
      desc: "Manage production journal platforms and client delivery across architecture, development, deployment, and support.",
      descBullets: [
        "Managed 3 production projects end-to-end, from client communication through deployment and support",
        "Built full-stack SaaS products with Laravel, React, Vue.js, and Next.js",
        "Reduced AWS infrastructure costs by approximately 80% through VPS migration"
      ]
    },
    {
      role: "Backend Developer",
      company: "Senchola Technology Solutions",
      companylogo: require("./assets/images/senchola.png"), // Replace with your company logo
      date: "September 2023 – August 2024",
      desc: "Delivered backend and full-stack systems for client and enterprise projects, with a focus on APIs, databases, and production operations.",
      descBullets: [
        "Delivered 3+ client and enterprise projects",
        "Improved SQL response time by approximately 20% on an RBI enterprise project",
        "Trained 3 batches of 20+ students in backend development and SQL optimization"
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND COMPANIES WHERE I HELPED BUILD SCALABLE TECH SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/marie-erp.jpeg"), // Replace with actual Marie-ERP logo path
      projectName: "Marie-ERP",
      projectDesc:
        "Built and led the backend architecture for a large-scale F&B ERP platform. Managed a team of 5 developers and handled deployment to production.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.gomarie.com/"
        }
      ]
    },
    {
      image: require("./assets/images/rbi.jpeg"), // Use RBI or HRMS-relevant logo
      projectName: "RBI HRMS Modernization",
      projectDesc:
        "Migrated a 1 TB+ enterprise HRMS from PHP 5 to PHP 8 while preserving production data. Optimized 15+ critical SQL queries with views, indexing, and query restructuring, reducing execution time by approximately 20%.",
      footerLink: [
        {
          name: "Project Summary",
          url: "https://www.rbi.org.in/"
        }
      ]
    },
    {
      image: require("./assets/images/placeholder.png"), // Replace with your actual logo or a placeholder
      projectName: "Make My Scholar",
      projectDesc:
        "A social network connecting publishers, authors, and researchers. Built social feeds, follows, messaging, and scholarly collaboration features with Laravel, React, Redis queues, workers, Pusher, and WebSockets.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://makemyscholarfrontend.fdrpjournals.org/"
        }
      ]
    },
{
  image: require("./assets/images/fdrp.png"), // Replace with the actual logo or use a placeholder
  projectName: "FDRP Journals",
  projectDesc:
    "Production journal ecosystem covering editorial workflow, peer review, publishing, and public journal websites. Built and maintained Laravel backends, React and Vue frontends, VPS infrastructure, and MySQL databases across a portfolio of 8 journals.",
  footerLink: [
    {
      name: "Visit Website",
      url: "https://fdrpjournals.org/"
    },
        {
      name: "IJSREAT Journal",
      url: "https://www.ijsreat.com/"
    },
            {
      name: "IJRTMR Journal",
              url: "https://ijrtmr.com/"
    }
    // You can add more URLs for other journal sites if needed
  ]
}



  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hackathon Winner",
      subtitle:
        "Won an 8-hour continuous hackathon focused on real-time problem solving. Demonstrated quick thinking and team collaboration under pressure.",
      image: require("./assets/images/hackathon.png"), // You can use a placeholder image here
      imageAlt: "Hackathon Logo",
      footerLink: [] // Add certificate or event link if available
    },
    {
      title: "Trainer at Senchola University",
      subtitle:
        "Trained 3 batches of students in backend development while working full-time, helping them gain hands-on experience in web technologies.",
      image: require("./assets/images/sencholaUniversity.png"), // Use a placeholder or relevant image
      imageAlt: "Trainer Logo",
      footerLink: [] // Add link to university, certificate, or testimonial if available
    }
  ]
  ,
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1R0KMW0CIGI0oz9TBpvx2w7n6lWsymbpR/view?usp=sharing",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6383281461",
  email_address: "karanvel.2005@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
