import pic from './restaurant1.jpg';




function component(){



    const element = document.createElement("div");

    const img = new Image();
    img.classList.add('main-image');
    img.src = pic;
    element.appendChild(img);
    console.log("hello");
    return element;
}


export {component};