window.onload = () => {
    document.getElementById("display-funds").onclick = fundsLevel;
} 

const fundsLevel = () => {
    const amount = document.getElementById("total-funds").value;

    const root = document.querySelector(":root");

    if(amount < 0 || amount > 10000){
    root.style.setProperty("--percent", "0%");
   }
   else if (amount > 0 && amount <= 2500){
    root.style.setProperty("--percent", "25%");
    red.style.height = "25%";
    red.style.backgroundColor = backgroundColor;
   }
   else if (amount > 2500 && amount <= 5000){
    root.style.setProperty("--percent", "50%");
    red.style.height = "50%";
    red.style.backgroundColor = backgroundColor;
   }
   else if(amount > 5000 && amount <= 9999){
    root.style.setProperty("--percent", "75%");
    red.style.height = "75%";
    red.style.backgroundColor = backgroundColor;
   }
   else if (amount == 10000)
   {
    root.style.setProperty("--percent", "100%");
    red.style.height = "100%";
    red.style.backgroundColor = backgroundColor;
   }
   else{
    root.style.setProperty("--percent", "0%");
   }
   
}
document.addEventListener("DOMContentLoaded", function(){
    const imageLink = document.getElementById("image-link");
    const runner = document.getElementById("runner");
    let isRunning = false;
    let leftMargin = 0;
    const maxLeftMargin = 510;
    const animationSpeed = 3;
    const switchInterval = 50;
    let lastSwitchTime = 0;

    function toggleRunning(){
        isRunning = !isRunning;
        if(isRunning){
            runner.src = "running242.png";
        }else{
            runner.src = "walking242.png"
        }
    }

    function moveImage() {
        if(leftMargin < maxLeftMargin){
            leftMargin += animationSpeed;
            runner.style.marginLeft = leftMargin + "px";

            const currentTime = Date.now();
            if(currentTime - lastSwitchTime >= switchInterval){
                toggleRunning();
                lastSwitchTime = currentTime;
            }
            requestAnimationFrame(moveImage);
        }else{
            leftMargin = 0;
            runner.style.marginLeft = "0px";
            toggleRunning();
        }
    }
    imageLink.addEventListener("click", function(e) {
        if(!isRunning){
            toggleRunning();
            moveImage();
            lastSwitchTime = 0;
        }
    });
});
