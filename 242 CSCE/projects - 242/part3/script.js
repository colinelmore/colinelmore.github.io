const toggleHam = () => {
    document.getElementById("small-nav").classList.toggle("hidden");
    console.log("works");
};

const showAlert = () => {
    alert("Lift added!");
}

document.addEventListener("DOMContentLoaded", function(){
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-form");
    const errorMessage = document.getElementById("error-message");
    const errorLog = document.getElementById("error-log");

    console.log("Submit Button Clicked");
    contactForm.addEventListener("submit", function (e) {
        console.log("Submit button clicked");
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        errorLog.innerHTML = "";
        errorLog.style.display = "none";

        if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            errorLog.style.display = "block";
            errorLog.innerHTML = "Please fill in all required fields";
        }else{
            const emailParams = {
                name: name,
                email: email,
                message: message,
            };
            emailjs.send()
            .then(function (response) {
                console.log('SUCCESS', response.status, response.text);
                successMessage.style.display = "block";
                errorMessage.style.display = "none";
                contactForm.reset();
            }, function (error) {
                console.log("EmailJS error:", error);
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
                errorLog.style.display = "block";
                errorLog.innerHTML = "An error occured while sending the email. Please try again later"
            })
        }
    })
});

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHam;
    document.getElementById("small-nav").classList.add("hidden");
    document.getElementById("add-lift").onclick = showAlert;
};