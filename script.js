function checkName() {
    const nameInput = document.getElementById("nameInput").value.toLowerCase();
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    const popupImage = document.getElementById("popupImage");

    if (nameInput === "anik") {
        popupMessage.textContent = "You're a true man! You actually are Anik!";
        popupImage.style.display = "none"; 
    } else if (nameInput === "arpan") {
        window.location.href = "https://herta.eu.org/";
    } else if (nameInput === "nigga") {
        popupMessage.textContent = "Hello Nigga!";
        popupImage.src = "./nigga.jpg"; 
        popupImage.style.display = "block"; 
    } else {
        popupMessage.textContent = `Nigga enter your real name. You entered: ${nameInput}`;
        popupImage.style.display = "none"; 
    }

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    popup.style.display = "none";
    popupImage.src = ""; 
}
