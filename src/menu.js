import pic from './menu.jpg';




function component(){



    const element = document.createElement("div");

    const img = new Image();
    img.classList.add('main-image');
    img.src = pic;
    element.appendChild(img);
    console.log("menu");
    return element;
}


export {component};