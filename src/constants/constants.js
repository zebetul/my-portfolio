export const PROJECTS = [
  {
    name: "Restil",
    description:
      "Online secondhand clothing marketplace for the Romanian market, promoting sustainable shopping. Sellers can easily list their items for sale, while buyers can find the best deals.",
    image: "/assets/project_Images/restil_img.png",
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
      "Develop, test, and deploy a full-stack, production-ready web application using the latest industry standards and best practices.",
    backgroundStory: [
      "After I finished the JavaScript Udemy course and worked allready on some JS projects, I felt pretty confident in my JS skills and started to learn React. I wanted to build another project to train my newly aquiered React knowledge but I wanted to be more challenging than the previous ones and also to be usefull in real life. So I started thinking on some project ideas, when one of my friends challenged me to build a secondhand clothing marketplace. The idea met all my requirements, so I started working on it.",

      "Being way bigger in complexity than any of my previous ones, I wanted to tackle this project trying to follow the industry standards and best practices. Luckyly, we are living in an age when we have the luxury to have one the world's best teachers in whatever domain we want at our disposal 24/7. Of course I'm talking about Chat GPT. So I started to deconstruct the idea in smaller chunks with it's help. This is where I think Chat GPT shines, in helping you to destructure, organize, plan and design. It takes some time to learn how to work efficiently with it, but once you get the hang of it, it's a game changer.",
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
      "Version Control": "Utilizes Git and GitHub.",
      "CI/CD":
        "Deployed through Render for Continuous Integration and Continuous Deployment.",
      DNS: "Configured with Cloudflare.",
      "Email Server": "Utilizes AWS SES (Simple Email Service).",
      Testing: "Google Lighthouse.",
    },
    whatIHaveLearned: [
      "Developed a full-stack web application using React, Node, Express, and PSQL.",
      "Utilized the Bootstrap framework for enhancing the user interface (UI).",
      "Utilized the Material-UI library for enhancing the user interface (UI).",
      "Utilized the Styled-Components library for enhancing the user interface (UI).",
      "Utilized the Tailwind CSS library for enhancing the user interface (UI).",
      "Utilized the AWS S3 service for storing the images.",
      "Utilized the AWS SES service for sending emails.",
    ],
  },

  {
    name: "Flex",
    description:
      "A desktop game that tests your knowledge about the flags of the world. You can choose between one or two players mode. Is only optimized on large screens.",
    image: "/assets/project_Images/flex_img.png",
    siteURL: "https://flex-flag-game.netlify.app",
    gitHub: "https://github.com/zebetul/flex-flag-game",
    detailsURL: "/flex",
    stack: ["JavaScript", "ESM", "SCSS", "HTML", "Parcel", "Netlify"],
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
      "Version Control": "Utilized Git and GitHub for version control.",
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
    image: "/assets/project_Images/just_tripppin_img.png",
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
      "Version Control": "Utilized Git and GitHub for version control.",
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
      "A simple web app that enables users to fill in four different PDF forms with the same data and download the completed forms. Created for a friend who needed an efficient solution for daily form filling.",
    image: "/assets/project_Images/pdf_form_filler_img.png",
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
];
