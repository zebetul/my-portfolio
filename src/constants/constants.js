export const PROJECTS = [
  {
    name: "Restil",

    description:
      "Online secondhand clothing marketplace for the Romanian market, promoting sustainable shopping.",

    image: "/assets/images/restil.webp",

    siteURL: "https://restil.ro/",

    gitHub: "https://github.com/zebetul/refashion-secondhand-marketplace",

    detailsURL: "/restil",

    stack: [
      "React",
      "Node",
      "Express",
      "PSQL",
      "AWS",
      "Bootstrap",
      "Google 0Auth",
      "Render",
      "Cloudflare",
      "PWA",
    ],

    objective:
      "Design, develop, test, and deploy a full-stack, production-ready web application using the latest industry standards and best practices.",

    backgroundStory: [
      "After completing a JavaScript Udemy course and gaining experience with several JS projects, I felt confident in my JS skills and decided to delve into React.",

      "While seeking a new project to apply my recently acquired React knowledge, I aimed for a challenge that would also have real-life utility. That's when a friend challenged me to create a secondhand clothing marketplace, an idea that aligned perfectly with my goals.",

      "Given the project's complexity compared to my previous work, I was determined to adhere to industry standards and best practices. Thankfully, we live in an era where Chat GPT, one of the world's best teachers, is available 24/7. Chat GPT proved invaluable in helping me break down, organize, plan, and design the project. Although it takes some time to master, Chat GPT is a game-changer for efficient work.",

      "After initial discussions about the project and it's requirements, I opted for PostgreSQL as the database. Its relational nature suited the project well, and I saw it as an opportunity to learn more about relational databases.",

      "Recognizing the need for meticulous organization, I turned to Trello to track tasks and maintain a clear project overview. I adopted a Kanban approach and created separate Trello boards for frontend, backend, and the database. The frontend board featured a detailed action plan with cards for every React app page component.",

      "Learning React was a gratifying experience, especially after managing state in a previous JavaScript project without library support. Witnessing React's built-in capabilities was impressive. Node and Express also proved enjoyable to learn, given my prior experience. PostgreSQL presented a greater challenge due to the need to learn SQL, but I grasped the basics and successfully implemented them with Knex.",

      "Choosing a cloud service provider led me to AWS, drawn by its diverse service offerings. I believe cloud computing will play a pivotal role in the future of technology and wanted to become proficient in it.",

      "Extensive documentation reading was a continuous practice, including during the implementation of Google's OAuth 2.0 for user authentication and authorization. I preferred to avoid libraries that abstracted too much, as I valued a deep understanding of the underlying processes. Overcoming session cookie authentication and authorization challenges, particularly on Safari and Brave browsers, required purchasing a domain name, hosting it on Cloudflare's DNS, and proxying the backend through a subdomain, ensuring cross-browser functionality.",

      "Thorough research was essential to comprehend internet protocols and secure data transfer. One of the upcoming features will be the implementation of Google's new Federated Identity Manager, set to replace OAuth 2.0 as the standard for user authentication and authorization from 2024.",

      "Along the journey, I created and maintained documentation using draw.io, a diagram creation tool I highly recommend. This included Component Diagrams, Database Diagrams, and Flow Charts for the buying process. Such documentation proved invaluable for maintaining a clear project overview and tracking changes.",

      "This project was my deep dive into uncharted waters, much like how I learned to swim as a child. Challenges invigorate me, and problem-solving is my passion. I'm the type who prefers to puzzle out solutions independently rather than being told the answers. This mindset is essential in our field.",

      "I'm fully aware that this project is far from perfect and requires substantial improvement. Nonetheless, I'm proud of its progress and my ability to bring it this far. I've learned a great deal along the way, and I'm confident that it will continue to be a rich source of learning in the future.",
    ],

    techDetails: {
      Functionality:
        "Users can search for items using various filters. They can also register to list items for sale, make purchases, contact other users, and manage their accounts.",

      Frontend:
        "Built with React using Bootstrap utility classes for styling and incorporating specific React components.",

      UI: "Follows responsive design principles with a mobile-first approach.",

      UX: "Enhanced engagement with product-focused image sliders.",

      "Design pattern":
        "Follows a minimalist design pattern, with a focus on showcasing listed products.",

      PWA: "Implemented as a Progressive Web App (PWA) to provide users with offline access and an app-like experience.",

      Backend: "Built with Node.js and Express.js.",

      Database: "Connected PostgreSQL to the backend using the Knex library.",

      "Data Protection":
        "Bcrypt library for password hashing. CORS is set up to allow only specified origins. Middleware protects private routes, authenticating users with session cookies.",

      "Image Processing":
        "Images are processed using the Sharp library before being uploaded to AWS.",

      "Image Storage":
        "The AWS S3 SDK is used to programmatically put, get, and delete images from the bucket.",

      Authentication:
        "Utilizes Google OAuth 2.0 and email/password sign-up (passwords hashed with bcrypt and saved to the database) for user authentication.",

      Authorization: "Session cookies are employed for authorization.",

      Performance: "Bundled with Webpack, polyfilled, and transpiled.",

      "Version Control": "Git and GitHub.",

      "CI/CD":
        "Deployed through Render for Continuous Integration and Continuous Deployment.",

      DNS: "Configured with Cloudflare.",

      "Email Server": "Utilizes AWS SES (Simple Email Service).",

      Testing: "Google Lighthouse.",
    },

    whatIHaveLearned: [
      "React.js, React Hooks, React Router",

      'Node.js and Express.js, including "Express Middleware" Express File Upload and Cookie Parser.',

      "How to setup Google OAuth 2.0 for user authentication and authorization.",

      "CORS (Cross-Origin Resource Sharing) and how to use cookies",

      'PostgreSQL, including "Knex" library for connecting to the database.',

      'SQL statements for CRUD operations, including "JOIN" and "ARRAY_AGG".',

      "How to plan a project using tools like Trello and draw.io.",

      "Kanban project management methodology.",

      "How to read documentation effectively.",

      "How to programmatically resize images using Sharp library.",

      "How to interact programatically with AWS S3 through SDK.",

      "How to configure and use AWS SES service for programatically send emails.",

      'SEO best practices, including "meta" tags, "robots.txt" and structured data from Schema.org.',

      "Google Lighthouse testing and how to improve performance, accessibility, best practices, and SEO.",

      "What is PWA (Progressive Web App) and how to implement it.",

      "Getting familiar with AWS Console and IAM (Identity and Access Management), setting up users, roles, and policies.",

      "How to setup a DNS zone with Cloudflare and configure domains and subdomains.",
    ],
  },

  {
    name: "Flex",

    description:
      "A desktop game that tests your knowledge about the flags of the world. Optimized for large screens only.",

    image: "/assets/images/flex.webp",

    siteURL: "https://flex-flag-game.netlify.app",

    gitHub: "https://github.com/zebetul/flex-flag-game",

    detailsURL: "/flex",

    stack: ["JavaScript", "ESM", "SASS", "HTML", "GSAP", "Parcel", "Netlify"],

    objective:
      "Learn asynchronous JavaScript, fetch API and async await syntax.",

    backgroundStory: [
      "This project didn't begin as a standalone endeavor. It emerged from my journey to grasp asynchronous JavaScript, the fetch API, and the async/await syntax, all within the context of practicing with the restcountries API. As I worked on this practice exercise, it gradually transformed into a small game, steadily accumulating more functionalities. However, the path I was on led me into a lot of complexity. I found myself buried beneath a massive pile of spaghetti code, with files exceeding 800 lines. To compound the situation, troubleshooting errors became a very hard task, making it evident that I needed to change my approach.",

      "I must admit that it was disheartening to realize that I needed to delete almost everything I had painstakingly worked on in the past few days. Nonetheless, I chose to embark on a comprehensive codebase refactor. This time, I approached the project with a clear objective, a well-structured action plan, and an unwavering commitment to best practices. It was only after completing this project, with several refactorings along the way, that I truly appreciated the iterative nature of refactoring throughout a project's lifetime. This experience reinforced the lesson that sparing time for refactoring is more productive than proceeding with suboptimal implementations.",

      "Until this juncture, the game had handled a substantial amount of data, including player scores, turns, time constraints, and country-related information. Managing this increasingly intricate data flow led me to explore architectural patterns, seeking one suited to my needs. This exploration led me to embrace the MVC (Model-View-Controller) architecture.",

      "The decision to apply the MVC pattern to the game proved to be a pivotal one. At that time, I was unaware of the multitude of JavaScript frameworks offering features like built-in state management, preventing unwanted state mutations and automating rerendering when needed. These frameworks also provide built-in hooks for handling runtime events and the capability to encapsulate HTML, CSS, and JS at each component's level. Managing these aspects solely with vanilla JavaScript, even for a modest project like this one, equipped me with a profound understanding of these concepts and made the subsequent journey of learning React both seamless and enjoyable.",

      "Using descriptive and meaningful names for variables, functions, and classes is a practice that will pay off in the long run. Following this principle and using chaining methods on objects made the codebase easy to read even without a lot of comments.",

      "To sum up, this project offered a remarkable opportunity to delve into critical aspects of software development. It underscored the significance of meticulous code organization, the principles of SOLID design, the utility of architectural patterns, the value of meticulous project planning and design before coding, and the enduring importance of refactoring. I must also extend an honorable mention to the pivotal moment when I incorporated OpenAI's Chat GPT into my toolkit. Since then, it has become an indispensable asset in my developer's repertoire.",
    ],

    techDetails: {
      Functionality:
        "Users can play single or two-player games and test their knowledge about the flags of the world.",

      UI: "Designed for desktop screens only.",

      UX: "Enhanced with intro and in-game animations using the GSAP library.",

      Frontend: "Built with HTML, SASS, and JavaScript ES6 modules.",

      Architecture:
        "Follows the MVC (Model-View-Controller) pattern using OOP and ES6 classes.",

      Performance:
        "Bundled with Parcel, polyfilled, and transpiled using core-js and regenerator-runtime.",

      "Version Control": "Git and GitHub.",

      "CI/CD":
        "Deployed through Netlify for Continuous Integration and Continuous Deployment.",
    },

    whatIHaveLearned: [
      "Fetch API and async/await syntax, including top-level await.",

      "Promises, and the difference between them and callback functions.",

      'Error handling with "try" and "catch" blocks.',

      "Creating animation effects using the GSAP library.",

      "The importance of project planning and design before coding.",

      "Code organization, refactoring, and adherence to SOLID principles.",

      "Introduction to Architectural Patterns.",

      "Understanding and implementing the MVC (Model-View-Controller) pattern.",

      "How to work with Chat GPT",
    ],
  },

  {
    name: "Just Tripppin'",

    description:
      "A travel website providing inspiration for your next adventure. Created as a mockup for learning purposes.",

    image: "/assets/images/just_tripppin.webp",

    siteURL: "https://just-tripppin.netlify.app",

    gitHub: "https://github.com/zebetul/just-tripppin-travel-website",

    detailsURL: "/just_tripppin",

    stack: ["HTML", "SASS", "JavaScript", "ESM", "Parcel", "Netlify"],

    objective:
      "Develop a project using ES6 classes to gain expertise in Object-Oriented Programming (OOP) and advanced DOM manipulation.",

    backgroundStory: [
      "To enhance my JavaScript skills in DOM manipulation and OOP programming, I embarked on a new project. Inspired by our love for travel, my girlfriend and I decided to create a travel blog.",

      "Throughout development, I seized the opportunity to learn and implement the SASS preprocessor for enhanced styling and code organization. I introduced CSS animations to elevate the website's interactivity. To maintain a structured codebase, I employed ES6 classes and modules, each representing a section with specific functionality. In the main.js file, I instantiated new objects from these classes. Parcel served as the bundler, and Netlify hosted the deployed website.",
    ],

    techDetails: {
      Frontend: "Built with HTML, SASS, and JavaScript ES6 modules.",

      Design: "Responsive design with a mobile-first approach.",

      UX: "Utilized CSS animations for enhanced user engagement.",

      Performance:
        "Implemented lazy loading for images, optimized script loading, and utilized Parcel for bundling. Content Delivery Network (CDN) for assets.",

      "Version Control": "Git and GitHub.",

      "CI/CD":
        "Deployed using Netlify for Continuous Integration and Continuous Deployment.",
    },

    whatIHaveLearned: [
      "Advanced DOM manipulation techniques.",

      "Utilized the SCSS preprocessor to enhance the User Interface (UI).",

      "Applied Object-Oriented Programming (OOP) concepts with JavaScript, including ES6 Classes.",

      "Explored constructors, 'this' keyword, 'new' keyword, 'call', 'apply', and 'bind' methods.",

      "Understood the concepts of encapsulation, 'private' and 'public' properties and methods.",

      "Implemented inheritance using 'extends' and 'super' keywords.",

      "Utilized ES6 Modules for code organization.",

      "Leveraged 'defer' and 'async' attributes for efficient script loading.",

      "Learned about bundling, transpiling, polyfilling, and minification processes.",

      "Utilized Git and GitHub for version control.",

      "Deployed the project with CI/CD using Netlify.",
    ],
  },

  {
    name: "PDF Form Filler",

    description:
      "A simple web app that enables users to fill in four different PDF forms with the same data and download the completed forms.",

    image: "/assets/images/pdf_form_filler.webp",

    siteURL: "https://pdf-form-filler.onrender.com",

    gitHub: "https://github.com/zebetul/pdf-form-filler",

    detailsURL: "/pdf_form_filler",

    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Render"],

    objective: "Build my first project.",

    backgroundStory: [
      "When I embarked on my JavaScript learning journey, I was eager to apply my knowledge by taking on small challenges. A friend presented me with a unique problem: he needed a solution to fill out four different forms with the same data and download the results. These forms came in two formats, PDF and Word documents, and he had to complete them for multiple customers with identical information.",

      "Excited by the idea, I dove into the project. While learning JavaScript, I also acquired basic HTML and CSS skills, which allowed me to create a rudimentary form in a local browser. However, I faced the challenge of interacting with PDF documents and deploying a website, which prompted me to start my research.",

      "After advancing to the Node.js chapter in my JavaScript Udemy course and consulting documentation about pdf-lib, I successfully created a straightforward Express server. This server served a public folder containing four PDF documents with editable fields, alongside index, script, and style files. Upon my friend's request, I installed Node.js on his laptop, enabling him to use the app locally, greatly simplifying his daily tasks. I later deployed the app on Render and hosted the PDF files on AWS S3 for an improved user experience.",

      "Although it's a relatively simple project that doesn't strictly adhere to best practices, I'm incredibly pleased with it. It represents my first personal endeavor and a substantial challenge. Delivering a seamlessly functioning product was an empowering moment that truly made me feel like a developer. This project offered invaluable learning experiences, and I'm grateful to my friend for entrusting me with this task.",
    ],
    techDetails: {
      Functionality:
        "Users can complete four different PDF forms with identical data and download the filled forms.",

      Frontend:
        "Developed using HTML, CSS, and JavaScript, with Bootstrap for UI enhancements.",

      "PDF Handling":
        "Utilized the pdf-lib library for programmatically loading, editing, saving, and downloading PDF documents with editable fields.",

      UX: "Designed for simplicity and user-friendliness, offering an efficient workflow for users.",

      "Version control": "Git, GitHub",

      "CI/CD": "Render",
    },
    whatIHaveLearned: [
      "Took my first steps in HTML, CSS, and JavaScript without formal instruction.",

      "Developed research skills and learned to navigate documentation effectively.",

      "Gained initial exposure to the Node.js ecosystem and npm package management.",

      "Learned to use npm and install external libraries.",

      "Utilized a library (Bootstrap) to enhance the user interface (UI).",

      "Explored and successfully implemented the pdf-lib library for programmatically working with PDF documents.",

      "Learned to create editable PDF forms with customized fields.",

      "Set up and configured a simple Express server.",

      "Installed and configured Node.js on a remote machine for accessibility.",

      "Enhanced problem-solving skills by addressing a real-world challenge posed by a friend.",
    ],
  },

  {
    name: "Portfolio Website",

    description:
      "A portfolio website showcasing my projects, skills, and experience.",

    image: "/assets/images/portfolio.webp",

    siteURL: "",

    gitHub: "https://github.com/zebetul/my-portfolio",

    detailsURL: "/portfolio_website",

    stack: ["React", "Tailwind CSS", "Render", "GSAP"],

    objective:
      "Design and develop a portfolio website using React and Tailwind.",

    backgroundStory: [
      "After completing several projects, I decided it was time to showcase them, along with my learning journey, gained experience, and skills, in a portfolio website.",

      "I envisioned the app with a minimalist design and a dark mode, which I find more comfortable to use. The goal was to emphasize the projects and their details while creating an easy-to-navigate, responsive website that offers a pleasant user experience with clear and concise information.",

      "For styling, I opted to use Tailwind CSS. I wanted to gain experience with this utility-first CSS framework, having already worked with Bootstrap. I found utility classes to be an efficient way to style components, and I had read that Tailwind is well-suited for small projects like this one.",

      "To further enhance the user experience, I incorporated introductory animations using the GSAP library.",
    ],

    techDetails: {
      Functionality:
        "Users can navigate the website and view my projects, skills, and background.",

      Frontend:
        "Built with React using Tailwind CSS utility classes for styling.",

      UI: "Follows desktop-first design principles with responsive optimization for mobile viewing.",

      UX: "Designed for easy navigation and provides clear and concise information.",

      "Design Pattern":
        "Follows a minimalist design pattern in dark mode, with a focus on showcasing projects.",

      "Version Control": "Utilizes Git and GitHub for version control.",

      "CI/CD":
        "Deployed through Render for Continuous Integration and Continuous Deployment.",
    },

    whatIHaveLearned: [
      "Enhanced my proficiency in React, including building responsive web applications and utilizing React's component-based architecture",

      "Gained experience in using Tailwind CSS utility classes for efficient and responsive web styling.",

      "Developed an understanding of design patterns, color theory, and typography to create visually appealing and user-friendly interfaces.",
    ],
  },
];

