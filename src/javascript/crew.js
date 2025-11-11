const bolinhas = document.querySelectorAll(".bolinha");


const occupation = document.getElementById("occupation-name");
const name = document.getElementById("name");
const text = document.getElementById("text");
const image = document.querySelector(".image img");


const crewData = {
  conteudo1: {
    occupation: "Commander",
    name: "Douglas Hurley",
    text: " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2",
    img: "./src/imagens/image-douglas-hurley.png"
  },
  conteudo2: {
    occupation: "Pilot",
    name: "Victor Glover",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "./src/imagens/image-victor-glover.png"
  },
  conteudo3: {
    occupation: "Mission Specialist",
    name: "Mark Shuttleworth",
    text: "  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "./src/imagens/image-mark-shuttleworth.png"
  },
  conteudo4: {
    occupation: "Flight Engineer",
    name: "Anousheh Ansari",
    text: "  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: "./src/imagens/image-anousheh-ansari.png"
  }
};


bolinhas.forEach(bolinha => {
  bolinha.addEventListener("click", () => {
  
    bolinhas.forEach(b => b.classList.remove("ativa"));

    bolinha.classList.add("ativa");

    const target = bolinha.dataset.target;
    const crew = crewData[target];

    occupation.textContent = crew.occupation;
    name.textContent = crew.name;
    text.textContent = crew.text;
    image.src = crew.img;
  });
});
