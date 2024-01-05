document.addEventListener('DOMContentLoaded', () => {

    // Have each button change the color of the heading
    document.querySelectorAll('.color-change').forEach(button => {
        button.onclick = () => {
            document.querySelector('#hello').style.color = button.dataset.color;
        };
    });
    console.log(document.querySelectorAll('button'));
});