document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function() {
        fetch("https://api.exchangeratesapi.io/latest?base=GBP&access_key=3087ffb6fb64efa1011b907587344d96")
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefined) {
                const result = `1 GBP is equal to ${rate.toFixed(3)} ${currency}`;
                document.querySelector('#result').innerHTML = result;
            } else {
                document.querySelector('#result').innerHTML = 'Invalid currency.';
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
        return false;
    }
});