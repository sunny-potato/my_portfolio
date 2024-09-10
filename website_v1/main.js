import "./style.css";

const projects = [
  "Tasty",
  "Rhythm game",
  "Search images",
  "Typing game",
  "To-do list",
  "E-commerce app",
  "Top 10 popular keywords",
  "Weather API",
];
const siteUrl = [
  "#",
  "https://musicgame-sunhee.netlify.app/index.html",
  "https://searchimage-sunhee.netlify.app/",
  "https://typinggame-sunhee.netlify.app/",
  "https://todolist-sunhee.netlify.app/",
  "#",
  "https://top10keywords-sunhee.netlify.app/",
  "https://weather-api-sunhee.netlify.app/",
];
const githubUrl = [
  "https://github.com/sunny-potato/team_project_tasty",
  "https://github.com/sunny-potato/team_project_music_game",
  "https://github.com/sunny-potato/keywordSearch_images",
  "https://github.com/sunny-potato/typingGame",
  "https://github.com/sunny-potato/toDoList",
  "https://github.com/sunny-potato/ecommerce_react_native_app",
  "https://github.com/sunny-potato/google_trends_rss",
  "https://github.com/sunny-potato/weather_api",
];

const listContainer = document.querySelector(".projectsList");
for (let i = 0; i < projects.length; i++) {
  const list = document.createElement("li");
  list.setAttribute("class", `project${i}`);
  listContainer.append(list);

  const projectName = document.createElement("span");
  projectName.setAttribute("class", `projectName${i}`);
  // projectName.setAttribute("href", `#`);
  // projectName.setAttribute("target", `_blank`);
  // list.innerHTML = `${projects[i]}`;
  projectName.innerHTML = `${projects[i]}`;
  list.append(projectName);

  if (i == 0 || i == 5) {
    // const siteImage = document.createElement("img");
    // siteImage.setAttribute("class", `siteImage${i}`);
    // siteImage.setAttribute("src", siteUrl[i]);
    // siteImage.setAttribute("target", `_blank`);
    // list.append(siteImage);
  } else {
    const siteLink = document.createElement("a");
    siteLink.setAttribute("class", `siteLink${i}`);
    siteLink.setAttribute("href", siteUrl[i]);
    siteLink.setAttribute("target", `_blank`);
    siteLink.innerHTML = "View site";
    list.append(siteLink);
  }

  const githubLink = document.createElement("a");
  githubLink.setAttribute("class", `githubLink${i}`);
  githubLink.setAttribute("href", githubUrl[i]);
  githubLink.setAttribute("target", `_blank`);
  githubLink.innerHTML = "Github";

  list.append(githubLink);
}
