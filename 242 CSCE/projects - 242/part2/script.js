const toggleHam = () => {
    document.getElementById("small-nav").classList.toggle("hidden");
    console.log("works");
};

const showAlert = () => {
    alert("Lift added!");
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHam;
    document.getElementById("small-nav").classList.add("hidden");
    document.getElementById("add-lift").onclick = showAlert;
};