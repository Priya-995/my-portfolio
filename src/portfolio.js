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
  username: "Priya Singh",
  title: "Hi all, I'm Priya",
  subTitle: emoji(
    "A passionate Software engineer specializing in full-stack development with the MERN stack. I architect scalable platforms, optimize performance, and solve complex technical challenges."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16MTEkcmcyiYmf575-CPV17VqgAPlpKcX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priya-995",
  linkedin: "https://www.linkedin.com/in/priya-singh-bb4a09303/",
  gmail: "priya9899nk@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@priya9899nk",
  stackoverflow: "https://stackoverflow.com/users/26746090/priya-singh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build production-ready full-stack applications using MERN stack with focus on scalability and performance"
    ),
   emoji("⚡ Design and implement secure RESTful APIs with JWT authentication and session management"),
     emoji(
      "⚡ Solve complex data structure and algorithm problems with 5-star HackerRank proficiency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
     {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ABES Engineering College, Ghaziabad",
      logo: require("./assets/images/abes.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2023 - 2027",
      desc: "Current CGPA: 8.43/10",
      descBullets: [
        "Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming",
        "Focus on full-stack development and problem-solving"
      ]
    },
    {
      schoolName: "Aryavartt Public School",
      logo: require("./assets/images/logo1.png"),
      subHeader: "Higher Secondary Education - CBSE Board",
      duration: "2022",
      desc: "Percentage: 85%",
      descBullets: ["Built strong fundamentals in Mathematics and Computer Science"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Sync and Explore Pvt. Ltd.",
      companylogo: require("./assets/images/syncExploreLogo.png"), // Add company logo
      date: "October 2025 – November 2025",
      desc: "Developed responsive UI components and collaborated on internal platform improvements.",
      descBullets: [
        "Designed responsive UI components with mobile-first approach, improving user experience across devices",
        "Collaborated with cross-functional teams using Git/GitHub for version control and code reviews",
        "Implemented intuitive layouts enhancing overall platform usability"
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCTION-GRADE APPLICATIONS SHOWCASING FULL-STACK EXPERTISE",
  projects: [
    {
      image: require("./assets/images/wanderlustLogo.jpg"), // Add project image
      projectName: "WanderLust - Full Stack Rental Platform",
      projectDesc: "Airbnb-inspired platform with session-based authentication, property CRUD operations, and 10+ RESTful API endpoints. Features MongoDB with efficient indexing and authorization middleware.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Priya-995/wanderlust" // Update with actual link
        },
        {
          name: "Live Demo",
          url: "https://wanderlust-demo.onrender.com" // Update with actual link
        }
      ]
    },
    {
      image: require("./assets/images/stockTradingLogo.png"), // Add project image
      projectName: "Stock Trading Platform (Zerodha-Inspired)",
      projectDesc: "Full-stack trading platform with 3-tier architecture handling buy/sell operations, watchlist management, JWT-based authentication with bcrypt. Features Chart.js visualizations and real-time functionality.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Priya-995/stock-trading" // Update with actual link
        },
        {
          name: "Live Demo",
          url: "https://stock-trading-demo.onrender.com" // Update with actual link
        }
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
    "Certifications and accomplishments demonstrating technical proficiency and commitment to continuous learning",

  achievementsCards: [
    {
      title: "5-Star HackerRank Problem Solver",
      subtitle:
        "Achieved 5-star rating in Java on HackerRank with 200+ problems solved, demonstrating strong DSA proficiency.",
      image: require("./assets/images/op2.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.hackerrank.com/profile/CSC2300320120188"
        }
      ]
    },
    {
      title: "Full Stack Web Development (MERN Stack)",
      subtitle:
        "Completed comprehensive training in building full-stack applications with RESTful APIs, authentication, and database integration from Apna College (2024).",
      image: require("./assets/images/apna-college-social-preview.png"),
      imageAlt: "Apna College Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Pd-KKqN7iJ3BLC6GBPU5WNocnT7thDCO/view?usp=sharing"
        }
      ]
    },

    {
      title: "Data Structures & Algorithms in Java",
      subtitle: "Mastered core DSA concepts including arrays, linked lists, trees, graphs, dynamic programming from Apna College (2024).",
       image: require("./assets/images/apna-college-social-preview.png"),
        imageAlt: "Apna College Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/162JfcrPdZCW-YlF0rmZ56BsaU3jussKT/view?usp=sharing"},
        
      ]
    }
  ],
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

// Talks Section
const talkSection = {
  title: "Community Engagement",
  subtitle: emoji(
    "SHARING KNOWLEDGE THROUGH CONTENT CREATION AND MENTORSHIP 🎓"
  ),
  talks: [
    {
      title: "Codeplay - Tech Education Initiative",
      subtitle: "Educational content on YouTube, Threads, and Instagram",
      slides_url: "https://youtube.com/@CodePlay29?si=bC-igLSff1Xh_IbQ", // Update with actual channel
      event_url: "https://www.instagram.com/codeplay_official?igsh=MWJyajNvOWVidmU5cA==" // Update with actual profile
    }
  ],
  display: true
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
    "Interested in discussing opportunities or collaborating on projects? Let's connect!",
  number: "+91-9953046029",
  email_address: "priya9899nk@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
