const main = document.querySelector("#main");
// const home = document.querySelector(".home");
// const about = document.querySelector("#about");
const portfolio = document.querySelector("#Portfolio");
// const contact = document.querySelector("#Contact");
const active = document.querySelectorAll("li");
const aboutLi = document.querySelector(".li-about");
const side = document.querySelector(".side");
const homeLi = document.querySelector(".li-home");
const contactLi = document.querySelector(".li-contact");
const portfolioLi = document.querySelector(".li-Portfolio");
const hamburger = document.querySelector("#hamburger");

const projects = [
  {
    title: "Restaurant Website",
    img: "./images/restaurant.gif",
    description: "",
    link: "https://mern-restaurant.onrender.com/",
  },
  {
    title: "Project 2",
    img: "https://picsum.photos/200/300",
    description: "Project 2 description",
  },
  {
    title: "Project 3",
    img: "https://picsum.photos/200/300",
    description: "Project 3 description",
  },
];
const port = `
<h1 class="port">Portfolio</h1>
        <p class="p">Here are some of my projects</p>
        <div class="projects">
        ${projects.map((project) => {
          return `<div class="project">
                    <h2>${project.title}</h2>
                    <img src="${project.img}" alt="${project.title}" class="project-img">
                    <p>${project.description}</p>   
                    <a href="${project.link}" target="_blank" class="project-a">View Project</a>
                </div>`;
        })}</div>
        </div>`;

portfolio.innerHTML = port;
active.forEach((link) => {
  link.addEventListener("click", () => {
    active.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    if (
      homeLi.classList.contains("active") ||
      portfolioLi.classList.contains("active")
    ) {
      side.classList.remove("side-active");
      side.classList.add("side");
    }
    if (
      aboutLi.classList.contains("active") ||
      contactLi.classList.contains("active")
    ) {
      side.classList.add("side-active");
          }
  });
});
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-open");
  hamburger.classList.toggle("is-closed");
  if (hamburger.classList.contains("is-open")) {
    side.style.display = "flex";
  }
  if (hamburger.classList.contains("is-closed")) {
    side.style.display = "none";
  }
});

const onSubmit = () => {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let text = document.querySelector("#text").value;
  const data = {
    name,
    email,
    text,
  };
  try {
    
    fetch("https://main-be-nv16.onrender.com", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch(err=>console.log(err));
  } catch (error) {
    console.log(error);
  }
};
