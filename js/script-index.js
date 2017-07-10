$(document).ready(function() {

    //ETAPA 1: esconder menú y flecha según corresponda

    $(".nav-item").on(function(event) {
        $("#arrow").hide();
        $("#menu").show();
    });

    // ETAPA 2: función printNews 

    function printNews() {
        $('<p>NUEVAS RECETAS</p>').appendTo('#news');
    }

    printNews();
    // $("p").text("NUEVAS RECETAS"); -> Con jQuery se puede hacer más simple}


    //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
    renderHighlightedRecipes(recipesArray);

});

//-----------ETAPA 3: 
/*
 * Función que se encarga de pintar TODAS las recetas que tengan 
 * marcado el atributo "highlighted" como TRUE
 */
function renderHighlightedRecipes(recipesArray) {

    recipesArray.forEach(function(element) {
        if (element.highlighted == true) {
            console.log(element);
        }
    });

}

renderHighlightedRecipes(recipesArray)
console.log('Recipes: ', recipesArray);


/*
 * Función que se encarga de pintar UNA recetas que tenga 
 * marcado el atributo "highlighted" como TRUE
 * Aqui se tiene que crear el HTML que esta en el 
 * archivo "templates/templates-recipe.html"
 */
function renderRecipe(recipe) {
    console.log('Voy a pintar la receta: ', recipe);
}



/*
 * Función que se encarga de pintar todas las actividades
 */
function renderActivities(activitiesArray) {
    console.log('Activities: ', activitiesArray);
}

/*
 * Función que se encarga de pintar una actividad
 * Aqui se tiene que crear el HTML que esta en el 
 * archivo "templates/templates-activity.html"
 */
function renderActivity(recipe) {

}