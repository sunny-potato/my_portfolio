import tasty from "../image-projects/videos/tasty.mp4";
import digital_album from "../image-projects/videos/digital_album.mp4";
import search_images from "../image-projects/videos/search_images.mp4";
import typing_game from "../image-projects/videos/typing_game.mp4";
import weather_api from "../image-projects/videos/weather_api.mp4";

export default {
  list: {
    "Digital Album": {
      title: "Digital album",
      description:
        "The Digital Album is a website that allows users to upload and manage their pictures directly from a local PC. The main goal of this project was to explore how to handle image data efficiently. For storage, I integrated Google Cloud Storage to store and retrieve images, while saving their metadata in a serverless PostgreSQL database. This approach keeps the database light by avoiding the need to store large image files directly, which improves query performance. For more details on the project's main functionality and code, please visit the GitHub page.",
      technology: [
        "TypeScript",
        "React",
        "Vite",
        "Axios",
        "Node.js",
        "Express",
        "Noen",
        "Google Cloud Storage",
      ],
      site_url: "#",
      github_url: "https://github.com/sunny-potato/digital_album",
      image: "./src/image-projects/gif/digital_album.gif",
      video: digital_album,
    },
    weather_api: {
      title: "Weather API",
      description:
        "The Weather API project provides users with weather information based on their selected location, using data from an open API. A key focus of this project was presenting the API data in a user-friendly way. I utilized CSS to create visual elements, such as images and animations to display the weather status, and graphs to illustrate temperature changes throughout the day. The live site and source code are available on GitHub.",
      technology: ["JavaScript", "HTML", "CSS", "Vite"],
      site_url: "https://weather-api-sunhee.netlify.app/",
      github_url: "https://github.com/sunny-potato/weather_api",
      image: "./src/image-projects/gif/weather_api.gif",
      video: weather_api,
    },
    search_images: {
      title: "Search for images",
      description:
        "This project focuses on learning and utilizing open APIs. It allows users to search for images based on keywords, displaying the results fetched from the API. No database is involved, as all images are fetched directly from the API. One challenge was presenting images with varying sizes and orientations in a clean, organized way. You can explore the project and the code on GitHub.",
      technology: ["JavaScript", "HTML", "CSS"],
      site_url: "https://searchimage-sunhee.netlify.app/",
      github_url: "https://github.com/sunny-potato/keywordSearch_images",
      image: "./src/image-projects/gif/search_images.gif",
      video: search_images,
    },
    tasty: {
      title: "Tasty",
      description:
        "Tasty was a collaborative group project developed during my time at university. It’s a recipe management website where users can create, update, and delete their own recipes. This project involved designing database models, UI/UX design, and implementing both frontend and backend functionalities. My primary contribution was developing the recipe editing and display pages. You can find more information and the code on GitHub.",
      technology: ["TypeScript", "React", "Node.js", "MySQL", "Jest", "Enzyme"],
      site_url: "#",
      github_url: "https://github.com/sunny-potato/team_project_tasty",
      image: "./src/image-projects/gif/tasty.gif",
      video: tasty,
    },
    typing_game: {
      title: "Typing game",
      description:
        "The Typing Game was one of the first projects I developed after learning programming. It’s a simple typing game built using JavaScript, HTML, and CSS. I implemented features such as random word display, word movement, variable speed based on difficulty levels, and a scoring system. You can try the game on the live site, and the code is available on GitHub.",
      technology: ["JavaScript", "HTML", "CSS"],
      site_url: "https://typinggame-sunhee.netlify.app/",
      github_url: "https://github.com/sunny-potato/typingGame",
      image: "./src/image-projects/gif/typing_game.gif",
      video: typing_game,
    },
  },
};
