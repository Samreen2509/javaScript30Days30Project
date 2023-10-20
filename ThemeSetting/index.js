const menu_icon=document.querySelector(".menuicon");
const nav_Bar=document.querySelector(".navBar");

const toggleNavBar = () =>{
      nav_Bar.classList.toggle("active")
}
menu_icon.addEventListener("click",() =>toggleNavBar());

const darktheme = document.querySelector(".themesetting");
const listItem = document.querySelector("body")
const toggleTheme = () =>{
      listItem.classList.toggle("dark-theme");
}
darktheme.addEventListener("click",() => toggleTheme());
