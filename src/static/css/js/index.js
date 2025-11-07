document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    window.location.href = `/imc/${peso}/${altura}`;
});