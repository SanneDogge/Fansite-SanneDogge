let myInput = document.querySelector("#myInput");
let myButton = document.querySelector("#myButton");
let myImage = document.querySelector("#myImage");
let myResultaat = document.querySelector("#resultaat");


myButton.addEventListener("click", function () {
let answer = myInput.value.trim().toLowerCase();



if (answer === "jan bellows") {
myImage.style.backgroundImage = "url('Image2/Jan.webp')";

myResultaat.textContent = "Good job!";
myResultaat.style.color = "green";
    }

else {
 myResultaat.textContent = "Try again!";
 myResultaat.style.color = "red";
    }
});