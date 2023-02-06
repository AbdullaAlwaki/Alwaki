const portfolio = document.querySelector("#Portfolio");


const projects = [
    {
        title: "Restaurant Website",
        img : "./restaurant.gif",
        description: "",
        link: "https://mern-restaurant.onrender.com/"
    },
    {
        title: "Project 2",
        img : "https://picsum.photos/200/300",
        description: "Project 2 description"
    },
    {
        title: "Project 3",
        img : "https://picsum.photos/200/300",
        description: "Project 3 description"
    }
];
portfolio.innerHTML = `
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
    })}</div>`;
