document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("menu-button").addEventListener('click', showMenu);
    document.getElementById("close-menu").addEventListener('click', clearMenu);



    function showMenu(){
        const menu = document.querySelector(".menu");
        menu.style.height = "100%";

    }

    function clearMenu(){
        const menu = document.querySelector(".menu");
        menu.style.height = "0";
    }

    function addClickToMenuItem(){
        const menuItems = document.querySelectorAll(".menu nav ul>li");
        console.log(menuItems)
        for (let menuItem of menuItems){
            menuItem.addEventListener('click', clearMenu)
        }
    }

    addClickToMenuItem();

})