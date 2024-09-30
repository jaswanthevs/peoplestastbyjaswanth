const restaurantData = [
    {
        name: "Burger Paradise",
        area: "nyc-manhattan",
        image: "images/burger.jpg",
        dish: "Juicy Burger",
        address: "123 Main St, Manhattan",
        googleMaps: "https://www.google.com/maps/place/Burger+Paradise",
        rating: 0
    },
    {
        name: "Midtown Pies",
        area: "nyc-manhattan",
        image: "images/pizza.jpg",
        dish: "Pepperoni Pizza",
        address: "456 Broadway, Manhattan",
        googleMaps: "https://goo.gl/maps/example",
        rating: 0
    }
    // Add more restaurant objects...
];

function generateRestaurantCards(areaId) {
    console.log("Generating cards for area:", areaId); // Debugging line
    const restaurantContainer = document.getElementById(areaId);
    if (!restaurantContainer) {
        console.error("No element found with id:", areaId); // Debugging line
        return;
    }
    restaurantContainer.innerHTML = '';

    const filteredRestaurants = restaurantData.filter(restaurant => restaurant.area === areaId);
    console.log("Filtered restaurants:", filteredRestaurants); // Debugging line

    filteredRestaurants.forEach(restaurant => {
        const restaurantCard = `
            <div class="restaurant">
                <h4>${restaurant.name}</h4>
                <img src="${restaurant.image}" alt="${restaurant.dish}">
                <p><strong>Dish:</strong> ${restaurant.dish}</p>
                <p><strong>Address:</strong> ${restaurant.address}</p>
                <a href="${restaurant.googleMaps}" target="_blank">View on Google Maps</a>
            </div>
        `;
        restaurantContainer.innerHTML += restaurantCard;
    });
}

function showAreas(cityId) {
    document.querySelectorAll('.area-list').forEach(list => list.style.display = 'none');
    document.getElementById(cityId).style.display = 'block';
    document.getElementById('restaurant-display').style.display = 'none';
}

function showRestaurants(areaId) {
    document.getElementById('restaurant-display').style.display = 'block';
    generateRestaurantCards(areaId);
}

function toggleSection(sectionId) {
    const sections = ['about-me', 'about-website', 'our-mission', 'contacts'];
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (section === sectionId) {
            element.style.display = element.style.display === 'block' ? 'none' : 'block';
        } else {
            element.style.display = 'none';
        }
    });
}
