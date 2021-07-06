export default function() {

    //Cache DOM
    let content = document.querySelector("#content");

    //Create contact elements
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");
    let textDiv = document.createElement("div");
    textDiv.classList.add("contactItems");
    let mapDiv = document.createElement("div");
    mapDiv.classList.add("contactItems");
    let mapImg = new Image();
    mapImg.src = "imgs/map.png"
    mapImg.classList.add("contactImg");

    //Create and append text elements to the textDiv
    let number = document.createElement("p");
    number.classList.add("contactText");
    number.textContent = "Phone Number: 123-456-7890"
    let address = document.createElement("p");
    address.classList.add("contactText");
    address.textContent = "Address: 1012 NY-24, Flanders, NY 11901"
    let message = document.createElement("p");
    message.classList.add("contactText");
    message.textContent = "Check us out on Google Streetview!!!";
    textDiv.appendChild(number);
    textDiv.appendChild(address);
    textDiv.appendChild(message);

    mapDiv.appendChild(mapImg);
    contactDiv.appendChild(textDiv);
    contactDiv.appendChild(mapDiv);
    content.appendChild(contactDiv);

}