function getJoke(category) {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const jokeContainer = document.getElementById('jokeContainer');
                jokeContainer.innerHTML = data.value;
            })
            .catch(error => {
                console.error(error);
            });
    }
    console.log(getJoke());