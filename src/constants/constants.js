export const PROJECTS = [
  {
    name: "Restil",
    description:
      "Online secondhand clothing marketplace for the Romanian market. Sellers can easily list their items for sale, while buyers can find the best deals on clothes, shoes, and accessories by using filters and browsing through products.",
    image: "/assets/project_Images/restil_img.png",
    siteURL: "https://restil.ro/",
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
    ],
  },

  {
    name: "Flex",
    description:
      "A fun game that tests your knowledge about the flags of the world. You can choose between one or two players mode. Is only optimized on large screens.",
    image: "/assets/project_Images/flex_img.png",
    siteURL: "https://flex-flag-game.netlify.app",
    detailsURL: "/flex",
    stack: ["JavaScript", "ES6", "SCSS", "HTML", "Parcel", "Netlify"],
  },

  {
    name: "Just Tripppin'",
    description:
      "A travel website where you can find inspiration for your next trip. Is a mockup website made for learning purposes.",
    image: "/assets/project_Images/just_tripppin_img.png",
    siteURL: "https://just-tripppin.netlify.app",
    detailsURL: "/just_tripppin",
    stack: ["HTML", "SCSS", "JavaScript", "ES6", "Parcel", "Netlify"],
  },

  {
    name: "PDF Form Filler",
    description:
      "A simple web app that allows you to fill in four different PDF forms with the same data and download the results. Made for a friend who needed to fill in a lot of forms on a daily basis for his job.",
    image: "/assets/project_Images/pdf_form_filler_img.png",
    siteURL: "https://pdf-form-filler.onrender.com",
    detailsURL: "/pdf_form_filler",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Render"],
    objectives:
      "The main goal was to create my first personal project and gain independent experience in the JavaScript environment. Prior to this, my learning had been guided by the instructor in a Udemy JavaScript fundamentals course.",
    backgroundStory: `
    When I started learning JavaScript I was very enthusiasthic about it and asked my friends to give me small challenges related to this field. One of my friends asked me if I could find a solution that would allow him to fill in four different forms with the same data and download the results. He had four predefined forms edited in two different formats, PDF and Word documents. He had to fill in those forms for every customer with the same customer data. I thought it was a great idea and I started thinking on it right away. At that  time I allready started learning Javascript and along the way some HTML and CSS, so I knew how to render a basic form in a browser on localhost but I had no idea how to interact with a PDF document or how to deploy a website, so I started researching right away. After a fast forward in the Javascript Udemy course to the Node.js chapter and some documentation read about pdf-lib, the final product was a simple express server which served a public folder containing four PDF documents(with editable fields I had designed) and the index, script and styles files. I installed node on his laptop, of course on his request, and from that moment he is using the app on localhost making his work a lot easier.`,
    techDetails: `The app is built with HTML, CSS, and JavaScript. I used Bootstrap for the UI and pdf-lib library to write the documents. The app is very simple and straightforward, is not responsive and it's only optimized for large screens. I recently deployed it on Render and put the PDF documents on AWS S3, for a better experience.`,
    whatIHaveLearned: [
      "Developed a web application using HTML, CSS, and JavaScript.",
      "Utilized the Bootstrap framework for enhancing the user interface (UI).",
      "Explored and implemented the pdf-lib library for working with PDF documents programmatically.",
      "Learned to create editable PDF forms with customized fields.",
      "Gained experience in setting up and deploying a simple Express server.",
      "Installed and configured Node.js on a remote machine to facilitate application usage.",
      "Improved problem-solving skills by addressing a real-world challenge posed by a friend.",
    ],
  },
];
