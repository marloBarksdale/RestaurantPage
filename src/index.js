console.log("Hello restaurant");
import pic from './restaurant1.jpg';


const content = document.createElement('div');

function component() {

    
    const element = document.createElement('div');

    element.textContent = "Hello from Restaurant";
    const img = new Image();

     img.src = pic;

    element.appendChild(img);

    return element;
}

document.body.append(content.appendChild(component()));