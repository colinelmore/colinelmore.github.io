class Toy{
    constructor(type, price, ageRange, stars, pic){
    this.type = type;
    this.price = price;
    this.ageRange = ageRange;
    this.stars = stars;
    this.pic = pic;
    }
    
    get ToyDetails(){
        const section = document.createElement("section");
        section.classList.add("toy");
        const h3 = document.createElement("h3");
        h3.classList.add("hidden");
        h3.innerHTML = this.type;

        const ul = document.createElement("ul");
        ul.classList.add("hidden");
        ul.append(this.listItem("Age Range: " + this.ageRange));
        ul.append(this.listItem("Price: " + this.price));
        ul.append(this.listItem("Stars: " + this.stars));
        section.append(h3);
        section.append(ul);

        const pic = document.createElement("img");
        section.append(pic);
        pic.src = "images/" + this.pic;

        section.onmouseover = () => {
            h3.classList.remove("hidden");
            ul.classList.remove("hidden");
            pic.classList.add("transparent");
        }
        section.onmouseout = () => {
            h3.classList.add("hidden");
            ul.classList.add("hidden");
            pic.classList.remove("transparent");
        }
        return section;
    }
    listItem(info){
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const showToys = () => {
    const list = document.getElementById("list");
    const toys = [];

    toys.push(new Toy("Basketball", 15.60, "ages 5-25", 4, "basketball.png"));
    toys.push(new Toy("Baseball Glove", 30.50, "ages 10+", 5, "glove.png"));
    toys.push(new Toy("Golf Balls", 17.36, "ages 15+", 3, "golf.png"));
    toys.push(new Toy("Soccer Ball", 12.99, "ages 5+", 4, "soccer.png"));
    toys.push(new Toy("Toy Car",8.35, "ages 4+", 4, "car.png"));
    toys.push(new Toy("Spider Man", 20.67, "ages 6-20", 4, "spider.png"));

    toys.forEach((toy) => {
        list.append(toy.ToyDetails);
    });
}

const displayToyDetails = () => {
    const list = document.getElementById("list");
    const toys = [];
}

window.onload = () => {
    showToys();
}