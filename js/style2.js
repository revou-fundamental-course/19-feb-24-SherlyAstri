// JavaScript for form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    } else {
        alert("Please fill in all fields.");
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("message").value;

    if (name.trim() === "" || birthdate.trim() === "" || !gender || message.trim() === "") {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent the form from submitting
    } else {
        var selectedGender = gender.value;
        console.log("Name: " + name);
        console.log("Date of Birth: " + birthdate);
        console.log("Gender: " + selectedGender);
        console.log("Message: " + message);
    }
});

// Slideshow
var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (slideIndex >= slides.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}
