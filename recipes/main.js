import recipes from './recipes.mjs';

// Function to create and append elements
function createRecipeBox(recipe) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = '';  // Clear previous content

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

    const tags = document.createElement('div');
    tags.classList.add('tags');
    tags.textContent = recipe.tags.join(', '); // Join tags array to a comma-separated string

    // Append elements
    details.appendChild(tags);
    details.appendChild(title);
    details.appendChild(ratingContainer);
    details.appendChild(description);

    recipeBox.appendChild(img);
    recipeBox.appendChild(details);

    container.appendChild(recipeBox);
}

// Function to display a random recipe
function displayRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    createRecipeBox(recipes[randomIndex]);
}

// Function to filter recipes based on a search query
function filterRecipes(query) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    if (filteredRecipes.length > 0) {
        createRecipeBox(filteredRecipes[0]);
    } else {
        const container = document.getElementById('recipe-container');
        container.innerHTML = '<p>No recipes found</p>';
    }
}

// Event listener for search functionality
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    filterRecipes(query);
});

// Display a random recipe on page load
window.addEventListener('load', displayRandomRecipe);
