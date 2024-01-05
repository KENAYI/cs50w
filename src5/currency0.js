document.addEventListener('DOMContentLoaded', function() {
    // Send a GET request to the URL 
    fetch("https://api.exchangeratesapi.io/latest?base=GBP&access_key=3087ffb6fb64efa1011b907587344d96")
    // Put response into JSON form
    .then(response => response.json())
    .then(data => {
        // Get rate from data
        const rate = data.rates.EUR;
        // Display message on the screen
        document.querySelector('body').innerHTML = `1 GBP is equal to ${rate.toFixed(3)} EUR.`;
    })
    .catch(error => {
        console.log('Error:', error);
    });
});