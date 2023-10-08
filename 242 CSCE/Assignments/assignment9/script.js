window.onload = () => { 
    setInterval(slide, 2000);
}

const slide = () =>{
    const currentQuote = document.querySelector("#quotes :not(.hidden");
    currentQuote.classList.add("hidden");
    let nextQuote = currentQuote.nextElementSibling;

    if(nextQuote == null){
        nextQuote = document.querySelector("#quotes :first-child")
    }
    nextQuote.classList.remove("hidden")
}

/* Rainbow */
 document.addEventListener("DOMContentLoaded", function(){
    const rainbowButton = document.getElementById("rainbow-button");
    const rainbowContainer = document.getElementById("rainbow");
    const potOfGoldImage = document.getElementById("pot-of-gold");

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    function createRainbow(){
        rainbowButton.disabled = true;
        potOfGoldImage.style.display = "none";
        rainbowContainer.innerHTML = '';
        colors.forEach((color, index) => {
            setTimeout(() => {
                const bar = document.createElement("div");
                bar.style.backgroundColor = color;
                bar.classList.add("rainbow-bar");
                rainbowContainer.appendChild(bar);

                if(index == colors.length - 1){
                    setTimeout(() => {
                        potOfGoldImage.style.display = "block";
                        rainbowButton.disabled = false;
                    }, 500);
                }
            }, index * 1000)
        })
    }
    rainbowButton.addEventListener("click", createRainbow);
 });
