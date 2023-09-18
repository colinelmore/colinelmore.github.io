const showPic = () => {
    document.getElementById("pic").classList.remove("hide");
}

const hidePic = () => {
    document.getElementById("pic").classList.add("hide");
}
const pulse = () => {
    let ballElement = document.getElementById("ball");
    ballElement.classList.add("pulse");
    ballElement.classList.remove("pulse");
};

const review = () => {

    const productName = document.getElementById("txt-product-name").value;

    const reviewDiv = document.getElementById("review");
    
    const comment = document.getElementById("txt-comment").value;

    const rating = document.getElementById("txt-rating").value;

    const userName = document.getElementById("txt-user-name").value;
    
    reviewDiv.innerHTML += "<br>" + "by: " + userName + "<br>"
    + rating + "/5 Stars" + "<br>"
    + comment + "<br>"
    + productName + "<br>";
};


window.onload = () => {
   document.getElementById("button-show").onclick = showPic;
   document.getElementById("button-hide").onclick = hidePic;
   document.getElementById("pulse-button").onclick = pulse;
   document.getElementById("message-button").onclick = review;
}