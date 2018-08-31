var queryURL = "1031789494944-u1d3rk494jnlikidj71cmfibi6daaom3.apps.googleusercontent.com";


$("#").on("click", function() {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";


    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {

        console.log(response);
      });
  });
        