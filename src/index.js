console.log("Hello restaurant");
import pic from './restaurant1.jpg';
import './style.css';

import { component as contactPage } from "./contact";
import { component as homePage } from "./home";
import{component as menuPage} from './menu';
let currentPage = "home"


export function component() {

    const homeButton = document.createElement('button');
    homeButton.innerHTML = "Home"
    const menuButton = document.createElement('button');
    menuButton.innerHTML = "Menu"
    const contactButton = document.createElement('button');
    contactButton.innerHTML = "Contact"

    const element = document.createElement('div');

    element.appendChild(homePage());

    contactButton.addEventListener("click", function () {

     
        if(currentPage === "contact"){
            return;
        }

       element.childNodes[0].replaceWith(contactPage());
        currentPage = "contact";

    });



    menuButton.addEventListener("click", function () {

        if(currentPage === "menu"){
            return;
        }

        element.childNodes[0].replaceWith(menuPage());
        currentPage = "menu";
       
    });


    homeButton.addEventListener("click", function(){

        if(currentPage === "home"){
            return;
        }
        element.childNodes[0].replaceWith(homePage());
        
        currentPage = "home";
    });




    const navbar= document.createElement('div');
    const footer = document.createElement('div');

    navbar.classList.add("top");
    footer.classList.add("bottom");
    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    document.body.appendChild(navbar);


    
    document.body.appendChild(element);






    document.body.appendChild(footer);
    return element;
}

// document.body.append(content.appendChild(component()));

component();

