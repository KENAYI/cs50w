document.addEventListener('DOMContentLoaded', () => {

    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    // Enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        document.querySelector('#submit').disabled = false;
    };

    document.querySelector('form').onsubmit = () => {

        // Create new item for list
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        // Add new item to task list
        document.querySelector('#tasks').append(li);

        // Clear input field and disable button again
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    };

});