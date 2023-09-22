const hide1 = () => {
    document.getElementById("section1").classList.toggle("hide");
    document.getElementById("section2").classList.remove("hide");
}
const hide2 = () => {
    document.getElementById("section2").classList.toggle("hide");
    document.getElementById("section1").classList.remove("hide");
}


const ageSort = () =>{
    const name1 = document.getElementById("txt-name1").value;
   
    const age1 = document.getElementById("txt-age1").value;

    const name2 = document.getElementById("txt-name2").value;

    const age2 = document.getElementById("txt-age2").value;

    const name3 = document.getElementById("txt-name3").value;

    const age3 = document.getElementById("txt-age3").value;

    const sortDiv = document.getElementById("age-sort");

    if(age1<=0 | age2<=0 | age3 <=0)
    {
        sortDiv.innerHTML = "invalid ages";
    }
    else{
        if (age1 >= age2 && age1 >= age3) {
            if (age2 >= age3) {
                 sortDiv.innerHTML= name1 + ", " + name2 + ", " + name3;
            } else {
                sortDiv.innerHTML= name1 + ", " + name3 + ", " + name2;
            }
        } else if (age2 >= age1 && age2 >= age3) {
            if (age1 >= age3) {
                sortDiv.innerHTML= name2 + ", " + name1 + ", " + name3;
            } else {
                sortDiv.innerHTML= name2 + ", " + name3 + ", " + name1;
            }
        } else {
            if (age1 >= age2) {
                sortDiv.innerHTML= name3 + ", " + name1 + ", " + name2;
            } else {
                sortDiv.innerHTML= name3 + ", " + name2 + ", " + name1;
            }
        }
    }
};

const fundsLevel = () => {
    const amount = document.getElementById("total-funds").value;

    const root = document.querySelector(":root");

    if(amount < 0 || amount > 10000){
    root.style.setProperty("--percent", "0%");
   }
   else if (amount > 0 && amount <= 2500){
    root.style.setProperty("--percent", "25%");
   }
   else if (amount > 2500 && amount <= 5000){
    root.style.setProperty("--percent", "50%");
   }
   else if(amount > 5000 && amount <= 7500){
    root.style.setProperty("--percent", "75%");
   }
   else if (amount >= 7500 && amount <= 10000)
   {
    root.style.setProperty("--percent", "100%");
   }
   else{
    root.style.setProperty("--percent", "0%");
   }
   
}

window.onload = () => {
    document.getElementById("txt-age-button").onclick = ageSort;
    document.getElementById("fund").onclick = hide1;
    document.getElementById("oldest").onclick = hide2;
    document.getElementById("section2").classList.add("hide");
    document.getElementById("display-funds").onclick = fundsLevel;
}