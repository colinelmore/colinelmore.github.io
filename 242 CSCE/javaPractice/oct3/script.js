const slide = () =>{
    const currentIamge = document.querySelector("#slidehow :not(.hidden");
    currentImage.classList.add("hidden");
    let nextImage = currentIamge.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("slideshow :first-chold")
    }
    nextImage.classList.remove("hidden")
}

window.onload = () => { setInterval(slide, 1000);}