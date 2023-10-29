const getLifts = async () => {
    const url = "https://colinelmore.github.io/242%20CSCE/projects%20-%20242/part4/lifts.json";

    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

const showLifts = async() => {
    let lifts = await getLifts();
    let liftsSection = document.getElementById("lift-section");
    lifts.forEach((lift) => liftsSection.append(getLiftItem(lift)));
};

const getLiftItem = (lift) => {
    const liftSection = document.createElement("section");
    liftSection.classList.add("lift");
    liftSection.classList.add(lift.category);

    console.log(lift);
  
    const img = document.createElement("img");
    img.src = "https://colinelmore.github.io/242%20CSCE/projects%20-%20242/part4/lifts.json/" + lift.img;

    const h5 = document.createElement("h5");
    h5.innerText = lift.name;

    const p = document.createElement("p")
    p.innerText = lift.description;

    const button = document.createElement("button");
    button.innerHTML = "Add Lift";

    liftSection.append(img);
    liftSection.append(h5);
    liftSection.append(p);
    liftSection.append(button);
    return liftSection;
  };


showLifts();

const showLegs = () => {
  //document.getElementsByClassName("legs").classList.toggle("hidden");
  
};

//document.getElementById("show-legs").onclick = showLegs;


window.onload = () => {
 document.getElementById("legs").classList.add("hidden");
  //document.getElementById("show-legs").onclick = showLegs;
  console.log("works");
}

