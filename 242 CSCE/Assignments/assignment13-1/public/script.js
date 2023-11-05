const showSports = async () => {
    let response = await fetch("http://localhost:4000/api/sports");
    let sportsJSON = await response.json();
    let sportDiv = document.getElementById("sport-div");

    sportsJSON.forEach((sports) => {
        let section = document.createElement("section");
        sportDiv.append(section);

        let name = document.createElement("h3");
        section.append(name);
        name.innerHTML = sports.name;

        let team = document.createElement("p");
        section.append(team);
        team.innerHTML = "Team: " + sports.team;

        let state = document.createElement("p");
        section.append(state);
        state.innerHTML = "State: " + sports.state;


        let img = document.createElement("img");
        section.append(img);
        img.src ="http://localhost:4000/" + sports.img;

        let colors = document.createElement("p");
        section.append(colors);
        colors.innerHTML = "Colors: " + sports.colors;

        let equipment = document.createElement("p");
        section.append(equipment);
        equipment.innerHTML = "Equipment: " + sports.equipment;

        
    });
};

window.onload = () => {
    showSports();
}