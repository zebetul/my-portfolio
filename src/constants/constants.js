export const PROJECTS = [
	{
		name: "Programari Clinica Mentalife",

		description: "Online appointment booking module for Mentalife Clinic.",

		image: "/assets/images/mentalife.webp",

		siteURL: "https://programari.clinica-mentalife.ro/",

		detailsURL: "/mentalife",

		stack: ["React", "Vite", "Shadcn", "Tailwind CSS", "Supabase", "Netlify"],

		objective:
			"The client needed an online appointment booking module for their clinic's website connected to their internal management system.",

		backgroundStory: [
			"Mentalife Clinic operates with an internal management system to manage appointments, patients, and doctors. Previously, appointments were booked exclusively via phone, requiring receptionists to manually handle the scheduling process. To streamline this process and improve patient convenience, the clinic sought an online appointment booking module. This module would enable patients to browse available time slots, book appointments directly through the website, and receive automated confirmation emails.",
		],

		techDetails: {
			Functionality:
				"Users can book appointments online, view available time slots for doctors, and receive automated confirmation emails. Admins manage appointments via the clinic's internal system.",

			Frontend:
				"Built with React, utilizing the Shadcn component library and styled with Tailwind CSS.",

			UI: "Responsive and user-friendly interface designed to adapt seamlessly to desktop and mobile screens.",

			UX: "Focused on simplicity and accessibility, providing an intuitive booking experience.",

			"Design pattern":
				"Adopts a clean and modern design with emphasis on usability and quick navigation. Follows the clinic's branding guidelines and the website's overall aesthetic.",

			Backend:
				"Implemented with Supabase edge functions to connect the frontend with the internal management system.",

			Database:
				"Supabase PostgreSQL serves as the database for storing user and appointment data.",

			"Data Protection":
				"Data encrypted during transmission. Row Level Security (RLS) implemented to protect sensitive data. SSL for secure data transfer. GDPR compliance.",

			"Email Notifications":
				"Automated email notifications sent using Resend for booking confirmations or cancellations.",

			Performance:
				"Bundled with Vite for optimized builds and fast development experience.",

			"Version Control": "Git and GitHub for source control.",

			"CI/CD": "Deployed using Netlify for continuous deployment.",

			DNS: "Deployed on a custom subdomain on the clinic's website using cpanel.",

			Testing: "Manual testing and debugging through browser developer tools.",
		},

		whatIHaveLearned: [
			"How to build modern user interfaces using React and Shadcn components.",

			"Supabase edge functions for serverless backend logic.",

			"Efficient data fetching and querying with PostgreSQL and Supabase.",

			"How to automate email notifications for user interactions using Resend.",

			"Responsive design principles to create cross-platform interfaces.",

			"How to connect external systems with internal APIs for real-time updates.",

			"Testing user flows and debugging using browser developer tools.",
		],
	},

	{
		name: "ePhones",

		description:
			"Phones and accesories online store dedicated to resellers from the Romanian market.",

		image: "/assets/images/ephones.webp",

		siteURL: "https://www.ephones.ro/",

		// gitHub: "https://github.com/zebetul/refashion-secondhand-marketplace",

		detailsURL: "/ephones",

		stack: [
			"React",
			"Vite",
			"React Router",
			"TanStack Query",
			"Tailwind CSS",
			"Shadcn",
			"Supabase",
			"PSQL",
			"Netlify",
			"Cloudflare",
			"PWA",
		],

		objective:
			"Develop an online mobile phone store dedicated to B2B customers, focusing on Progressive Web App features and user experience.",

		backgroundStory: [
			"Businesses should register using email, name, password and Company data. The registration process should involve email verification.",

			"Products should be displayed in a mobile-responsive grid layout; price and stock should not be visible to anonymous users.",

			"Products page should have filtering and sorting options.",

			"Users should be able to search for specific products.",

			"Product page should display details and allow adding to cart only for authenticated users.",

			"Authenticated users can add products to cart, create orders, and track their orders.",

			"Authenticated users should be able to edit their data, such as delivery address.",

			"Admin users should have access to a dashboard to upload, edit, or delete products.",

			"Admin users should be able to check out and confirm orders.",

			"Admin users should have access to the users list and statistical data.",
		],

		techDetails: {
			Functionality:
				"Users can search for items using various filters. They can also register to make purchases and manage their accounts.",

			Frontend:
				"Built with React using Vite for bundling, Tailwind CSS for styling and Shadcn as component library. Deployed on Netlify.",

			UI: "Follows responsive design principles with a mobile-first approach.",

			UX: "Enhanced engagement with product-focused image sliders.",

			"Design pattern":
				"Follows a minimalist design pattern, with a focus on showcasing listed products.",

			PWA: "Implemented as a Progressive Web App (PWA) to provide users with offline access and an app-like experience.",

			Backend:
				"Used Supabase as BASS (Backend as a Service), Authentication and Authorization.",

			"Data Protection":
				"Used Postgers's RLS (Row Level Security) for data protection. SSL for secure data transfer.",

			Authentication: "Through Supabase with JWT (JSON Web Tokens).",

			"Image Storage": "Supabase Storage for storing images.",

			Performance: "Bundled with Vite, polyfilled, and transpiled.",

			"Version Control": "Git and GitHub.",

			"CI/CD":
				"Deployed through Netlify for Continuous Integration and Continuous Deployment.",

			DNS: "Configured with Cloudflare.",

			"Email Server": "Zoho Mail.",

			Testing: "Google Lighthouse and manual testing.",
		},

		whatIHaveLearned: [
			"Tanstack Query for data fetching and management.",

			"Shadcn as a component library.",

			"Supabase as BASS (Backend as a Service), Authentication and Authorization.",

			"How to configure and use Zoho mail.",
		],
	},

	{
		name: "Avocat Simona Oros",

		description: "Landing page for a Romanian law firm.",

		image: "/assets/images/lawyer_firm.webp",

		siteURL: "https://avocatsatumare.ro",

		gitHub: "https://github.com/zebetul/lawyer-firm",

		detailsURL: "/avocat_simona_oros",

		stack: ["React", "Gatsby", "GraphQL", "Tailwind CSS", "Netlify"],

		objective:
			"Create a landing page for a Romanian law firm with SEO as a priority.",

		backgroundStory: [
			"The customer's request was to create a landing page for her law firm. The main goal was to design a professional-looking website that inspires trust, is easily discoverable on the internet, and provides potential clients with essential information about the firm.",

			"The website was developed using Gatsby, a static site generator, and React. The primary focus was on search engine optimization (SEO), ensuring the website ranks well on search engine results pages. The final site was deployed on Netlify for seamless hosting and continuous integration.",
		],

		techDetails: {
			Frontend: "Built with Gatsby and React",

			"Data Fetching": "Utilizes GraphQL for fetching data",

			SEO: "Follows SEO best practices",
		},

		whatIHaveLearned: [
			"Gatsby static site generator",
			"Gatsby plugins: gatsby-plugin-image, gatsby-plugin-sharp, gatsby-source-filesystem, gatsby-transformer-remark",
			"GraphQL data fetching",
			"SEO best practices",
			"Image optimization for web with Gatsby",
			"LightHouse testing and improving performance, accessibility, best practices, and SEO",
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
			"A simple web app that enables users to fill in four different PDF forms with the same data and download the completed PDF documents.",

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
		linkedIn: "https://www.linkedin.com/in/cristi-sebeni",
		github: "https://github.com/zebetul",
		cv: "https://zebe-personal-bucket.s3.eu-west-1.amazonaws.com/portfolio-website/Cristi_Sebeni_CV.pdf",
	},
};
