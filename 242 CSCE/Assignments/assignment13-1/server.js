const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.hmtl");
});

app.get("/api/sports", (req, res) => {
    const sports = [];

    sports[0] = {
        name: "Baseball",
        team:"Braves",
        state:"Georgia",
        img:"images/braves.png",
        colors:"Red, White, and Blue",
        equipment:
        [
            "Baseball",
            " Baseball Glove",
            " Bat"
        ]
    };
    sports[1] = {
        name: "Football",
        team:"Falcons",
        state:"Georgia",
        img:"images/falcons.jpeg",
        colors:"Red and Black",
        equipment:
        [
            "Helmet",
            " Football",
            " Cleats"
        ]
    };
    sports[2] = {
        name: "Basketball",
        team:"Hornets",
        state:"North Carolina",
        img:"images/hornets.png",
        colors:"Light Blue and White",
        equipment:
        [
            "Basketball",
            " Shoes",
            " Headband",
            " Cones"
        ]
    };
    sports[3] = {
        name: "Hockey",
        team:"Swamp Rabbits",
        state:"South Carolina",
        img:"images/swampRabits.png",
        colors:"Orange and Blue",
        equipment:
        [
            "Stick",
            " Skates",
            " Puck"
        ]
    };
    sports[4] = {
        name: "Soccer",
        team:"Atlanta United",
        state:"Georgia",
        img:"images/atlantaUnited.jpeg",
        colors:"Red and Gold",
        equipment:
        [
            "Soccer Ball",
            " Cleats",
            " Goaly Gloves"
        ]
    };

    res.json(sports);
});

app.listen(4000, () => {
    console.log("Listening");
});