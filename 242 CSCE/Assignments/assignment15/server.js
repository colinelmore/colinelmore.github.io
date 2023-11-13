const mongoose = require("mongoose");

mongoose
    .connect("mongob://localhost/recipes")
    .then(() => console.log("Couldnt connect to mongodb", error));

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

const crateRecipe = async () => {
    const recipe = new Recipe({
        name: "Banana Bread",
        description: "So Yummy!",
        ingredients: ["bananas", "flour", "sugar"],
    });
    const result = await recipe.save();
    console.log(result);
}

createRecipe();