const toggleHam = () => {
    document.getElementById("small-nav").classList.toggle("hidden");
};

const showAlert = () => {
    alert("Lift added!");
}


const showEmailResult = async (e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    let response = await getEmailResult();
    if(response.status == 200) {
        result.innerHTML = "Email sent successfully";
    } else {
        result.innerHTML = "Email was unsuccessful";
    }
}

const getEmailResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "please wait...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return response;
    } catch(error){
        console.log(error);
        document.getElementById("result").innerHTML = "Sorry your email could not be sent";
    }
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHam;
    document.getElementById("small-nav").classList.add("hidden");
    document.getElementById("contact-form").onsubmit = showEmailResult;
};