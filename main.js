import "./src/css/main.css";
import "./src/css/intro-image.css";
import "./src/css/projects.css";
// import "./src/css/ideas.css";
import "./src/css/about.css";
import "./src/css/contact.css";

import projects from "./src/data/projects-list.js";

for (let i in projects.list) {
  const title = projects.list[i].title;
  const description = projects.list[i].description;
  const technology = projects.list[i].technology;
  const site_url = projects.list[i].site_url;
  const github_url = projects.list[i].github_url;
  const video = projects.list[i].video;
  const project_contents = {
    title,
    description,
    technology,
    site_url,
    github_url,
    video,
  };
  create_new_project(project_contents);
}

function create_new_project(new_project) {
  const project = document.createElement("div");
  project.className = "project";
  const projects_list = document.querySelector(".projects-list");
  projects_list.appendChild(project);
  add_project_video(project, new_project);
  add_project_text(project, new_project);
}

function add_project_video(project_element, project_data) {
  const video_container = document.createElement("div");
  video_container.className = "project-video";

  const video_div = document.createElement("video");
  // video_div.controls = true;
  video_div.autoplay = true;
  video_div.loop = true;
  video_div.muted = true;
  const source_tag = document.createElement("source");
  source_tag.src = `${project_data.video}`;
  source_tag.type = "video/mp4";

  project_element.appendChild(video_container);
  video_container.appendChild(video_div);
  video_div.appendChild(source_tag);
}

function add_project_text(project_element, project_data) {
  const text_container = document.createElement("div");
  text_container.className = "project-text";
  project_element.appendChild(text_container);

  add_title(text_container, project_data.title);
  add_technology(text_container, project_data.technology);
  add_description(text_container, project_data.description);
  add_link(text_container, project_data.site_url, project_data.github_url);
}

function add_title(text_container, title_text) {
  const title = document.createElement("div");
  title.className = "project-title";
  title.textContent = `${title_text}`;

  text_container.appendChild(title);
}

function add_description(text_container, description_text) {
  const description = document.createElement("div");
  description.className = "project-description";
  description.textContent = `${description_text}`;

  text_container.appendChild(description);
}

function add_technology(text_container, technologies_list) {
  const technology = document.createElement("div");
  technology.className = "project-technology";
  for (let i in technologies_list) {
    const tech_name = document.createElement("span");
    tech_name.textContent = `${technologies_list[i]}`;
    technology.appendChild(tech_name);
  }

  text_container.appendChild(technology);
}

function add_link(text_container, site_url, github_url) {
  const link = document.createElement("div");
  link.className = "project-buttons";
  if (site_url !== "#") {
    const site_link = document.createElement("a");
    site_link.href = `${site_url}`;
    site_link.target = "_blank";
    site_link.textContent = "Project";
    link.appendChild(site_link);
  }
  if (github_url !== "#") {
    const github_link = document.createElement("a");
    github_link.href = `${github_url}`;
    github_link.target = "_blank";
    github_link.textContent = "Github";
    link.appendChild(github_link);
  }

  text_container.appendChild(link);
}
