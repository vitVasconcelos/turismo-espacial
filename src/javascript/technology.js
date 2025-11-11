const buttons = document.querySelectorAll(".button");

const name = document.getElementById("name");
const text = document.getElementById("text");
const photo = document.getElementById("photo");

const technologyData ={
    1:{
        name: "LAUNCH VEHICLE",
        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry apayload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,it's quite an awe-inspiring sight on the launch pad!",
        photo:"./src/imagens/image-launch-vehicle-portrait.jpg"
    },
    2:{
        name:"Spaceport",
        text:" A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        photo:"./src/imagens/image-spaceport-portrait.jpg"
    },
    3:{
        name:"Space capsule",
        text:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        photo:"./src/imagens/image-space-capsule-portrait.jpg"
    }

}
buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const target = button.dataset.target;
        const technology = technologyData[target];

        name.textContent = technology.name;
        text.textContent = technology.text;
        photo.src = technology.photo;
    });
});
