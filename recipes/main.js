import recipes from './recipes.mjs';

// Function to create and append elements
function createRecipeBox(recipe) {
    const container = document.getElementById('recipe-container');

    // Create elements
    const recipeBox = document.createElement('div');
    recipeBox.classList.add('recipe-box');

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;

    const details = document.createElement('div');
    details.classList.add('recipe-details');

    const title = document.createElement('h2');
    title.textContent = recipe.name;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = recipe.description;

    const ratingContainer = document.createElement('span');
    ratingContainer.classList.add('rating');
    ratingContainer.setAttribute('role', 'img');
    ratingContainer.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);

    // Creating star elements based on rating
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.setAttribute('aria-hidden', 'true');
        if (i < recipe.rating) {
            star.classList.add('icon-star');
            star.textContent = '⭐';
        } else {
            star.classList.add('icon-star-empty');
            star.textContent = '☆';
        }
        ratingContainer.appendChild(star);
    }

    // const author = document.createElement('p');
    // author.classList.add('author');
    // author.textContent = `Author: ${recipe.author}`;

    // const cookTime = document.createElement('p');
    // cookTime.classList.add('cook-time');
    // cookTime.textContent = `Cook Time: ${recipe.cookTime}`;

    const tags = document.createElement('h3');
    tags.classList.add('tags');
    tags.textContent = recipe.tags;

    const rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = `Rating: ${recipe.rating}`;

    // Append elements
    details.appendChild(tags);
    details.appendChild(title);
    details.appendChild(ratingContainer);
    details.appendChild(description);
    // details.appendChild(author);
    // details.appendChild(cookTime);
    // details.appendChild(tags);
    // details.appendChild(rating);

    recipeBox.appendChild(img);
    recipeBox.appendChild(details);

    container.appendChild(recipeBox);
}

// Call the function with the desired recipe from the recipes array
createRecipeBox(recipes[0]); // Displaying the first recipe in the array for example
