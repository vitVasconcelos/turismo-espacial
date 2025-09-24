const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

let menuList = document.getElementById("nav"); // Alterei para 'nav', que é o elemento principal

function showMenu() {
    menuList.classList.toggle("open"); 
}