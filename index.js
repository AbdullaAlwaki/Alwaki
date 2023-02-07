const main = document.querySelector("#main");
// const home = document.querySelector(".home");
// const about = document.querySelector("#about");
// const portfolio = document.querySelector("#Portfolio");
// const contact = document.querySelector("#Contact");
const active = document.querySelectorAll("li");
const aboutLi = document.querySelector(".li-about");
const side = document.querySelector(".side");
const homeLi = document.querySelector(".li-home");
const contactLi = document.querySelector(".li-contact");
const portfolioLi = document.querySelector(".li-Portfolio");
const hamburger = document.querySelector("#hamburger");
const Home = `<div class="home">
<div class="main-content">
<h1>Hi, I'm Abdulla Alwaki</h1>
<h2>I'm a Web Developer</h2>
<p>
I am motivated, patient and self-reliant full stack web developer.
Now, I am ready for an exciting start in this field as either an
intern or junior developer. My goal is to bring my strengths such as
          my solution-oriented and keen mentality into your team and further
          develop my tech skills.
        </p>
        <a href="">Download CV</a>
        </div>
        </div>
`;
// home.innerHTML = Home;

const About = `<div id="about">
<h1>About</h1>
<div class="about-content">
<div class="about-div">
    <h3>WebDev</h3>
    <img 
    class="about-img" 
    src="./foto1.jpeg" alt="">
    <p>Design websites that helps other people to their job done.
    </p>
</div>
<div class="about-div last">
    <h3>Design</h3>
    <img 
    class="about-img" 
    src="./foto2.png" alt="">
    <p>Create visual concepts by hand and computer. I communicate ideas to inspire, inform, or captivate consumers.
    </p>
</div >
<div class="about-div ">
    <h3>More</h3>
    <img 
    class="about-img" 
    src="./foto3.jpeg" alt="">
    <p>I share my knowledge on online platforms in English & Arabic. I am skilled in communicating and explaining the decision-making processes.
    </p>
    </div>
    </div>
    </div>`;
// about.innerHTML = About;

const projects = [
  {
    title: "Restaurant Website",
    img: "./restaurant.gif",
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
const portfolio = `<div id="Portfolio" >
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

const Contact = `<div id="Contact" >
<div class="Contact-content">
<h1>Contact</h1>
<p>
  I am a self-motivated, patient and self-reliant full stack web
  developer. Now, I am ready for an exciting start in this field as
  either an intern or junior developer. My goal is to bring my strengths
  such as my solution-oriented and keen mentality into your team and
  further develop my tech skills.
</p>
</div> 
</div>`;

const hum = `<div class="burger-icon">
  <div class="burger-container">
    <span class="burger-bun-top"></span>
    <span class="burger-filling"></span>
    <span class="burger-bun-bot"></span>
  </div>
</div>

<div class="burger-ring">
  <svg class="svg-ring">
    <path
      class="path"
      fill="none"
      stroke="#fff"
      stroke-miterlimit="10"
      stroke-width="4"
      d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
    />
  </svg>
</div>

<svg width="0" height="0">
  <mask id="mask">
    <path
      fill="none"
      stroke="#ff0000"
      stroke-miterlimit="10"
      stroke-width="4"
      d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
    />
  </mask>
</svg>
` ;

// contact.innerHTML = Contact;
main.innerHTML = Home;
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
      console.log(side);
    }
    if (
      aboutLi.classList.contains("active") ||
      contactLi.classList.contains("active")
    ) {
      side.classList.add("side-active");
      console.log(side);
    }

    if (homeLi.classList.contains("active")) {
      main.innerHTML = Home;
      main.classList.remove("black");
      main.classList.add("white");
      hamburger.style.color = "white";
    }
    if (aboutLi.classList.contains("active")) {
        main.innerHTML = About;
        main.classList.remove("white");
        main.classList.add("black");
        hamburger.style.color = "black";

        }
    if (portfolioLi.classList.contains("active")) {
        main.innerHTML = portfolio; 
        main.classList.remove("black");
        main.classList.add("white");
    }
    if (contactLi.classList.contains("active")) {
        main.innerHTML = Contact;
        main.classList.remove("white");
        main.classList.add("black");
    }
  });

});
hamburger.innerHTML = hum;
if(window.innerWidth < 768){
  side.style.display = "none";
  hamburger.style.display = "block";
}

if(window.innerWidth > 768){
  side.style.display = "flex";
  hamburger.style.display = "none";
}
      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-open");
        hamburger.classList.toggle("is-closed");
        if(hamburger.classList.contains("is-open")){
          side.style.display = "flex";
        }
        if(hamburger.classList.contains("is-closed")){
          side.style.display = "none";
        }
      });