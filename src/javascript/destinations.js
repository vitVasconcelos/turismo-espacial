
const destinationLinks = document.querySelectorAll(".menu-nav a");

destinationLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); 

    destinationLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

const data = {
  moon: {
    name: "MOON",
    description: "  See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: "/src/imagens/image-moon.png",
    distance: " 384,400 km",
    time: "3 DAYS"
  },
  mars: {
    name: "MARS",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: "/src/imagens/image-mars.png",
    distance: "225 MIL. KM",
    time: "9 MONTHS"
  },
  europa: {
    name: "EUROPA",
    description: "  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: "/src/imagens/image-europa.png",
    distance: "628 MIL. KM",
    time: "3 YEARS"
  },
  titan: {
    name: "TITAN",
    description: "  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: "/src/imagens/image-titan.png",
    distance: "1.6 BIL. KM",
    time: "7 YEARS"
  }
};



const img = document.getElementById("planet-image");
const nameEl = document.getElementById("planet-name");
const descEl = document.getElementById("planet-description");
const distEl = document.getElementById("planet-distance");
const timeEl = document.getElementById("planet-time");

destinationLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

   
    const dest = this.dataset.dest;
    const info = data[dest];

    img.src = info.image;
    img.alt = info.name;
    nameEl.textContent = info.name;
    descEl.textContent = info.description;
    distEl.textContent = info.distance;
    timeEl.textContent = info.time;
  });
});


const defaultPlanet = "mars";
const info = data[defaultPlanet];

img.src = info.image;
img.alt = info.name;
nameEl.textContent = info.name;
descEl.textContent = info.description;
distEl.textContent = info.distance;
timeEl.textContent = info.time;