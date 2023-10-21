
const iconList = document.querySelector(".iconlist");
const NavBar = document.querySelector(".navBar");
const toggleBar = () =>{
   NavBar.classList.toggle("active");
}
iconList.addEventListener("click", () => toggleBar())
// For dark theme setting
const darktheme = document.querySelector(".themesetting");
const listItem = document.querySelector("body")
const toggleTheme = () =>{
      listItem.classList.toggle("dark-theme");
}
darktheme.addEventListener("click",() => toggleTheme());

