const main = document.querySelector("#main");
const portfolio = document.querySelector("#Portfolio");
const active = document.querySelectorAll("li");
const aboutLi = document.querySelector(".li-about");
const side = document.querySelector(".side");
const homeLi = document.querySelector(".li-home");
const contactLi = document.querySelector(".li-contact");
const portfolioLi = document.querySelector(".li-Portfolio");
const hamburger = document.querySelector("#hamburger");
const svg = document.querySelectorAll(".svg");
const svgRing = document.querySelector(".svg-ring");
const img = document.querySelector(".img");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const con1 = document.querySelector(".con1");
const con2 = document.querySelector(".con2");
const con3 = document.querySelector(".con3");
const form = document.querySelector("form");
const message = document.querySelector(".message");

radio1.addEventListener("click", () => {
  con1.style.display = "flex";
  con2.style.display = "none";
  con3.style.display = "none";
});
radio2.addEventListener("click", () => {
  con1.style.display = "none";
  con2.style.display = "flex";
  con3.style.display = "none";
});

radio3.addEventListener("click", () => {
  con1.style.display = "none";
  con2.style.display = "none";
  con3.style.display = "flex";
});

////////////////////////
active.forEach((link) => {
  link.addEventListener("click", () => {
    active.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

//////////////////////
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-open");
  hamburger.classList.toggle("is-closed");
  if (hamburger.classList.contains("is-open")) {
    side.style.display = "flex";
    svg.forEach((svg) => {
      svg.style.background = "white";
    });
    svgRing.style.stroke = "white";
  }
  if (hamburger.classList.contains("is-closed")) {
    side.style.display = "none";
    svg.forEach((svg) => {
      svg.style.backgroundColor = "black";
    });
    svgRing.style.stroke = "black";
  }
});

let state;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let text = document.querySelector("#text").value;
  const data = {
    name,
    email,
    text,
  };
  try {
    fetch("https://yalla-be.onrender.com/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => (state = data))
      .catch((err) => (state = err));
    console.log(state.error);
  } catch (error) {
    console.log(error);
  }
  setTimeout(() => {
    if (state.error) {
      message.textContent = state?.error;
    } else {
      message.textContent = state?.message;
    }
  }, 1000);
});

// log when scroll
window.addEventListener("scroll", () => {
  if (
    (window.scrollY > 0 && window.scrollY < 700) ||
    (window.scrollY > 1700 && window.scrollY < 2600)
  ) {
    side.classList.remove("side-active");
    side.classList.add("side");
  } else if (
    (window.scrollY > 700 && window.scrollY < 1700) ||
    (window.scrollY > 2600 && window.scrollY < 3100)
  ) {
    side.classList.add("side-active");
  }
  if (
    (window.scrollY > 0 &&
      window.scrollY < 640 &&
      !hamburger.classList.contains("is-open")) ||
    (window.scrollY > 2160 &&
      window.scrollY < 3040 &&
      !hamburger.classList.contains("is-open"))
  ) {
    svg.forEach((svg) => {
      svg.style.background = "black";
    });
    svgRing.style.stroke = "black";
  } else if (
    (window.scrollY > 640 &&
      window.scrollY < 2160 &&
      !hamburger.classList.contains("is-open")) ||
    (window.scrollY > 3040 &&
      window.scrollY < 3100 &&
      !hamburger.classList.contains("is-open"))
  ) {
    svg.forEach((svg) => {
      svg.style.background = "white";
    });
    svgRing.style.stroke = "white";
  }
});
