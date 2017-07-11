$(document).ready(function() {
    console.log("HTML de Recipe listo");

    //Esto es extra: 
    renderReceta(recipesArray);
    renderMake(recipesArray);
    ingredientes(recipesArray);

    function renderReceta(recipesArray) {

        recipesArray.forEach(function(e) {
            console.log(e);
            renderMake(e);
        });
    }

    function renderMake(recipe) {

        $("#receta").append('<h1 class="title-recipe">' + recipe.title + '</h1>' +
            '<div class="metadata-wrapper">' +
            '<p class="description-recipe">' + recipe.excerpt + '</p>' +
            '<span class="source">' + recipe.source.name + '</span>' +
            '<span class="time">' + recipe.cookTime + '</span>' +
            '</div>' +
            '<div class="btns-group">' +
            '<a class="btn-secondary js-show-recipe">' + 'Recipe' + '</a>' +
            '<a class="btn-secondary js-show-make">' + 'Make It' + '</a>')


        //------ Etapa 8
        //funcion para .js-show-recipe

        $(".js-show-recipe").click(function() {
            $(".page").removeClass("make");
            $(".btn-secondary js-show-recipe").addClass("active");
            $(".title-page").empty();
            $(".subtext-page").empty();
        })

        //funcion para .js-show-make
        $(".js-show-make").click(function() {
            $(".page").addClass("make");
            $(".btn-secondary js-show-make").addClass("active");
        })
    }


    //quise agregar los ingredientes a la lista pero no resultó aún
    /*function ingredientes(recipe) {

        var items = [];

        $.each(data, function(i, item) {

            items.push('<li>' + item.ingredients + '</li>');

        }); // close each()

        $('#ingredientes').append(items.join(''));
    }*/

});