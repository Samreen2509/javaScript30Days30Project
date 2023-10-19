const iconList = document.querySelector(".iconlist");
const NavBar = document.querySelector(".navBar");
const toggleBar = () =>{
   NavBar.classList.toggle("active");
}
iconList.addEventListener("click", () => toggleBar())