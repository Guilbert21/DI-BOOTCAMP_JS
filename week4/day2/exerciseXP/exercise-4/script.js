(function() {
    // Get the navbar element
    let navbar = document.querySelector('.navbar-collapse');

    let userName = 'Elon Musk';
    let profilePicturePath = 'C:/Users/awush/OneDrive/Desktop/DI/week4/Day2/exerciseXP/exercise-4/img/Elon Musk.jpg';

    // Create a new div element
    let userDiv = document.createElement('div');
    userDiv.className = 'navbar-text';

    // Set the inner HTML of the div to include the user's name and profile picture
    userDiv.innerHTML = '<p class="mr-2">Welcome, ' + userName + '!</p><img src="' + profilePicturePath + '" alt="Profile Picture" class="rounded-circle" style="width: 30px; height: 30px;">';

    // Append the new div to the navbar
    navbar.appendChild(userDiv);
})();
