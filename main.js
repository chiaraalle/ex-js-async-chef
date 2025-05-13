/*
In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). 
Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef
Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
*/


async function getChefBirthday(id) {
    const recipe = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipeData = await recipe.json();
    const chefUser = await fetch(`https://dummyjson.com/users/${recipeData.userId}`)
    const chefBirthday = await chefUser.json();
    return chefBirthday;
}

getChefBirthday(1)
    .then(chefBirthday => console.log('La data di nascita è:', chefBirthday.birthDate))
    .catch((error) => {
        console.error('Error:', error);
    });


