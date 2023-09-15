const showPic = () => {
    document.getElementById("pic").classList.remove("hide");
}

const hidePic = () => {
    document.getElementById("pic").classList.add("hide");
}
const bounceBall = () => {
    let ballElement = document.getElementById("ball");
    ballElement.classList.add("pulse");
};
const productName = () => {
    const productName = document.getElementById("txt-product-name").value;
    const messageP = document.getElementById("product");
    messageP.innerHTML = productName;

    const comment = document.getElementById("txt-comment").value;
    const messageB = document.getElementById("comment");
    messageB.innerHTML = comment;

    const rating = document.getElementById("txt-rating").value;
    const messageA = document.getElementById("rating");
    messageA.innerHTML = rating +"/5 Stars";

    const userName = document.getElementById("txt-user-name").value;
    const messageC = document.getElementById("user-name");
    messageC.innerHTML = "by:" + userName;
};


/*
const comment = () =>{
    const comment = document.getElementById("txt-comment").value;
    const messageA = document.getElementById("comment");
    messageA.innerHTML = comment;
}

const rating = () =>{
    const comment = document.getElementById("txt-rating").value;
    const messageB = document.getElementById("rating");
    messageB.innerHTML = comment;
}

const userName = () =>{
    const userName = document.getElementById("txt-user-name").value;
    const messageC = document.getElementById("user-name");
    messageC.innerHTML = userName;
}
*/


window.onload = () => {
   document.getElementById("button-show").onclick = showPic;
   document.getElementById("button-hide").onclick = hidePic;
   document.getElementById("bounce-button").onclick = bounceBall;
   document.getElementById("message-button").onclick = productName;
}