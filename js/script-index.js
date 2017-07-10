$(document).ready(function() {

    //----------ETAPA 1: esconder menú y flecha según corresponda

    $(".nav-item").on(function(event) {
        $("#arrow").hide();
        $("#menu").show();
    });

    //-----------ETAPA 2: función printNews 

    function printNews() {
        $('<p>NUEVAS RECETAS</p>').appendTo('#news');
    }
    printNews();
    // $("p").text("NUEVAS RECETAS"); -> Con jQuery se puede hacer más simple}


    //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
    renderHighlightedRecipes(recipesArray);
    renderActivities(activitiesArray);
    renderActivity(activitiesArray)
        //console.log(activitiesArray);

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
            renderRecipe(element);
        }
    });

}


//-----------ETAPA 4: 
/*
 * Función que se encarga de pintar UNA recetas que tenga 
 * marcado el atributo "highlighted" como TRUE
 * Aqui se tiene que crear el HTML que esta en el 
 * archivo "templates/templates-recipe.html"
 */
function renderRecipe(recipe) {

    $(".list-recipes").append('<a class="item-recipe" href="#">' +
        '<span class="attribution">' +
        '<span class="title-recipe">' + recipe.title + '</h3></span>' +
        '<span class="metadata-recipe">' +
        '<span class="author-recipe">' + recipe.source.name + '</span>' +
        '<span class="bookmarks-recipe">' +
        '<span class="icon-bookmark">' + '</span>' +
        '</span>' +
        '</span>' +
        '</span>' +
        '<img src="img/recipes/320x350/' + recipe.name + '.jpg" alt="image">' +
        '</a>')
}


//-----------ETAPA 5: 
/*
 * Función que se encarga de pintar todas las actividades
 */


function renderActivities(activitiesArray) {
    activitiesArray.forEach(function(e) {
        console.log(e);
        renderActivity(e);
    })
    if (activitiesArray.length > 0) {
        $(".wrapper-message").hide();
    }
}

//console.log('Activities: ', activitiesArray);

/*
 * Función que se encarga de pintar una actividad
 * Aqui se tiene que crear el HTML que esta en el 
 * archivo "templates/templates-activity.html"
 */
function renderActivity(activity) {

    var name = activity.userName.split(/[ ,]+/); //para poder conseguir solo el nombre del usuario.
    console.log(name);

    $(".list-activities").append('<a href="#" class="item-activity">' +
        '<span class="attribution">' +
        '<span class="avatar">' + '<img src=' + activity.userAvatar + 'class="image-avatar">' +
        '</span>' + '<span class="meta">' +
        '<span class="author">' + name[0] + '</span>' + " made " +
        '<span class="recipe">' + activity.recipeName + '</span>' + ': ' + activity.text +
        '<span class="location"> ' + activity.place + '</span>' + '</span>' +
        '</span>' +
        '<div class="bg-image" style="background-image: url(' + activity.image + ');">' + '</div>' +
        '</a>')
}