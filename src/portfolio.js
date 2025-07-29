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
    "Full Stack Developer specializing in PHP (Laravel, CodeIgniter), JavaScript & React. Experienced in deploying on cloud servers and leading frontend projects from concept to launch. I build scalable applications and robust APIs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ygR7hcKEf_9H-Cj2QUe5kbOzXrj_HRim/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "Full Stack Developer passionate about building robust backend systems and deploying real-world applications",
  skills: [
    emoji("⚡ Design and develop scalable backend architectures using PHP (Laravel, CodeIgniter) and MySQL"),
    emoji("⚡ Build and maintain RESTful APIs for web dashboards, admin panels, and portals"),
    emoji("⚡ Lead small dev teams, manage full project lifecycles, and ensure on-time delivery"),
    emoji("⚡ Optimize database performance using stored procedures, views, and query optimization techniques"),
    emoji("⚡ Deploy and manage applications on Linux servers with Nginx, ensuring uptime and performance"),
    emoji("⚡ Integrate third-party services like AWS, DigitalOcean, Cloudflare, and SMTP/email APIs")
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
    }
    ,
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
      company: "Self-Employed",
      companylogo: require("./assets/images/freelancer.webp"), // Replace with actual logo or placeholder
      date: "September 2024 – Present",
      desc: "Working directly with clients to build, deploy, and maintain full-stack web applications. Leading small development teams and handling the entire software development lifecycle.",
      descBullets: [
        "Planned and structured projects, developed full-stack applications from scratch",
        "Managed a small team, assigned tasks, and ensured timely delivery",
        "Handled server deployments and performance monitoring for smooth operation"
      ]
    },
    {
      role: "Backend Developer",
      company: "Senchola Technology Solutions",
      companylogo: require("./assets/images/senchola.png"), // Replace with your company logo
      date: "September 2023 – August 2024",
      desc: "Worked on multiple full-stack projects, primarily focusing on backend development using Laravel and CodeIgniter. Maintained servers and ensured seamless live deployments.",
      descBullets: [
        "Completed 5+ full projects from planning to deployment",
        "Built scalable REST APIs and admin dashboards",
        "Handled Linux server setup, domain configuration, and production deployment"
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
        "Contributed to modernizing the HRMS system for an RBI paper printing unit. Focused on salary, tax, and leave modules using PHP and MySQL.",
      footerLink: [
        {
          name: "Project Summary",
          url: "#" // Replace with a PDF/project blog link or remove if not public
        }
      ]
    },
    {
      image: require("./assets/images/placeholder.png"), // Replace with your actual logo or a placeholder
      projectName: "Make My Scholar",
      projectDesc:
        "A social media platform for students, researchers, and scholars to publish and share academic work — similar to Academia.edu. Built features for profiles, feeds, publication uploads, and interest-based recommendations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://makemyscholar.com/" // Replace with actual URL when live
        }
      ]
    },
{
  image: require("./assets/images/fdrp.png"), // Replace with the actual logo or use a placeholder
  projectName: "FDRP Journals",
  projectDesc:
    "Ongoing freelance work for FDRP Journals, managing and maintaining multiple journal websites including ijsreat.com, ijrtmr.com, theijire.com, and indjcst.com. Responsibilities include backend development using Laravel, frontend development using Vue and React, server-side management on VPS (Contabo), and MySQL database administration.",
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
      url: "https://www.ijsreat.com/"
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

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
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

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
