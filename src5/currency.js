    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('form').onsubmit = function() {
    
            // Send a GET request to the URL
            fetch('https://api.exchangeratesapi.io/latest?base=GBP&access_key=3087ffb6fb64efa1011b907587344d96')
            // Put response into json form
            .then(response => response.json())
            .then(data => {
                // Get currency from user input and convert to upper case
                const currency = document.querySelector('#currency').value.toUpperCase();
    
                // Get rate from data
                const rate = data.rates[currency];
    
                // Check if currency is valid:
                if (rate !== undefined) {
                    // Display exchange on the screen
                    document.querySelector('#result').innerHTML = `1 GBP is equal to ${rate.toFixed(3)} ${currency}.`;
                }
                else {
                    // Display error on the screen
                    document.querySelector('#result').innerHTML = 'Invalid Currency.';
                }
            })
            // Catch any errors and log them to the console
            .catch(error => {
                console.log('Error:', error);
            });
            // Prevent default submission
            return false;
        }
    });