const getLifts = async () => {
    const json = "lifts.json";

    try {
      const response = await fetch(json);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

const showLift = async() => {
    let lift = await getLifts();
    let liftsSection = document.getElementById("lift-section");

    lifts.name.forEach((lift) =>
    cocktailsSection.append(getLiftItem(lift))
    );
};

const getLiftlItem = (lift) => {
    const liftSection = document.createElement("section");
    liftSection.classList.add("lift");
  
    console.log(lift);
  
    const h5 = document.createElement("h5");
    h5.innerText = lifts.name;
    const p = document.createElement("p")
    p.innerText = lifts.description;
    cocktailSection.append(h5);
    cocktailSection.append(p);
    return liftSection;
  };

showLift();