export const ABOUT_ME = {
  image: "/assets/images/hero.webp",

  description: [
    "I was born and raised in a small town in northern Romania during a time when our primary sources of information and knowledge, apart from school, were limited to one TV channel controlled by a communist government, and our main communication channel was the wired phone, subject to monitoring and censorship by the ruling party. It was due to this upbringing that I learned to truly value and grasp the transformative potential of unrestricted access to information provided by the internet and the latest technological advancements.",

    "My first encounter with IT was when I was 12, and I frequented the local IT club. It was love at first sight. I was fascinated by how you could manipulate electricity, transform it into information, perform magic with programming languages, and produce a game on a screen. I became addicted; I wanted to understand all of it.",

    "Fast forward in time, and I found myself a student at Timisoara's West University's IT Faculty. After three years at the university, due to some unexpected events, my life took a different course. I was forced to interrupt my studies, return home, and start working as a math teacher. Later, I switched to a sales manager/trainer position in a multinational telecom company. Over the years, my career evolved in a direction that did not intersect with the IT field. During this time, I gained valuable experience working with people, leading teams, learning negotiation skills, and communicating assertively. It was a productive period for enhancing my soft skills, and I did find some aspects of it enjoyable. Meeting new people, teaching, and sharing ideas had their merits, but...",

    "Now, I want to return to my roots, back to being a geek. So, I embarked on a journey of requalification, rediscovering the beauty of coding and creating new things from scratch. I want to explore, learn, and, if possible, innovate. I want to feel that I'm contributing something new to this field.",

    "This website serves as a record of my progress along this path. Thank you for your patience in reading this, and welcome along for the ride.",
  ],

  stack: [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "PostgreSQL",
    "AWS",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Tailwind CSS",
  ],

  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "Chat GPT",
    "GitHub Copilot",
    "Trello",
    "draw.io",
    "Netlify",
    "Render",
    "Cloudflare",
  ],

  interests: [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Cloud Computing",
    "Machine Learning",
  ],

  education: [
    {
      name: "Udemy",
      description:
        "The Complete JavaScript Course 2021: From Zero to Expert! by Jonas Schmedtmann",
      image: "/assets/education/udemy.png",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
    },
  ],

  contact: {
    email: "sebenicristi@gmail.com",
    linkedIn: "https://www.linkedin.com/in/cristian-sebeni-79515926b/",
    github: "https://github.com/zebetul",
  },
};
